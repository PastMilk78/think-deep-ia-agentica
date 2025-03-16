import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="relative w-full h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="/header-image.svg"
          alt="Think Deep Office"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Automatización de Workflow con IA Agéntica
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-center mb-8">
            Optimiza tus procesos empresariales con soluciones inteligentes y personalizadas
          </p>
          <button className="button text-lg">Conoce Nuestros Servicios</button>
        </div>
      </div>
    </header>
  );
};

export default Header; 