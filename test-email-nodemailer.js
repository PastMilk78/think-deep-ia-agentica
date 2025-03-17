// Script de prueba para enviar un correo usando Nodemailer
const nodemailer = require('nodemailer');
require('dotenv').config({ path: './.env.local' }); // Especificar la ruta exacta del archivo

async function testEmail() {
  try {
    console.log('Iniciando prueba de envío de correo con Nodemailer...');
    
    // Estas credenciales deben configurarse en el archivo .env.local
    // EMAIL_USER=tucorreo@gmail.com
    // EMAIL_PASSWORD=tu_contraseña_de_aplicación
    const emailUser = process.env.EMAIL_USER || 'pastillasdeafrecho78@gmail.com';
    const emailPassword = process.env.EMAIL_PASSWORD || 'taehxjymsrhaopcx';
    
    console.log('Usando correo:', emailUser);
    
    if (!emailUser || !emailPassword) {
      console.error('Error: No se encontraron las credenciales de correo en las variables de entorno.');
      console.error('Debes crear un archivo .env.local con EMAIL_USER y EMAIL_PASSWORD');
      return;
    }
    
    console.log('Credenciales encontradas, configurando transportador...');
    
    // Configurar el transportador de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });
    
    console.log('Transportador configurado, creando opciones de correo...');
    
    // Configurar las opciones del correo
    const mailOptions = {
      from: emailUser,
      to: 'salvador@thinkdeepgroup.com',
      subject: 'Correo de prueba con Nodemailer',
      html: `
        <h3>Correo de prueba con Nodemailer</h3>
        <p>Este es un correo de prueba enviado con Nodemailer.</p>
        <p>Fecha y hora: ${new Date().toLocaleString()}</p>
      `,
    };
    
    console.log('Enviando correo...');
    
    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Correo enviado exitosamente!');
    console.log('ID del mensaje:', info.messageId);
    
  } catch (error) {
    console.error('Error al enviar el correo:', error.message);
    
    if (error.code === 'EAUTH') {
      console.error('Error de autenticación. Esto puede suceder por:');
      console.error('1. Credenciales incorrectas');
      console.error('2. La cuenta no tiene habilitado el acceso a aplicaciones menos seguras');
      console.error('3. La verificación en dos pasos está habilitada pero no estás usando una contraseña de aplicación');
      console.error('Revisa: https://myaccount.google.com/security');
    }
  }
}

// Ejecutar la función de prueba
testEmail(); 