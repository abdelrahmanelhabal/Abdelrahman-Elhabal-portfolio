import { ArrowUp } from 'lucide-react'
import { site } from '../data/site'
import { socialLinks } from '../data/socialLinks'
import { contactItems } from './Contact'
import { ext } from './Reveal'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{site.name}</strong>
          <p>{site.subtitle}</p>
        </div>
        <ul className="footer-social">
          {contactItems.map(({ key, label, icon: Icon }) => {
            const href = socialLinks[key]
            if (!href || href === '#') return null
            return <li key={key}><a href={href} aria-label={label} {...(key === 'email' ? {} : ext)}><Icon size={18} /></a></li>
          })}
        </ul>
        <div className="footer-meta">
          <p>© 2026 Abdelrahman Elhabal. All rights reserved.</p>
        </div>
        <a href="#home" className="to-top" aria-label="Back to top"><ArrowUp size={18} /></a>
      </div>
    </footer>
  )
}
