import { useState } from "react"
import styles from "./Location.module.css"
import Modal from "./Modal"

function Location() {
  const [open, setOpen] = useState(false)

  return (
    <section className={styles.section}>
      <button className={styles.button} onClick={() => setOpen(true)}>
        Ver ubicación
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={styles.modalContent}>
          <h2 className={styles.title}>Dónde será</h2>
          <p className={styles.address}>
            Complejo Juleca · Carr. Bailén-Motril, Km. 23,5 · 23639 Jaén
          </p>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps?q=Complejo+Juleca+Carr.+Bailén-Motril+Km+23,5+23639+Jaén&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación"
            />
          </div>
        </div>
      </Modal>
    </section>
  )
}

export default Location
