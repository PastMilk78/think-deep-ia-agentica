import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    console.log('Recibida solicitud de contacto');
    const { name, email, company, message } = req.body;
    console.log('Datos recibidos:', { name, email, company });

    // Validar los campos requeridos
    if (!name || !email || !company || !message) {
      console.log('Error: Campos incompletos');
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    // Verificar que las variables de entorno estén configuradas
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Error: Variables de entorno no configuradas');
      console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Configurado' : 'No configurado');
      console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? 'Configurado' : 'No configurado');
      return res.status(500).json({ 
        error: 'Error de configuración del servidor', 
        details: 'Credenciales de correo no configuradas' 
      });
    }

    console.log('Configurando transporte de nodemailer');
    // Configurar el transporte de nodemailer
    // Para Gmail, necesitas una "contraseña de aplicación" generada en tu cuenta de Google
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,         // Configura esto en Vercel
        pass: process.env.EMAIL_PASSWORD,     // Configura esto en Vercel (contraseña de aplicación)
      },
      debug: true, // Habilitar depuración
    });

    console.log('Configurando opciones de correo');
    // Configurar el contenido del correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'salvador@thinkdeepgroup.com',
      subject: `Nuevo mensaje de contacto de ${name} - ${company}`,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    };

    console.log('Enviando correo a:', mailOptions.to);
    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado exitosamente:', info.messageId);

    // Responder con éxito
    return res.status(200).json({ success: true, message: 'Mensaje enviado con éxito', messageId: info.messageId });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    console.error('Detalles del error:', error.message);
    if (error.code) {
      console.error('Código de error:', error.code);
    }
    if (error.response) {
      console.error('Respuesta del servidor SMTP:', error.response);
    }
    return res.status(500).json({ 
      error: 'Error al enviar el mensaje', 
      details: error.message,
      code: error.code || 'unknown'
    });
  }
} 