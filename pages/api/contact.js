import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { name, email, company, message } = req.body;

    // Validar los campos requeridos
    if (!name || !email || !company || !message) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Configurar el transporter de nodemailer
    // Nota: En producción, estas credenciales deberían estar en variables de entorno
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Debe configurarse en .env.local
        pass: process.env.EMAIL_PASS, // Debe configurarse en .env.local
      },
    });

    // Configurar el correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'salvador@thinkdeepgroup.com',
      subject: `Nuevo mensaje de contacto de ${name} - ${company}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Empresa: ${company}
        Mensaje: ${message}
      `,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // Responder con éxito
    return res.status(200).json({ success: true, message: 'Mensaje enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return res.status(500).json({ error: 'Error al enviar el mensaje', details: error.message });
  }
} 