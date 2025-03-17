import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      {/* Sección de imagen de header */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/header-original.jpg"
          alt="Think Deep Office"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      {/* Sección de texto y botón */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-16 fullpage-light-section">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="glow-title">Automatización de Workflow</span><br />
            con <span className="text-yellow-400">IA Agéntica</span>
          </h1>
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-xl md:text-2xl text-gray-300">
              Optimiza tus procesos empresariales con soluciones inteligentes y personalizadas
            </p>
            <p className="text-xl md:text-2xl text-gray-300 mt-2">
              Desarrollo de Software • Desarrollo Web • Automatización
            </p>
          </div>
          <Link href="/#servicios">
            <button className="button text-lg px-8 py-4 shadow-lg hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              Conoce Nuestros Servicios
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header; 