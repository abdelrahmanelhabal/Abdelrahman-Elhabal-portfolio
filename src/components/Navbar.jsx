import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Github, Menu, X } from 'lucide-react'
import { navItems, site } from '../data/site'
import { socialLinks } from '../data/socialLinks'
import { ext } from './Reveal'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pill, setPill] = useState({ x: 0, w: 0 })
  const bar = useRef(null)
  const list = useRef(null)

  const measure = useCallback(() => {
    const a = list.current?.querySelector('a.active')
    if (a) setPill({ x: a.offsetLeft, w: a.offsetWidth })
  }, [])
  useLayoutEffect(measure, [active, measure])
  useEffect(() => {
    window.addEventListener('resize', measure)
    document.fonts?.ready.then(measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 120)
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    navItems.forEach(({ id }) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); io.disconnect() }
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="logo" aria-hidden="true">AE</span>
          <span className="brand-text">
            <span className="brand-name">{site.name}</span>
            <span className="brand-sub">{site.subtitle}</span>
          </span>
        </a>
        <nav aria-label="Primary">
          <ul id="nav-links" ref={list} className={`nav-links ${open ? 'open' : ''}`}>
            <li className="nav-pill" aria-hidden="true" style={{ transform: `translateX(${pill.x}px)`, width: pill.w }} />
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={socialLinks.github} className="nav-cta" aria-label="GitHub profile" {...ext}><Github size={16} /> GitHub</a>
        <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className="progress" aria-hidden="true"><span ref={bar} /></div>
    </header>
  )
}
