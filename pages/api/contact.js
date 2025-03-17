import { google } from 'googleapis';
import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    console.log('Recibida solicitud de contacto (método original)');
    const { name, email, company, message } = req.body;
    console.log('Datos recibidos:', { name, email, company });

    // Validar los campos requeridos
    if (!name || !email || !company || !message) {
      console.log('Error: Campos incompletos');
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

    console.log('Decodificando credenciales de Google');
    let credentials;
    try {
      // Decodificar las credenciales desde Base64
      credentials = JSON.parse(
        Buffer.from(process.env.GOOGLE_CREDENTIALS, "base64").toString("utf-8")
      );
      console.log('Credenciales decodificadas correctamente');
    } catch (error) {
      console.error('Error al decodificar credenciales de variable de entorno:', error);
      return res.status(500).json({ 
        error: 'Error de configuración del servidor',
        message: 'Error al procesar las credenciales'
      });
    }

    console.log('Configurando cliente JWT');
    // Configurar la autenticación con JWT
    const jwtClient = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      ['https://www.googleapis.com/auth/gmail.send'],
      'salvador@thinkdeepgroup.com' // El correo que se impersonará
    );

    console.log('Autenticando con Google');
    // Autenticar con las credenciales
    await jwtClient.authorize();
    console.log('Autenticación exitosa');

    // Crear cliente de Gmail
    const gmail = google.gmail({ version: 'v1', auth: jwtClient });

    console.log('Creando contenido del correo');
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

    console.log('Enviando correo a: salvador@thinkdeepgroup.com');
    // Enviar el correo
    const response = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail,
      },
    });
    console.log('Correo enviado exitosamente:', response.data.id);

    // Responder con éxito
    return res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado con éxito',
      messageId: response.data.id
    });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    console.error('Detalles del error:', error.message);
    if (error.code) {
      console.error('Código de error:', error.code);
    }
    if (error.response && error.response.data) {
      console.error('Respuesta de la API:', error.response.data);
    }
    return res.status(500).json({ 
      error: 'Error al enviar el mensaje', 
      details: error.message,
      code: error.code || 'unknown'
    });
  }
} 