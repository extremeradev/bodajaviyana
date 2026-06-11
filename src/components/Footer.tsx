import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div>
        <p className={styles.text}>Ana & Javi · 07.11.2026</p>
        <p className={styles.credit}>Hecho con amor para los que más queremos</p>
        <div className={styles.tlf}>
          <a className={`${styles.text} ${styles.tlf} `} href="https://wa.me/34692044952" target="_blank" rel="noopener noreferrer">
            +34 692 04 49 52
          </a>
          |
          <a className={`${styles.text} ${styles.tlf} `} href="https://wa.me/34695897091" target="_blank" rel="noopener noreferrer">
            +34 695 89 70 91
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
