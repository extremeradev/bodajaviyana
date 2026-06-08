import "dotenv/config"
import express from "express"
import cors from "cors"
import sgMail from "@sendgrid/mail"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.join(__dirname, "..", "dist")

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const app = express()
app.use(cors())
app.use(express.json())

app.post("/api/confirmar", async (req, res) => {
  const { nombre, asiste, personas, autobus, alergias } = req.body

  if (!nombre) {
    return res.status(400).json({ error: "Falta el nombre" })
  }

  const html = `
    <h2>Nueva confirmación de asistencia</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Asiste:</strong> ${asiste === "si" ? "Sí" : "No"}</p>
    <p><strong>Personas:</strong> ${personas || 1}</p>
    <p><strong>Autobús:</strong> ${autobus === "si" ? "Sí" : "No"}</p>
    <p><strong>Alergias:</strong> ${alergias || "Ninguna"}</p>
  `

  try {
    await sgMail.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Confirmación - ${nombre}`,
      html,
    })

    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Error al enviar el correo" })
  }
})

app.use(express.static(distPath))
app.get("*", (_req, res) => res.sendFile(path.join(distPath, "index.html")))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`))
