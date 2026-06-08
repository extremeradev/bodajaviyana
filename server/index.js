import "dotenv/config"
import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

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
    await transporter.sendMail({
      from: `"Boda Ana & Javi" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Confirmación - ${nombre}`,
      html,
    })

    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Error al enviar el correo" })
  }
})

app.use(express.static("../dist"))
app.get("*", (_req, res) => res.sendFile("index.html", { root: "../dist" }))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`))
