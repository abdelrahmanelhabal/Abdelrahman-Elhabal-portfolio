import { Cloud, Code2, PenTool, Trophy } from 'lucide-react'
import { Reveal, Section } from './Reveal'

const roles = [
  { icon: Cloud, title: 'DevOps Engineer', text: 'Automates cloud infrastructure with AWS, Kubernetes, Docker and Terraform, delivered through CI/CD and GitOps with Helm and ArgoCD.' },
  { icon: Trophy, title: 'Competitive Programmer', text: 'ICPC Regional Finalist, ECPC Finalist and Codeforces Expert, solving problems under contest conditions.' },
  { icon: PenTool, title: 'Problem Setter', text: 'Designs contest problems: statements, constraints, edge cases and the intended solution behind them.' },
  { icon: Code2, title: 'Software Engineer', text: 'Java and Spring backends with Hibernate and MySQL, built on strong algorithm and data-structure fundamentals.' },
]

const profile = [
  ['name', 'Abdelrahman Elhabal'],
  ['roles', ['DevOps Engineer', 'Competitive Programmer', 'Problem Setter']],
  ['contests', ['ICPC Regional Finalist', 'ECPC Finalist']],
  ['codeforces', 'El7abal · Expert'],
  ['languages', ['C++', 'Java', 'JavaScript']],
  ['focus', ['Cloud Infrastructure', 'Kubernetes', 'GitOps', 'Algorithms']],
]

const lines = []
profile.forEach(([k, v], idx) => {
  const comma = idx === profile.length - 1 ? '' : ','
  const key = <span className="k">"{k}"</span>
  if (Array.isArray(v)) {
    lines.push(<>{key}: [</>)
    v.forEach((x, i) => lines.push(<>{'  '}<span className="s">"{x}"</span>{i < v.length - 1 ? ',' : ''}</>))
    lines.push(<>]{comma}</>)
  } else lines.push(<>{key}: <span className="s">"{v}"</span>{comma}</>)
})

const track = (e) => {
  const c = e.target.closest('.role')
  if (!c) return
  const r = c.getBoundingClientRect()
  c.style.setProperty('--mx', `${e.clientX - r.left}px`)
  c.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="DevOps Engineer, Competitive Programmer & Problem Setter">
      <div className="about-top">
        <Reveal className="about-text">
          <p className="lead">I'm a DevOps Engineer, competitive programmer and problem setter with a software engineering foundation and an ICPC background.</p>
          <p>I automate the infrastructure software runs on, from AWS and Terraform to Kubernetes, Helm and ArgoCD, with CI/CD and GitOps keeping delivery repeatable.</p>
          <p>Contests taught me to reason about complexity and edge cases under pressure. As a problem setter I see problems from the other side: writing the statement, defining the constraints and thinking through the intended solution and its pitfalls.</p>
          <p>Software engineering, cloud and DevOps, and competitive programming feed each other. I write the code, automate how it ships, and sharpen the thinking behind it in contests.</p>
        </Reveal>
        <Reveal delay={120} className="profile">
          <div className="term-bar"><i /><i /><i /><span>profile.json</span></div>
          <pre aria-label="Profile summary">
            <span className="ln p" style={{ '--i': 0 }}>{'{\n'}</span>
            {lines.map((l, i) => <span key={i} className="ln" style={{ '--i': i + 1 }}>{'  '}{l}{'\n'}</span>)}
            <span className="ln p" style={{ '--i': lines.length + 1 }}>{'}'}</span>
          </pre>
        </Reveal>
      </div>
      <ul className="roles" onMouseMove={track}>
        {roles.map(({ icon: Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 80} className="role">
            <Icon size={20} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
