const express = require("express");
const app = express();
const directorioVistas = __dirname + "/views";
const pug = require("pug");
const nodemailer = require("nodemailer");
require("dotenv").config();
const PORT = process.env.PORT;

// Configuraciones de paquetes
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Configuracion de RUtas
const indexRoutes = require("./routes/indexRouter");
const hotelRouter = require("./routes/hotelRouter");
const restauranteRouter = require("./routes/restauranteRouter");
const eventosRouter = require("./routes/eventosRouter");
const clubRouter = require("./routes/clubRouter");
const contactoRouter = require("./routes/contactoRouter");

console.log(directorioVistas);

app.set("view engine", "pug");
app.set("views", directorioVistas);

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("public"));

app.use("/", indexRoutes);

app.use("/hotel", hotelRouter);

app.use("/restaurante", restauranteRouter);

app.use("/eventos", eventosRouter);

app.use("/club", clubRouter);

app.use("/contacto", contactoRouter);

app.post("/enviar", async (req, res) => {
  const { nombre, dni, email, telefono, asunto, mensaje } = req.body;
  if (!nombre || !dni || !email || !telefono || !asunto || !mensaje) {
    return res.status(400).send("Todos los campos son obligatorios.");
  }
  const aminHtml = `
    <h1>Nuevo mensaje de ${nombre}</h1>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>DNI:</strong> ${dni}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
    <p><strong>Asunto:</strong> ${asunto}</p>
    <p><strong>Mensaje:</strong> ${mensaje}</p>
  `;
  const userHtml = `
    <h1>Gracias por contactarnos</h1>
    <p>Hola ${nombre},</p>
    <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad.</p>
    <p>Asunto: ${asunto}</p>
    <p>Mensaje: ${mensaje}</p>
    <p>Saludos,</p>
    <p>Equipo de Sierras Hotel</p>
  `;
  const adminMailOptions = {
    from: `"Sierras Hotel" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${nombre}`,
    html: aminHtml,
  };
  const userMailOptions = {
    from: `"Sierras Hotel " <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Gracias por contactarnos, ${nombre}`,
    html: userHtml,
  };
    try {

    await transporter.sendMail(adminMailOptions);
   

 
    await transporter.sendMail(userMailOptions);
  

    res.status(200).json({
      success: true,
      message: "Formulario enviado correctamente. Te contactaremos pronto.",
    });
  } catch (error) {
    console.error("Error al enviar correos:", error);
    res.status(500).json({
      success: false,
      message: "Error al enviar el formulario. Por favor intentá más tarde.",
    });
  }
});
app.use((req, res, next) => {
  res.status(404).render("404", { title: "Página no encontrada" });
});
app.listen(PORT, () => {
  console.log(`Servidor en puerto http://localhost:${PORT}`);
});
