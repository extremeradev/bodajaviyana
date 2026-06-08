import { useState, useEffect } from "react"
import styles from "./Countdown.module.css"

const TARGET = new Date("2026-11-07T00:00:00")

function calc() {
  const diff = TARGET.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function Countdown() {
  const [time, setTime] = useState(calc)

  useEffect(() => {
    const id = setInterval(() => setTime(calc), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Quedan</h2>
      <div className={styles.grid}>
        <div className={styles.block}>
          <span className={styles.number}>{time.days}</span>
          <span className={styles.label}>días</span>
        </div>
        <div className={styles.block}>
          <span className={styles.number}>{time.hours}</span>
          <span className={styles.label}>horas</span>
        </div>
        <div className={styles.block}>
          <span className={styles.number}>{time.minutes}</span>
          <span className={styles.label}>minutos</span>
        </div>
        <div className={styles.block}>
          <span className={styles.number}>{time.seconds}</span>
          <span className={styles.label}>segundos</span>
        </div>
      </div>
    </section>
  )
}

export default Countdown
