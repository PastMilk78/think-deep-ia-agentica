import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-16 h-16 bg-[#313030] rounded-lg overflow-hidden border-2 border-transparent hover:border-secondary transition-colors flex items-center justify-center">
            <Image 
              src="/logo-original.png" 
              alt="Think Deep Logo" 
              width={64}
              height={64}
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/#servicios" className="font-medium text-white hover:text-secondary transition-colors">
            Servicios
          </Link>
          <Link href="/#beneficios" className="font-medium text-white hover:text-secondary transition-colors">
            Beneficios
          </Link>
          <Link href="/#proceso" className="font-medium text-white hover:text-secondary transition-colors">
            Proceso
          </Link>
          <Link href="/#contacto" className="font-medium text-white hover:text-secondary transition-colors">
            Contacto
          </Link>
        </div>
        <Link href="/#contacto">
          <button className="button">Solicitar Demo</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 