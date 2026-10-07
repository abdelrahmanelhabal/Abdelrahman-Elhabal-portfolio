import { Github, TrendingUp } from 'lucide-react'
import { repos, socialLinks } from '../data/socialLinks'
import { useCodeforces } from '../data/codeforces'
import { Reveal, Section, ext } from './Reveal'

const flow = ['Problem', 'Algorithms', 'Data Structures', 'Optimization', 'Accepted Solution']
const topics = ['Algorithmic problem solving', 'Data structures', 'Optimization', 'Complexity analysis', 'Contest participation (ICPC, ECPC, Codeforces)', 'Problem setting']
const cap = (s) => s && s.replace(/\b\w/g, (c) => c.toUpperCase())

export default function CompetitiveProgramming() {
  const cf = useCodeforces()
  const stats = cf && [
    ['Current rating', cf.rating], ['Max rating', cf.maxRating], ['Rank', cap(cf.rank)], ['Max rank', cap(cf.maxRank)],
  ].filter(([, v]) => v !== undefined && v !== null)
  return (
    <Section id="competitive-programming" eyebrow="Competitive Programming" title="Competitive Programming" className="cp">
      <div className="cp-grid">
        <Reveal>
          <p className="cp-lead">Competitive programming is a core part of my engineering background. It trains me to model problems precisely, choose the right data structures, and reason about time and memory complexity under pressure. That discipline carries over to how I build and operate systems.</p>
          <ul className="cp-topics">{topics.map((t, i) => <li key={t} style={{ '--i': i }}><span aria-hidden="true">//</span> {t}</li>)}</ul>
          <p className="cp-note">ICPC Regional Finalist · ECPC Finalist · Codeforces Expert</p>
          <div className="btn-row">
            <a href={socialLinks.codeforces} className="btn primary sm" {...ext}><TrendingUp size={15} /> Codeforces Profile</a>
            <a href={repos.competitive} className="btn secondary sm" {...ext}><Github size={15} /> Competitive_Programming Repo</a>
          </div>
        </Reveal>
        <Reveal delay={120} className="cp-side">
          <div className="cp-term">
            <div className="term-bar"><i /><i /><i /><span>solve.sh</span></div>
            <ol className="flow" aria-label="Problem solving pipeline">
              {flow.map((f, i) => <li key={f} style={{ '--i': i }}><span className="idx">{String(i + 1).padStart(2, '0')}</span>{f}</li>)}
            </ol>
            <p className="cp-run" aria-hidden="true"><b className="prompt">$ </b>./solve &lt; input.txt{'\n'}<span className="out">✓ accepted</span> <span className="caret" /></p>
          </div>
          {stats && stats.length > 0 && (
            <dl className="cf-stats" aria-label="Live Codeforces statistics">
              {stats.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
