import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, TrendingUp } from 'lucide-react'
import { socialLinks } from '../data/socialLinks'
import { Reveal, Section, ext, spot } from './Reveal'

export const contactItems = [
  { key: 'github', label: 'GitHub', icon: Github, note: 'Repositories and code' },
  { key: 'codeforces', label: 'Codeforces', icon: TrendingUp, note: 'Contest profile' },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin, note: 'Professional network' },
  { key: 'email', label: 'Email', icon: Mail, note: 'Get in touch' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const hasMail = socialLinks.email.startsWith('mailto:')
  const address = socialLinks.email.replace('mailto:', '')
  const copy = async () => {
    try { await navigator.clipboard.writeText(address); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* clipboard unavailable */ }
  }
  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something Great">
      <div className="contact-wrap">
        <Reveal className="mail-panel">
          <p className="contact-lead">Whether you're a recruiter, an engineer, or a collaborator working on cloud infrastructure, platform tooling or algorithms, I'd be glad to connect.</p>
          {hasMail && (
            <>
              <span className="mail-label">// say hello</span>
              <a className="mail-addr" href={socialLinks.email}>{address}</a>
              <div className="mail-actions">
                <a href={socialLinks.email} className="btn primary sm"><Mail size={15} /> Send an Email <ArrowUpRight size={14} className="arrow" /></a>
                <button type="button" className="btn secondary sm copy-btn" onClick={copy} aria-live="polite">
                  {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy address'}
                </button>
              </div>
            </>
          )}
        </Reveal>
        <ul className="contact-cards" onMouseMove={spot}>
          {contactItems.map(({ key, label, icon: Icon, note }, i) => {
            const href = socialLinks[key]
            const placeholder = !href || href === '#'
            const body = (<><span className="ic"><Icon size={20} aria-hidden="true" /></span><b>{label}</b><small>{placeholder ? 'Add link in data/socialLinks.js' : note}</small>{!placeholder && <ArrowUpRight size={16} className="go" aria-hidden="true" />}</>)
            return (
              <Reveal as="li" key={key} delay={i * 90}>
                {placeholder
                  ? <span className="contact-card disabled" aria-disabled="true">{body}</span>
                  : <a href={href} className="contact-card" {...(key === 'email' ? {} : ext)}>{body}</a>}
              </Reveal>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
