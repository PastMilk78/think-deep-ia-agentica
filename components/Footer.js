import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 bg-[#313030] rounded-lg overflow-hidden flex items-center justify-center">
                <Image 
                  src="/logo-original.png" 
                  alt="Think Deep Logo" 
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando negocios con soluciones inteligentes de IA agéntica.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#servicios" className="text-gray-400 hover:text-secondary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#beneficios" className="text-gray-400 hover:text-secondary transition-colors">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="/#proceso" className="text-gray-400 hover:text-secondary transition-colors">
                  Proceso
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-gray-400 hover:text-secondary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#" className="text-gray-400 hover:text-secondary transition-colors">
                  Automatización de Procesos
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-gray-400 hover:text-secondary transition-colors">
                  Integración de Sistemas
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-gray-400 hover:text-secondary transition-colors">
                  Análisis Predictivo
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-gray-400 hover:text-secondary transition-colors">
                  Asistentes Virtuales
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Av. Principal 123, Edificio Empresarial</li>
              <li>+123 456 7890</li>
              <li>info@thinkdeep.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Think Deep. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 