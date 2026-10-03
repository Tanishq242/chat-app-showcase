import { CheckCircle2, Download, Github, Linkedin, Mail } from 'lucide-react'
import SectionTitle, { Reveal } from './SectionTitle.jsx'
import { ME, SKILLS } from '../data/content.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle
          eyebrow="About the Developer"
          title="Built by a developer who cares about details"
          text="Get the source code or reach out directly."
        />
        <div className="about">
          <Reveal>
            <div className="about-card">
              <h3>{ME.name}</h3>
              <div className="role">{ME.role}</div>
              <p>{ME.bio}</p>
              <div className="links">
                <a className="btn btn-primary" href={ME.repo} target="_blank" rel="noreferrer">
                  <Download size={17} /> Source code
                </a>
                <a className="btn btn-ghost" href={ME.github} target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
                <a className="btn btn-ghost" href={ME.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={17} /> LinkedIn
                </a>
                <a className="btn btn-ghost" href={ME.email}>
                  <Mail size={17} /> Email
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="about-card">
              <h3>What this project demonstrates</h3>
              <p>Skills practised while designing and building the app.</p>
              <ul className="check-list">
                {SKILLS.map((s) => (
                  <li key={s}>
                    <CheckCircle2 size={18} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
