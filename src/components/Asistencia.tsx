import { useState, type FormEvent } from "react"
import styles from "./Asistencia.module.css"

function Asistencia() {
  const [asiste, setAsiste] = useState("si")
  const [nombre, setNombre] = useState("")
  const [personas, setPersonas] = useState("1")
  const [autobus, setAutobus] = useState("no")
  const [alergias, setAlergias] = useState("")
  const [enviado, setEnviado] = useState(false)
  const [cargando, setCargando] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setCargando(true)

    try {
      const res = await fetch("/api/confirmar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, asiste, personas, autobus, alergias }),
      })
      if (res.ok) setEnviado(true)
      else alert("Error al enviar. Intenta de nuevo.")
    } catch {
      alert("Error de conexión.")
    } finally {
      setCargando(false)
    }
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Confirmar Asistencia</h2>
      <p className={styles.subtitle}>Es importante que confirmes tu asistencia</p>

      {enviado ? (
        <p className={styles.subtitle} style={{ color: '#a05a3e' }}>
          ¡Gracias! Hemos recibido tu confirmación.
        </p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            ¿Vas a asistir?
            <select className={styles.input} value={asiste} onChange={e => setAsiste(e.target.value)}>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </label>

          <label className={styles.label}>
            Nombre
            <input className={styles.input} type="text" value={nombre} onChange={e => setNombre(e.target.value)} required />
          </label>

          <label className={styles.label}>
            Acompañantes
            <input className={styles.input} type="number" min="1" max="10" value={personas} onChange={e => setPersonas(e.target.value)} />
          </label>

          <label className={styles.label}>
            ¿Necesitas autobús?
            <select className={styles.input} value={autobus} onChange={e => setAutobus(e.target.value)}>
              <option value="no">No</option>
              <option value="si">Sí</option>
            </select>
          </label>

          <label className={styles.label}>
            Alergias
            <input className={styles.input} type="text" value={alergias} onChange={e => setAlergias(e.target.value)} placeholder="Ninguna" />
          </label>

          <button className={styles.button} type="submit" disabled={cargando}>
            {cargando ? (
              <span className={styles.spinnerWrap}>
                <span className={styles.spinner} />
                Enviando... puede tardar hasta 1 minuto
              </span>
            ) : "Confirmar asistencia"}
          </button>
        </form>
      )}
    </section>
  )
}

export default Asistencia
