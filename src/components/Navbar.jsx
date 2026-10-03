import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X, MessageSquareLock } from 'lucide-react'
import { APP } from '../data/content.js'

const LINKS = [
  ['Features', '#features'],
  ['Screens', '#screens'],
  ['Flows', '#flows'],
  ['Security', '#security'],
  ['Live Demo', '#demo'],
  ['Tech', '#tech'],
  ['About', '#about'],
]

function getInitialTheme() {
  const attr = document.documentElement.getAttribute('data-theme')
  return attr === 'light' ? 'light' : 'dark'
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {
      /* storage may be blocked; theme still works for this visit */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label={`${APP.name} home`}>
          <span className="brand-logo">
            <MessageSquareLock size={18} />
          </span>
          {APP.name}
        </a>

        <nav className="nav-links" aria-label="Main">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
