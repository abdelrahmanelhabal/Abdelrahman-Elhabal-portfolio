import { Boxes, Cloud, Code2, Database, GitBranch, Server, Trophy } from 'lucide-react'
import { skillCategories } from '../data/skills'
import { Reveal, Section } from './Reveal'

const icons = { cloud: Cloud, boxes: Boxes, git: GitBranch, code: Code2, server: Server, database: Database, trophy: Trophy }
const all = skillCategories.flatMap((c) => c.items)

// Spotlight follows the cursor inside whichever card is hovered.
const track = (e) => {
  const c = e.target.closest('.skill-card')
  if (!c) return
  const r = c.getBoundingClientRect()
  c.style.setProperty('--mx', `${e.clientX - r.left}px`)
  c.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical Skills">
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[...all, ...all].map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </div>
      <div className="skills-grid" onMouseMove={track}>
        {skillCategories.map(({ title, icon, items }, i) => {
          const Icon = icons[icon]
          return (
            <Reveal key={title} delay={i * 70} className={`skill-card ${items.length > 5 ? 'wide' : ''}`}>
              <h3>
                <Icon size={18} aria-hidden="true" />
                <span>{title}</span>
                <small>{String(items.length).padStart(2, '0')}</small>
              </h3>
              <ul>{items.map((s, j) => <li key={s} style={{ '--i': j }}>{s}</li>)}</ul>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
