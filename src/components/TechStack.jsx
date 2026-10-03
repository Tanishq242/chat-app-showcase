import SectionTitle, { Reveal } from './SectionTitle.jsx'
import { TECH } from '../data/content.js'

export default function TechStack() {
  return (
    <section className="section alt" id="tech">
      <div className="container">
        <SectionTitle
          eyebrow="Tech Stack"
          title="Technologies and concepts used"
          text="A mix of desktop UI, security, networking and data handling."
        />
        <Reveal>
          <div className="chips">
            {TECH.map((t) => (
              <div className="chip" key={t.name}>
                <b>{t.name}</b>
                <span>{t.group}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
