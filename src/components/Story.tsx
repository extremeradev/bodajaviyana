import styles from "./Story.module.css"

function Story() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src="/foto1.jpg" alt="Novios" />
        </div>
        <div className={styles.text}>
          <h2>Nuestra historia</h2>
          <p>
            Todo comenzó hace unos años... y desde entonces cada momento juntos ha sido especial.
          </p>
          <p>
            El 7 de noviembre de 2026 queremos celebrar nuestro amor rodeados de las personas que más queremos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Story
