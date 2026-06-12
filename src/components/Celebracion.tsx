import styles from "./Celebracion.module.css"

function Celebracion({ onMapa }: { onMapa: () => void }) {
  return (
    <section className={styles.section}>
      <div className={styles.ribbonWrap}>
        <div className={styles.ribbon}>CELEBRACIÓN</div>
      </div>
      <div className={styles.rings}>
        <img src="/champan.png" alt="Champán" className={styles.champanImg} />
      </div>
      <h2 className={styles.title}>Dónde será</h2>
      <p className={styles.address}>
        Complejo Juleca · Carr. Bailén-Motril, Km. 23,5 · 23639 Jaén
      </p>
      <button className={styles.button} onClick={onMapa}>
        Ver mapa
      </button>
    </section>
  )
}

export default Celebracion
