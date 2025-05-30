"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function EliminacionDeDatos() {
  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#594a42] text-[#f8f1d8] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#fed856] mb-8 text-center font-raleway">
          Eliminación de Datos de Usuario
        </h1>
        
        <div className="bg-[#312b2b] p-8 rounded-lg border-2 border-[#fed856] shadow-xl mb-8">
          <p className="mb-4 font-raleway">
            Última actualización: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">📬 Cómo Solicitar la Eliminación de sus Datos</h2>
          <p className="mb-4 font-raleway">Para solicitar la eliminación completa o parcial de sus datos, por favor siga estos pasos:</p>
          <ol className="list-decimal pl-6 mb-4 font-raleway">
            <li className="mb-2">Envíe un correo electrónico a <strong>hola@thinkdeep.mx</strong> con el asunto: "Solicitud de Eliminación de Datos"</li>
            <li className="mb-2">En el cuerpo del correo incluya:
              <ul className="list-disc pl-6 mt-2">
                <li>Su nombre completo</li>
                <li>Correo electrónico asociado con su cuenta o interacción</li>
                <li>Número de teléfono (en caso de haberlo proporcionado)</li>
                <li>Breve descripción del servicio o canal con el que interactuó (por ejemplo: chatbot de WhatsApp, formulario web, cotización)</li>
                <li>Si desea eliminar todos sus datos o solo información específica</li>
              </ul>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">🔐 Proceso de Eliminación</h2>
          <ol className="list-decimal pl-6 mb-4 font-raleway">
            <li className="mb-2">Verificación de identidad para asegurar que usted es el titular legítimo de los datos</li>
            <li className="mb-2">Confirmación de recepción de su solicitud en un máximo de 72 horas</li>
            <li className="mb-2">Eliminación de datos procesada dentro de un plazo máximo de 30 días naturales</li>
            <li className="mb-2">Envío de confirmación por correo una vez finalizado el proceso</li>
          </ol>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">✅ Qué Datos Eliminamos</h2>
          <ul className="list-disc pl-6 mb-4 font-raleway">
            <li className="mb-2">Datos personales asociados (nombre, correo, teléfono)</li>
            <li className="mb-2">Historial de contacto, cotizaciones, automatizaciones o mensajes en chatbots</li>
            <li className="mb-2">Preferencias y configuraciones dentro de nuestras herramientas</li>
            <li className="mb-2">Información obtenida mediante integraciones con servicios como WhatsApp, Google o Meta</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">⚠ Retención Legal de Datos</h2>
          <p className="mb-4 font-raleway">En algunos casos, estamos obligados a conservar cierta información por motivos legales, fiscales o de seguridad (por ejemplo, facturación o cumplimiento de normativas). Le notificaremos si este es el caso y cuánto tiempo deberán mantenerse dichos datos.</p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">🌐 Datos Vinculados a Terceros</h2>
          <p className="mb-4 font-raleway">Si usted creó una cuenta o interactuó con nosotros mediante plataformas externas (por ejemplo, WhatsApp, Google, Meta), eliminaremos la información que se almacenó en nuestros sistemas. Sin embargo, deberá gestionar la eliminación directamente con dichos servicios para asegurar una eliminación completa.</p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">📞 Contacto</h2>
          <p className="mb-4 font-raleway">Para cualquier duda o aclaración sobre este proceso, puede escribirnos a:</p>
          <p className="mb-4 font-raleway"><strong>Think Deep Consulting</strong><br />San Miguel de Allende – Guanajuato, México<br />Email: hola@thinkdeep.mx<br />WhatsApp: +52 4181775155</p>
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