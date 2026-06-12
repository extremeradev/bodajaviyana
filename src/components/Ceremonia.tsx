import { useState } from "react"
import styles from "./Ceremonia.module.css"
import Modal from "./Modal"

function Ceremonia() {
  const [open, setOpen] = useState(false)

  return (
    <section className={styles.section}>
      <div className={styles.ribbonWrap}>
        <div className={styles.ribbon}>CEREMONIA</div>
      </div>
      <div className={styles.rings}>
        <img src="/catedraldejaenlogo01.png" alt="Catedral" className={styles.catedralImg} />
      </div>
      <h2 className={styles.title}>Dónde será</h2>
      <p className={styles.address}>
        Iglesia del Sagrario · Jaén
      </p>
      <button className={styles.button} onClick={() => setOpen(true)}>
        Ver mapa
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={styles.modalContent}>
          <h2 className={styles.title}>Dónde será</h2>
          <p className={styles.address}>
            Iglesia del Sagrario · Jaén
          </p>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps?q=Catedral+de+la+Asunción+Jaén&output=embed"
              className={styles.mapIframe}
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

export default Ceremonia
