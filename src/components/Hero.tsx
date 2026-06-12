import styles from "./Hero.module.css"

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h2 className={styles.label}>¡¡ Nos casamos !!</h2>
        <h1 className={styles.title}>
          Ana <span className={styles.ampersand}>&</span> Javi
        </h1>
        <p className={styles.date}>07.11.2026</p>
        <div className={styles.line} />
        <p className={styles.sub}>Nos ilusiona compartir este día con vosotros</p>
        <div className={styles.arrow} />
      </div>
      <svg className={styles.wave} viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="#faf5f0" />
      </svg>
    </section>
  )
}

export default Hero
