import { Key, Layout, Lock, Settings, ShieldCheck, Smartphone, Users } from 'lucide-react'
import SectionTitle, { Reveal } from './SectionTitle.jsx'
import { FEATURES } from '../data/content.js'

const ICONS = {
  smartphone: Smartphone,
  lock: Lock,
  shield: ShieldCheck,
  key: Key,
  users: Users,
  settings: Settings,
  layout: Layout,
}

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <SectionTitle
          eyebrow="Features"
          title="Everything a secure messenger needs"
          text="From verified sign-up to encrypted conversations, each feature is built around keeping messages private."
        />
        <div className="card-grid">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] || ShieldCheck
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="card">
                  <div className="card-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
