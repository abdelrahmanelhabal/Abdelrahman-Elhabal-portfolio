import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks } from '../data/socialLinks'
import { ext } from './Reveal'

const lines = [
  ['$', 'terraform apply', ''],
  ['', 'aws infrastructure provisioned', 'ok'],
  ['$', 'helm upgrade --install app ./chart', ''],
  ['', 'release deployed to kubernetes', 'ok'],
  ['$', 'argocd app sync app', ''],
  ['', 'git state reconciled', 'ok'],
  ['$', 'g++ -O2 solution.cpp && ./a.out', ''],
  ['', 'accepted', 'ok'],
]

// Text typed on load, in order. `step` = characters added per tick.
const segs = [
  { text: 'DevOps · Cloud · Algorithms', step: 1 },
  { text: "Hi, I'm Abdelrahman Elhabal", step: 1 },
  { text: 'DevOps Engineer & Competitive Programmer', step: 1 },
  { text: 'I build and automate cloud infrastructure with Kubernetes, Docker, Terraform and AWS, and ship it through CI/CD and GitOps pipelines. Competitive programming keeps my problem-solving sharp.', step: 3 },
]

function useTyping() {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [p, setP] = useState({ seg: reduce ? segs.length : 0, n: 0 })
  useEffect(() => {
    if (p.seg >= segs.length) return
    const t = setTimeout(() => {
      const n = p.n + segs[p.seg].step
      setP(n >= segs[p.seg].text.length ? { seg: p.seg + 1, n: 0 } : { seg: p.seg, n })
    }, p.n === 0 ? 220 : 24)
    return () => clearTimeout(t)
  }, [p])
  return p
}

// Reserves the final layout (invisible ghost text) so nothing jumps while typing.
function Typed({ i, p, as: Tag = 'p', className, render = (x) => x }) {
  const full = segs[i].text
  const shown = p.seg > i ? full : p.seg === i ? full.slice(0, p.n) : ''
  const caret = p.seg === i || (p.seg >= segs.length && i === segs.length - 1)
  return (
    <Tag className={`t-wrap ${className || ''}`}>
      <span className="t-ghost" aria-hidden="true">{render(full)}</span>
      <span className="t-live" aria-hidden="true">{render(shown)}{caret && <span className="caret" />}</span>
      <span className="sr-only">{full}</span>
    </Tag>
  )
}

const renderName = (x) => <>{x.slice(0, 8)}<span className="grad">{x.slice(8)}</span></>

export default function Hero() {
  const p = useTyping()
  const tiltEl = useRef(null)
  const calm = () => window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches
  const spot = (e) => {
    if (calm()) return
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--hx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--hy', `${e.clientY - r.top}px`)
  }
  const tilt = (e) => {
    const el = tiltEl.current
    if (!el || calm()) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`
  }
  const untilt = () => { if (tiltEl.current) tiltEl.current.style.transform = '' }
  return (
    <section id="home" className="hero" aria-label="Introduction" onMouseMove={spot}>
      <div className="hero-bg" aria-hidden="true" />
      <div className="blob b1" aria-hidden="true" />
      <div className="blob b2" aria-hidden="true" />
      <div className="dots" aria-hidden="true" />
      <div className="hero-spot" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Typed i={0} p={p} className="hero-kicker" />
          <Typed i={1} p={p} as="h1" render={renderName} />
          <Typed i={2} p={p} className="hero-title" />
          <Typed i={3} p={p} className="hero-desc" />
          <ul className={`role-pills ${p.seg >= segs.length ? 'show' : ''}`} aria-label="Roles">
            <li>DevOps Engineer</li><li>Competitive Programmer</li><li>Problem Setter</li>
          </ul>
          <div className={`btn-row ${p.seg >= segs.length ? 'show' : ''}`}>
            <a href="#projects" className="btn primary">View Projects <ArrowRight size={16} className="arrow" /></a>
            <a href="#contact" className="btn secondary"><Mail size={16} /> Contact Me</a>
            <a href={socialLinks.github} className="btn ghost" {...ext}><Github size={16} /> GitHub</a>
            {socialLinks.linkedin !== '#' && <a href={socialLinks.linkedin} className="btn ghost" {...ext}><Linkedin size={16} /> LinkedIn</a>}
          </div>
        </div>
        <div className="stage" onMouseMove={tilt} onMouseLeave={untilt}>
        <div className="tilt" ref={tiltEl}>
        <div className="terminal" role="img" aria-label="Terminal window showing terraform, helm, argocd and a C++ solution being run">
          <div className="term-bar"><i /><i /><i /><span>~/platform</span></div>
          <pre className="term-body">
            {lines.map(([pr, t, s], i) => (
              <span key={i} className="term-line" style={{ animationDelay: `${0.4 + i * 0.25}s` }}>
                {pr && <b className="prompt">{pr} </b>}
                <span className={s ? 'out' : ''}>{s ? '✓ ' : ''}{t}</span>{'\n'}
              </span>
            ))}
            <span className="cursor">▍</span>
          </pre>
        </div>
        </div>
        <span className="float f1" aria-hidden="true">Kubernetes</span>
        <span className="float f2" aria-hidden="true">Terraform</span>
        <span className="float f3" aria-hidden="true">Codeforces Expert</span>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About"><ChevronDown size={22} /></a>
    </section>
  )
}
