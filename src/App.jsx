import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Screens from './components/Screens.jsx'
import Flows from './components/Flows.jsx'
import Security from './components/Security.jsx'
import EncryptionDemo from './components/EncryptionDemo.jsx'
import TechStack from './components/TechStack.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screens />
        <Flows />
        <Security />
        <EncryptionDemo />
        <TechStack />
        <About />
      </main>
      <Footer />
    </>
  )
}
