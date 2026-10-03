import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionTitle from './SectionTitle.jsx'
import { FLOWS } from '../data/content.js'

export default function Flows() {
  const [active, setActive] = useState(FLOWS[0].id)
  const flow = FLOWS.find((f) => f.id === active)

  return (
    <section className="section" id="flows">
      <div className="container">
        <SectionTitle
          eyebrow="Architecture"
          title="How every flow works, step by step"
          text="Pick a flow to see the exact functions and checks that run behind the scenes."
        />

        <div className="tabs" role="tablist" aria-label="Application flows">
          {FLOWS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={active === f.id}
              className={`tab ${active === f.id ? 'active' : ''}`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={flow.id}
            className="stepper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {flow.steps.map((s, i) => (
              <motion.div
                className="step"
                key={s.t}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
              >
                <div className="step-num">{i + 1}</div>
                <div className="step-body">
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
