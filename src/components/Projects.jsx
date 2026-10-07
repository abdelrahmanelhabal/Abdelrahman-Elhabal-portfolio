import { ArrowUpRight, ExternalLink, Github, Server, ShoppingCart } from 'lucide-react'
import { projects } from '../data/projects'
import { Reveal, Section, ext, spot } from './Reveal'

const icons = { server: Server, cart: ShoppingCart }

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Projects">
      <div className="projects-grid" onMouseMove={spot}>
        {projects.map((p, i) => {
          const Icon = icons[p.icon]
          return (
            <Reveal as="article" key={p.title} delay={i * 100} className="project">
              <div className="project-visual" aria-hidden="true">
                <Icon size={30} />
                <span>{p.tech.slice(0, 3).join(' · ')}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="features" aria-label={`${p.title} key technical features`}>
                {p.features.map((f, j) => <li key={f} style={{ '--i': j }}>{f}</li>)}
              </ul>
              <ul className="tags" aria-label={`${p.title} technologies`}>{p.tech.map((t, j) => <li key={t} style={{ '--i': j }}>{t}</li>)}</ul>
              <div className="btn-row">
                <a href={p.repo} className="btn secondary sm" {...ext}><Github size={15} /> View on GitHub <ArrowUpRight size={14} className="arrow" /></a>
                {p.liveUrl && <a href={p.liveUrl} className="btn primary sm" {...ext}><ExternalLink size={15} /> Live Demo</a>}
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
