import styles from "./Ceremonia.module.css"

function Ceremonia({ onMapa }: { onMapa: () => void }) {
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
      <button className={styles.button} onClick={onMapa}>
        Ver mapa
      </button>
    </section>
  )
}

export default Ceremonia
