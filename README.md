# Think Deep IA - Sitio Web

Este es el repositorio del sitio web de Think Deep IA, una empresa especializada en automatización de workflows con IA agéntica.

## Características

- Diseño moderno y responsivo
- Secciones informativas sobre servicios, beneficios y proceso
- Formulario de contacto funcional con Google Cloud IAM
- Optimizado para SEO

## Tecnologías Utilizadas

- Next.js
- React
- Tailwind CSS
- Google Cloud IAM (para el envío de correos)

## Configuración del Proyecto

### Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/PastMilk78/think-deep-ia-agentica.git
   cd think-deep-ia-agentica
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

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

### Configuración en Vercel

Para que el envío de correos funcione en Vercel, configura la variable de entorno:

1. En la configuración de tu proyecto en Vercel, ve a la sección "Environment Variables"
2. Añade una nueva variable llamada `GOOGLE_CREDENTIALS` con el contenido del archivo JSON de credenciales codificado en Base64
3. Asegúrate de que el valor esté correctamente formateado

## Contacto

Para cualquier consulta, contacta a salvador@thinkdeepgroup.com

## Configuración de Variables de Entorno

### Desarrollo Local

1. Crea un archivo `.env.local` basado en `.env.example`
2. Completa las variables con tus valores

### Despliegue en Vercel

Para el despliegue en Vercel, configura las siguientes variables de entorno en la configuración del proyecto:

- `NEXT_PUBLIC_SITE_NAME`: Nombre del sitio
- `NEXT_PUBLIC_SITE_DESCRIPTION`: Descripción del sitio
- `NEXT_PUBLIC_SITE_URL`: URL del sitio

- `EMAIL_USER`: Usuario de correo para Nodemailer
- `EMAIL_PASSWORD`: Contraseña de aplicación para Nodemailer
- `EMAIL_PASS`: Contraseña alternativa para Nodemailer (si es necesario)

- `OPENAI_API_KEY`: Clave API de OpenAI para el chat de IA

## Importante

- Nunca incluyas valores sensibles directamente en el código
- No subas el archivo `.env.local` al repositorio (ya está incluido en `.gitignore`)
- Para Gmail, usa una "contraseña de aplicación" generada en la configuración de seguridad de tu cuenta de Google 