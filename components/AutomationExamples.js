import React from 'react';
import Image from 'next/image';

const AutomationExamples = () => {
  const projects = [
    {
      title: 'Sitio Web Think Deep',
      description: 'Y sí, esta misma plataforma que estás viendo ahora. Desarrollada con Next.js y Tailwind CSS, optimizada para SEO y con efectos visuales avanzados que capturan la atención del usuario.',
      image: '/header-original.jpg',
      tags: ['Desarrollo Web', 'Next.js', 'Tailwind CSS'],
      category: 'Desarrollo Web',
      icon: '🎨',
      tooltip: 'Diseño web moderno'
    },
    {
      title: 'Blizmar Joyas - Frateli Joyería',
      description: 'Tienda en línea para Frateli Joyería Inc. con catálogo de productos, sistema de pagos integrado y panel de administración personalizado para gestionar inventario.',
      image: '/logo-original.png',
      tags: ['E-commerce', 'React', 'Stripe'],
      category: 'E-commerce',
      icon: '💎',
      tooltip: 'Tienda de joyas'
    },
    {
      title: 'Pavido Navido Mariscos',
      description: 'Aplicación web y móvil para cadena de restaurantes de mariscos, con sistema de reservas, menú digital y programa de fidelización de clientes.',
      image: '/favicon.png',
      tags: ['App Híbrida', 'React Native', 'Firebase'],
      category: 'Aplicación',
      icon: '🦐',
      tooltip: 'App de restaurante'
    },
  ];

  return (
    <section className="section bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          <span className="glow-title">Proyectos Destacados</span>
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-300">
          Conoce algunos de nuestros proyectos más recientes en <span className="text-light-sweep">automatización, desarrollo web y desarrollo de software</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glow-border bg-black rounded-lg overflow-hidden shadow-lg transition-all duration-300 group emoji-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  style={{ objectFit: 'contain', backgroundColor: 'rgba(0,0,0,0.8)' }}
                  className="transition-transform duration-500 group-hover:scale-110 p-4"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                  {project.category}
                </div>
                <div className="absolute top-2 left-2 emoji-tooltip">
                  <div className="emoji-icon bg-black bg-opacity-50 p-1 rounded-full">{project.icon}</div>
                  <span className="tooltip-text">{project.tooltip}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationExamples; 