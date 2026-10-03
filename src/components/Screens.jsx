import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionTitle from './SectionTitle.jsx'
import ScreenFrame from './ScreenFrame.jsx'
import { SCREENS } from '../data/content.js'

export default function Screens() {
  const [active, setActive] = useState(SCREENS[0].id)
  const screen = SCREENS.find((s) => s.id === active)

  return (
    <section className="section alt" id="screens">
      <div className="container">
        <SectionTitle
          eyebrow="UI Sections"
          title="A clean multi-panel interface"
          text="Six purpose-built screens, from registration to the three-column chat view."
        />

        <div className="tabs" role="tablist" aria-label="Application screens">
          {SCREENS.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === s.id}
              className={`tab ${active === s.id ? 'active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={screen.id}
            className="screen-layout"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ScreenFrame id={screen.id} file={screen.file} title={screen.title} />
            <div className="screen-info">
              <h3>{screen.title}</h3>
              <p>{screen.text}</p>
              <ul className="check-list">
                {screen.points.map((p) => (
                  <li key={p}>
                    <CheckCircle2 size={18} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
