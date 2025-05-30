"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function TerminosServicio() {
  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#594a42] text-[#f8f1d8] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#fed856] mb-8 text-center font-raleway">
          Términos y Condiciones – Think Deep Consulting
        </h1>
        
        <div className="bg-[#312b2b] p-8 rounded-lg border-2 border-[#fed856] shadow-xl mb-8">
          <p className="mb-4 font-raleway">
            Última actualización: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            1. Uso del Sitio y Servicios
          </h2>
          <p className="mb-4 font-raleway">
            Al utilizar nuestro sitio web o cualquiera de nuestros servicios digitales, usted declara tener al menos 18 años o estar autorizado por un tutor legal.<br />Queda prohibido el uso de nuestros servicios para fines ilegales, destructivos o no autorizados, incluyendo pero no limitado a:
          </p>
          <ul className="list-disc pl-6 mb-4 font-raleway">
            <li className="mb-2">Violar leyes locales, nacionales o internacionales</li>
            <li className="mb-2">Infringir derechos de propiedad intelectual</li>
            <li className="mb-2">Interferir con el funcionamiento de nuestras plataformas o herramientas</li>
            <li className="mb-2">Intentar acceder sin autorización a servidores, bases de datos o interfaces privadas</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            2. Servicios de Consultoría y Automatización
          </h2>
          <p className="mb-4 font-raleway">
            Todos nuestros servicios están sujetos a disponibilidad y viabilidad técnica. Nos reservamos el derecho de modificar, rechazar o descontinuar cualquier servicio sin previo aviso, en caso de que:
          </p>
          <ul className="list-disc pl-6 mb-4 font-raleway">
            <li className="mb-2">El proyecto no sea viable técnica o éticamente</li>
            <li className="mb-2">El cliente incurra en incumplimiento de pagos o uso indebido del servicio</li>
            <li className="mb-2">Se detecte un mal uso de herramientas automatizadas o manipulación del sistema</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            3. Precios y Formas de Pago
          </h2>
          <p className="mb-4 font-raleway">
            Todos los precios están expresados en Pesos Mexicanos (MXN) e incluyen impuestos cuando corresponde. Los precios pueden cambiar sin previo aviso.<br />Aceptamos los siguientes métodos de pago:
          </p>
          <ul className="list-disc pl-6 mb-4 font-raleway">
            <li className="mb-2">Transferencia bancaria</li>
            <li className="mb-2">Tarjetas de crédito y débito</li>
            <li className="mb-2">PayPal o Stripe (según el servicio)</li>
          </ul>
          <p className="mb-4 font-raleway">
            No almacenamos información de tarjetas en nuestros servidores. Todos los pagos se procesan de manera segura por plataformas de terceros.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            4. Entregables y Tiempos de Implementación
          </h2>
          <p className="mb-4 font-raleway">
            Los tiempos de entrega de nuestros servicios (como bots, automatizaciones, dashboards u otros sistemas) se especificarán en la propuesta o contrato.<br />Los plazos pueden variar según la complejidad del proyecto, respuesta del cliente o circunstancias imprevistas. Think Deep no se hace responsable por retrasos causados por factores externos o falta de colaboración del cliente.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            5. Cancelaciones, Reembolsos y Ajustes
          </h2>
          <p className="mb-4 font-raleway">
            Los servicios digitales personalizados no son reembolsables una vez iniciados.<br />Sin embargo, se puede solicitar cancelación o ajuste antes del inicio de la fase de desarrollo. En caso de incumplimiento por parte de Think Deep, se evaluará una compensación justa o reembolso proporcional.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            6. Cuentas de Usuario y Accesos
          </h2>
          <p className="mb-4 font-raleway">
            Si accede a herramientas, paneles o plataformas personalizadas, usted es responsable de la confidencialidad de su cuenta.<br />Nos reservamos el derecho de suspender o eliminar accesos si se detecta mal uso, intentos de vulneración o incumplimiento de estos términos.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            7. Propiedad Intelectual
          </h2>
          <p className="mb-4 font-raleway">
            Todo el contenido, código, diseños, documentación y productos desarrollados por Think Deep o sus colaboradores están protegidos por derechos de autor.<br />El cliente recibe una licencia de uso no transferible, salvo acuerdo distinto por escrito. Está prohibida su reproducción, redistribución o modificación sin autorización expresa.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            8. Limitación de Responsabilidad
          </h2>
          <p className="mb-4 font-raleway">
            Think Deep no será responsable por pérdidas directas o indirectas derivadas del mal uso de nuestras herramientas, errores en sistemas de terceros (como APIs o plataformas conectadas), o decisiones tomadas por el cliente con base en recomendaciones automatizadas.<br />Ofrecemos herramientas de apoyo, no sustituyen asesoramiento legal, fiscal o clínico profesional.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            9. Cambios a los Términos
          </h2>
          <p className="mb-4 font-raleway">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Las actualizaciones se publicarán en nuestro sitio y tendrán efecto inmediato.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            10. Ley Aplicable
          </h2>
          <p className="mb-4 font-raleway">
            Este acuerdo se rige por las leyes mexicanas. Cualquier disputa será resuelta ante los tribunales de Guanajuato, México.
          </p>

          <h2 className="text-2xl font-bold text-[#fed856] mt-8 mb-4 font-raleway">
            11. Contacto
          </h2>
          <p className="mb-4 font-raleway">
            <strong>Think Deep Consulting</strong><br />San Miguel de Allende – Guanajuato Capital, México<br />Email: hola@thinkdeep.mx<br />WhatsApp: +52 4181775155
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