# Think Deep IA - Sitio Web

Este es el repositorio del sitio web de Think Deep IA, una empresa especializada en automatización de workflows con IA agéntica.

## Características

- Diseño moderno y responsivo
- Secciones informativas sobre servicios, beneficios y proceso
<<<<<<< HEAD
- Formulario de contacto funcional con Google Cloud IAM
=======
- Formulario de contacto funcional
>>>>>>> 3216d605b968d66499f2d442a17c60fd1303d6a7
- Optimizado para SEO

## Tecnologías Utilizadas

- Next.js
- React
- Tailwind CSS
<<<<<<< HEAD
- Google Cloud IAM (para el envío de correos)
=======
- Nodemailer (para el envío de correos)
>>>>>>> 3216d605b968d66499f2d442a17c60fd1303d6a7

## Configuración del Proyecto

### Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona este repositorio:
   ```
<<<<<<< HEAD
   git clone https://github.com/PastMilk78/think-deep-ia-website.git
   cd think-deep-ia-website
=======
   git clone https://github.com/PastMilk78/think-deep-ia-agentica.git
   cd think-deep-ia-agentica
>>>>>>> 3216d605b968d66499f2d442a17c60fd1303d6a7
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

<<<<<<< HEAD
3. Configuración del servicio de correo:
   
   El proyecto utiliza una cuenta de servicio de Google Cloud para enviar correos electrónicos. Hay dos formas de configurar las credenciales:

   **Opción 1: Archivo de credenciales local (para desarrollo)**
   
   Crea un directorio `credentials` en la raíz del proyecto y coloca el archivo `service-account.json` con las credenciales de la cuenta de servicio.

   **Opción 2: Variable de entorno (recomendado para producción)**
   
   Configura la variable de entorno `GOOGLE_CREDENTIALS` con el contenido del archivo JSON de credenciales codificado en Base64.

   Para codificar el JSON en Base64:
   ```bash
   echo -n '{
       "type": "service_account",
       "project_id": "balmy-vehicle-421219",
       ...
   }' | base64
   ```

   **Nota importante sobre la cuenta de servicio:**
   
   La cuenta de servicio está configurada para impersonar a `salvador@thinkdeepgroup.com`. Asegúrate de que esta cuenta tenga los permisos necesarios en la consola de Google Cloud:
   
   1. Ve a la consola de Google Cloud: https://console.cloud.google.com/
   2. Selecciona el proyecto "balmy-vehicle-421219"
   3. Ve a "IAM y administración" > "Cuentas de servicio"
   4. Verifica que la cuenta `agente@balmy-vehicle-421219.iam.gserviceaccount.com` tenga los permisos necesarios
   5. Asegúrate de que la cuenta `salvador@thinkdeepgroup.com` haya otorgado permisos de delegación a la cuenta de servicio
=======
3. Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:
   ```
   # Credenciales para el envío de correos
   EMAIL_USER=tu_correo@gmail.com
   EMAIL_PASS=tu_contraseña_de_aplicación
   ```

   **Nota importante sobre las credenciales de Gmail:**
   
   Para usar Gmail como servicio de correo, debes generar una "contraseña de aplicación" en lugar de usar tu contraseña normal:
   
   1. Ve a la configuración de tu cuenta de Google: https://myaccount.google.com/
   2. Selecciona "Seguridad" en el menú lateral
   3. En "Acceso a Google", selecciona "Verificación en dos pasos" (debe estar activada)
   4. Desplázate hacia abajo y selecciona "Contraseñas de aplicaciones"
   5. Genera una nueva contraseña para la aplicación
   6. Usa esta contraseña generada en la variable `EMAIL_PASS`
>>>>>>> 3216d605b968d66499f2d442a17c60fd1303d6a7

### Ejecución en Desarrollo

```
npm run dev
```

El sitio estará disponible en `http://localhost:3000`.

### Construcción para Producción

```
npm run build
npm start
```

## Despliegue

Este sitio está desplegado en Vercel. Cada vez que se hace push a la rama principal, se despliega automáticamente.

<<<<<<< HEAD
### Configuración en Vercel

Para que el envío de correos funcione en Vercel, configura la variable de entorno:

1. En la configuración de tu proyecto en Vercel, ve a la sección "Environment Variables"
2. Añade una nueva variable llamada `GOOGLE_CREDENTIALS` con el contenido del archivo JSON de credenciales codificado en Base64
3. Asegúrate de que el valor esté correctamente formateado

=======
>>>>>>> 3216d605b968d66499f2d442a17c60fd1303d6a7
## Contacto

Para cualquier consulta, contacta a salvador@thinkdeepgroup.com 