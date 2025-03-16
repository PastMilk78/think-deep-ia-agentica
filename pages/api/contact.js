import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

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

    // Verificar si tenemos las credenciales en variables de entorno
    if (!process.env.GOOGLE_CREDENTIALS) {
      console.error('No se encontraron credenciales en variables de entorno');
      return res.status(500).json({ 
        error: 'Error de configuración del servidor',
        message: 'No se encontraron credenciales para el envío de correos'
      });
    }

    let credentials;
    try {
      // Decodificar las credenciales desde Base64
      credentials = JSON.parse(
        Buffer.from(process.env.GOOGLE_CREDENTIALS, "base64").toString("utf-8")
      );
    } catch (error) {
      console.error('Error al decodificar credenciales de variable de entorno:', error);
      return res.status(500).json({ 
        error: 'Error de configuración del servidor',
        message: 'Error al procesar las credenciales'
      });
    }

    // Configurar la autenticación con JWT
    const jwtClient = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      ['https://www.googleapis.com/auth/gmail.send'],
      'salvador@thinkdeepgroup.com' // El correo que se impersonará
    );

    // Autenticar con las credenciales
    await jwtClient.authorize();

    // Crear cliente de Gmail
    const gmail = google.gmail({ version: 'v1', auth: jwtClient });

    // Crear el contenido del correo
    const emailContent = `
From: Think Deep Website <${credentials.client_email}>
To: salvador@thinkdeepgroup.com
Subject: Nuevo mensaje de contacto de ${name} - ${company}
Content-Type: text/html; charset=utf-8

<h3>Nuevo mensaje de contacto</h3>
<p><strong>Nombre:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Empresa:</strong> ${company}</p>
<p><strong>Mensaje:</strong> ${message}</p>
`;

    // Codificar el contenido en base64
    const encodedEmail = Buffer.from(emailContent)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    // Enviar el correo
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail,
      },
    });

    // Responder con éxito
    return res.status(200).json({ success: true, message: 'Mensaje enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return res.status(500).json({ error: 'Error al enviar el mensaje', details: error.message });
  }
} 