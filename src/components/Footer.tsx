import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.rings}>
        <svg width="32" height="16" viewBox="0 0 32 16">
          <circle cx="10" cy="8" r="5" fill="none" stroke="#d48a6a" strokeWidth="1.5" />
          <circle cx="22" cy="8" r="5" fill="none" stroke="#d48a6a" strokeWidth="1.5" />
        </svg>
      </div>
      <p className={styles.text}>Ana & Javi · 07.11.2026</p>
      <p className={styles.credit}>Hecho con amor para los que más queremos</p>
    </footer>
  )
}

export default Footer
