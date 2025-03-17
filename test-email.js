// Script de prueba para enviar un correo usando las credenciales de Google
const fs = require('fs');
const { google } = require('googleapis');

async function testEmail() {
  try {
    console.log('Iniciando prueba de envío de correo...');
    
    // Leer el archivo de credenciales
    const credentialsFile = fs.readFileSync('./credentials/service-account.json', 'utf8');
    const credentials = JSON.parse(credentialsFile);
    
    console.log('Credenciales leídas correctamente');
    console.log('Email de cliente:', credentials.client_email);
    
    // Configurar la autenticación con JWT sin impersonación
    const jwtClient = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      ['https://www.googleapis.com/auth/gmail.send']
      // Sin impersonación
    );

    console.log('Cliente JWT configurado, intentando autorizar...');
    
    try {
      // Autenticar con las credenciales
      await jwtClient.authorize();
      console.log('Autorización exitosa');
    } catch (authError) {
      console.error('Error en la autorización:', authError.message);
      console.error('Detalles completos del error de autorización:', authError);
      
      // Intentar con otra configuración
      console.log('\nIntentando con configuración alternativa...');
      
      // Configurar la autenticación con JWT con impersonación explícita
      const jwtClient2 = new google.auth.JWT({
        email: credentials.client_email,
        key: credentials.private_key,
        scopes: ['https://www.googleapis.com/auth/gmail.send'],
        subject: 'salvador@thinkdeepgroup.com' // Impersonación explícita
      });
      
      try {
        await jwtClient2.authorize();
        console.log('Autorización exitosa con configuración alternativa');
        
        // Continuar con este cliente
        return sendTestEmail(jwtClient2, credentials);
      } catch (authError2) {
        console.error('Error en la autorización alternativa:', authError2.message);
        throw new Error('No se pudo autorizar con ninguna configuración');
      }
    }
    
    // Si llegamos aquí, la primera autorización fue exitosa
    return sendTestEmail(jwtClient, credentials);
    
  } catch (error) {
    console.error('Error al enviar el correo de prueba:', error.message);
    
    // Mostrar más detalles del error
    if (error.response) {
      console.error('Detalles del error:', error.response.data);
    }
  }
}

async function sendTestEmail(authClient, credentials) {
  console.log('Creando cliente de Gmail...');
  
  // Crear cliente de Gmail
  const gmail = google.gmail({ version: 'v1', auth: authClient });
  
  // Crear el contenido del correo
  const emailContent = `
From: Think Deep Website <${credentials.client_email}>
To: salvador@thinkdeepgroup.com
Subject: Correo de prueba
Content-Type: text/html; charset=utf-8

<h3>Correo de prueba</h3>
<p>Este es un correo de prueba para verificar la configuración de las credenciales.</p>
`;

  console.log('Contenido del correo creado, codificando en base64...');
  
  // Codificar el contenido en base64
  const encodedEmail = Buffer.from(emailContent)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  
  console.log('Enviando correo...');
  
  // Enviar el correo
  const response = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedEmail,
    },
  });
  
  console.log('Correo enviado con éxito:', response.data);
}

// Ejecutar la función de prueba
testEmail(); 