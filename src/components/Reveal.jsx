import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>
}

export function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2 id={`${id}-title`}>{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export const ext = { target: '_blank', rel: 'noopener noreferrer' }

// Cursor spotlight: sets --mx/--my on whichever card is under the pointer.
export const spot = (e) => {
  const c = e.target.closest('.ach,.project,.contact-card')
  if (!c) return
  const r = c.getBoundingClientRect()
  c.style.setProperty('--mx', `${e.clientX - r.left}px`)
  c.style.setProperty('--my', `${e.clientY - r.top}px`)
}
