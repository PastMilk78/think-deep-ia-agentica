"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function PoliticaPrivacidad() {
  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#594a42] text-[#f8f1d8] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#fed856] mb-8 text-center font-raleway">
          Política de Privacidad
        </h1>
        
        <div className="bg-[#312b2b] p-8 rounded-lg border-2 border-[#fed856] shadow-xl mb-8">
          <p className="mb-4 font-raleway">
            Última actualización: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            1. Introducción
          </h2>
          <p className="mb-4 font-raleway">
            Think Deep Consulting ("nosotros", "nuestro" o "la empresa") se compromete a proteger la privacidad de los usuarios de nuestros servicios y sitio web. Esta Política de Privacidad describe cómo recopilamos, usamos, divulgamos y protegemos su información cuando interactúa con nosotros a través de nuestros canales digitales, incluyendo el sitio web, formularios, herramientas de automatización y chatbots.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            2. Información que Recopilamos
          </h2>
          <p className="mb-2 font-raleway">
            Podemos recopilar los siguientes tipos de información:
          </p>
          <ul className="list-disc pl-6 mb-4 font-raleway">
            <li className="mb-2">
              <span className="font-semibold text-[#fed856]">Información personal:</span> Nombre, correo electrónico, número de teléfono, nombre de empresa y cargo, especialmente al solicitar una cotización, agendar una llamada o utilizar nuestros formularios de contacto.
            </li>
            <li className="mb-2">
              <span className="font-semibold text-[#fed856]">Información de uso:</span> Interacciones con nuestros sistemas automatizados (como chatbots en WhatsApp), incluyendo respuestas, preguntas frecuentes y preferencias.
            </li>
            <li className="mb-2">
              <span className="font-semibold text-[#fed856]">Información técnica:</span> Dirección IP, tipo de navegador, sistema operativo, y otros datos de diagnóstico al acceder a nuestra página web.
            </li>
            <li className="mb-2">
              <span className="font-semibold text-[#fed856]">Información de pago (si aplica):</span> Cuando contrata servicios directamente desde nuestra plataforma, procesamos los pagos a través de proveedores seguros como Stripe, PayPal o plataformas locales.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            3. Cómo Utilizamos su Información
          </h2>
          <p className="mb-2 font-raleway">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 mb-4 font-raleway">
            <li className="mb-2">Proporcionar y mejorar nuestros servicios de automatización y consultoría</li>
            <li className="mb-2">Comunicarnos con usted respecto a proyectos, propuestas y soporte técnico</li>
            <li className="mb-2">Enviar información relevante, como actualizaciones de servicios, ofertas o contenido educativo</li>
            <li className="mb-2">Realizar análisis internos para optimizar la experiencia del usuario</li>
            <li className="mb-2">Cumplir con obligaciones legales y contractuales</li>
            <li className="mb-2">Prevenir fraudes y proteger la seguridad de nuestros sistemas y usuarios</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            4. Divulgación de su Información
          </h2>
          <p className="mb-4 font-raleway">
            Podemos compartir su información personal con:
          </p>
          <ul className="list-disc pl-6 mb-4 font-raleway">
            <li className="mb-2">Proveedores de servicios necesarios para la operación de Think Deep (como hosting, mensajería, pagos y CRM)</li>
            <li className="mb-2">Autoridades cuando la ley lo exija</li>
            <li className="mb-2">En caso de fusión, adquisición o reestructuración corporativa, con las partes involucradas</li>
          </ul>
          <p className="mb-4 font-raleway">
            No vendemos ni alquilamos su información personal a terceros con fines comerciales.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            5. Integración con Plataformas de Terceros
          </h2>
          <p className="mb-4 font-raleway">
            Think Deep puede utilizar integraciones con plataformas como WhatsApp, Meta, Google Workspace o Airtable. Al interactuar con nuestras soluciones que integran estos servicios, podríamos acceder a información técnica o limitada del perfil según los permisos otorgados por el usuario. Esta información solo se usará para fines operativos.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            6. Derechos del Usuario
          </h2>
          <p className="mb-4 font-raleway">
            Dependiendo de su ubicación, puede tener ciertos derechos respecto a sus datos personales, incluyendo:
          </p>
          <ul className="list-disc pl-6 mb-4 font-raleway">
            <li className="mb-2">Acceder, corregir o eliminar su información personal</li>
            <li className="mb-2">Oponerse o restringir el uso de sus datos</li>
            <li className="mb-2">Solicitar portabilidad de sus datos</li>
            <li className="mb-2">Retirar su consentimiento en cualquier momento</li>
          </ul>
          <p className="mb-4 font-raleway">
            Para ejercer estos derechos, escríbanos a: <a href="mailto:hola@thinkdeep.mx" className="text-[#fed856] underline hover:text-white">hola@thinkdeep.mx</a>
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            7. Eliminación de Datos
          </h2>
          <p className="mb-4 font-raleway">
            Usted tiene derecho a solicitar la eliminación completa de sus datos enviando un correo a <a href="mailto:hola@thinkdeep.mx" className="text-[#fed856] underline hover:text-white">hola@thinkdeep.mx</a> con el asunto "Eliminación de Datos", incluyendo:
          </p>
          <ul className="list-disc pl-6 mb-4 font-raleway">
            <li className="mb-2">Nombre completo</li>
            <li className="mb-2">Correo electrónico asociado</li>
            <li className="mb-2">Contexto de su relación con Think Deep (por ejemplo, chatbot, cotización, cliente, etc.)</li>
          </ul>
          <p className="mb-4 font-raleway">
            Procesaremos la solicitud en un plazo de 30 días, una vez verificada su identidad, conforme a las excepciones legales aplicables.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            8. Seguridad de los Datos
          </h2>
          <p className="mb-4 font-raleway">
            Implementamos medidas técnicas, organizativas y administrativas para proteger su información. Sin embargo, debido a la naturaleza de internet, no podemos garantizar seguridad absoluta.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            9. Cookies y Tecnologías Similares
          </h2>
          <p className="mb-4 font-raleway">
            Utilizamos cookies para mejorar su experiencia en nuestro sitio, analizar comportamiento y facilitar funcionalidades esenciales. Puede desactivarlas desde su navegador, aunque esto podría limitar algunas funciones.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            10. Cambios a esta Política
          </h2>
          <p className="mb-4 font-raleway">
            Podemos actualizar esta política de privacidad en cualquier momento. Notificaremos los cambios relevantes mediante nuestro sitio web o directamente si usted mantiene una relación activa con nosotros.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            11. Contacto
          </h2>
          <p className="mb-4 font-raleway">
            Si tiene preguntas, contáctenos:
          </p>
          <p className="mb-4 font-raleway">
            <strong>Think Deep Consulting</strong><br />San Miguel de Allende y Guanajuato Capital, México<br />Email: hola@thinkdeep.mx<br />WhatsApp: +52 4181775155
          </p>
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="/"
            className="inline-block bg-[#fed856] text-[#312b2b] px-6 py-3 rounded-full font-bold hover:bg-white transition-colors font-raleway"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
} 