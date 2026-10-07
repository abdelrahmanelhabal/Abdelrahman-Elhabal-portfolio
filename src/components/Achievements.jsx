import { Code2, ExternalLink, Medal, Trophy, TrendingUp } from 'lucide-react'
import { repos, socialLinks } from '../data/socialLinks'
import { Reveal, Section, ext, spot } from './Reveal'

const items = [
  { icon: Trophy, tag: 'ICPC', title: 'ICPC Regional Finalist', text: 'Qualified for the regional stage of the International Collegiate Programming Contest.' },
  { icon: Medal, tag: 'ECPC', title: 'ECPC Finalist', text: 'Reached the finals of the Egyptian Collegiate Programming Contest.' },
  { icon: TrendingUp, tag: 'Codeforces', title: 'Codeforces Expert', text: 'Expert rating on Codeforces, a leading competitive programming platform.', href: socialLinks.codeforces, link: 'View profile' },
  { icon: Code2, tag: 'Practice', title: 'Competitive Programming', text: 'Ongoing algorithmic problem solving, with solutions kept in a public repository.', href: repos.competitive, link: 'View repository' },
]

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Achievements">
      <div className="ach-grid" onMouseMove={spot}>
        {items.map(({ icon: Icon, tag, title, text, href, link }, i) => (
          <Reveal key={title} className="ach" delay={i * 90}>
            <span className="ach-mark" aria-hidden="true">{tag}</span>
            <div className="ach-icon"><Icon size={26} aria-hidden="true" /></div>
            <span className="ach-tag">{tag}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            {href && <a href={href} className="text-link" {...ext}>{link} <ExternalLink size={14} aria-hidden="true" /></a>}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
