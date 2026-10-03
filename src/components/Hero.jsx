import { motion } from 'framer-motion'
import { ArrowRight, Github, ShieldCheck } from 'lucide-react'
import { APP, ME, STATS } from '../data/content.js'
import ScreenFrame from './ScreenFrame.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="grid-bg" />
      <div className="container">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="badge">
              <span className="pulse-dot" /> JavaFX · RSA · OTP Verified
            </span>
            <h1>
              {APP.tagline.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="grad-text">{APP.tagline.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="lead">{APP.description}</p>
            <div className="hero-cta">
              <a href="#demo" className="btn btn-primary">
                <ShieldCheck size={18} /> Try the encryption demo <ArrowRight size={16} />
              </a>
              <a href={ME.repo} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <Github size={18} /> View source
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="float">
              <ScreenFrame id="chat" file="dashboard.png" title={`${APP.name} — Main Chat`} />
            </div>
          </motion.div>
        </div>

        <div className="stats">
          {STATS.map((s, i) => (
            <motion.div
              className="stat"
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <b className="grad-text">{s.value}</b>
              <span>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
