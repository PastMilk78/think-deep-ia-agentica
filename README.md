# Think Deep IA - Sitio Web

Este es el repositorio del sitio web de Think Deep IA, una empresa especializada en automatización de workflows con IA agéntica.

## Características

- Diseño moderno y responsivo
- Secciones informativas sobre servicios, beneficios y proceso
- Formulario de contacto funcional
- Optimizado para SEO

## Tecnologías Utilizadas

- Next.js
- React
- Tailwind CSS
- Nodemailer (para el envío de correos)

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

## Contacto

Para cualquier consulta, contacta a salvador@thinkdeepgroup.com 