import Hero from "./components/Hero"
import Countdown from "./components/Countdown"
import Story from "./components/Story"
import Celebracion from "./components/Celebracion"
import Ceremonia from "./components/Ceremonia"
import Asistencia from "./components/Asistencia"
import Footer from "./components/Footer"
import Reveal from "./components/Reveal"

function App() {
  return (
    <>
      <Hero />
      <Reveal><Countdown /></Reveal>
      <Reveal delay={0.15}><Story /></Reveal>
      <Reveal delay={0.1}>
        <div className="sideWrap" style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}><Ceremonia /></div>
          <div style={{ flex: 1 }}><Celebracion /></div>
        </div>
      </Reveal>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
        <rect width="1440" height="60" fill="#faf5f0" />
        <path d="M0,15 C360,45 1080,0 1440,25 L1440,60 L0,60 Z" fill="#d48a6a" />
      </svg>
      <style>{`.sideWrap section { padding-left: 0!important; padding-right: 0!important; } @media(max-width:700px){.sideWrap{flex-direction:column}}`}</style>
      <Reveal delay={0.2}><Asistencia /></Reveal>
      <Reveal delay={0.1}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', maxWidth: 400, margin: '0 auto', padding: '0 1rem 3rem', background: '#faf5f0' }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, #d48a6a)' }} />
          <svg width="22" height="22" viewBox="0 0 22 22">
            <rect x="7" y="3" width="8" height="8" rx="1" fill="none" stroke="#d48a6a" strokeWidth="1.5" />
            <polygon points="11,12 6,19 16,19" fill="none" stroke="#d48a6a" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, #d48a6a)' }} />
        </div>
      </Reveal>
      <Reveal delay={0.2}><Footer /></Reveal>
    </>
  )
}

export default App