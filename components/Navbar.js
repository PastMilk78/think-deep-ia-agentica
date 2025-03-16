import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black bg-opacity-90 backdrop-blur-md py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center">
          <div className="relative w-16 h-16 bg-[#313030] rounded-lg overflow-hidden border-2 border-transparent hover:border-secondary transition-colors flex items-center justify-center shadow-lg">
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
        <div className="hidden md:flex space-x-10">
          <Link href="/#servicios" className="font-medium text-white hover:text-secondary transition-colors tracking-wide">
            Servicios
          </Link>
          <Link href="/#beneficios" className="font-medium text-white hover:text-secondary transition-colors tracking-wide">
            Beneficios
          </Link>
          <Link href="/#proceso" className="font-medium text-white hover:text-secondary transition-colors tracking-wide">
            Proceso
          </Link>
          <Link href="/#contacto" className="font-medium text-white hover:text-secondary transition-colors tracking-wide">
            Contacto
          </Link>
        </div>
        <Link href="/#contacto">
          <button className="button px-6 py-2 shadow-md hover:shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-all duration-300">
            Solicitar Demo
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 