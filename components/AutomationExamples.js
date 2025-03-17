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
      title: 'Frateli Joyería',
      description: 'Asesoramos a esta joyería para llevar sus ventas del local físico al mundo digital. Implementamos estrategias de marketing digital, catálogo en línea y sistema de gestión de inventario personalizado.',
      image: '/frateli-logo.png',
      tags: ['E-commerce', 'Marketing Digital', 'Gestión de Inventario'],
      category: 'Transformación Digital',
      icon: '💎',
      tooltip: 'Joyería premium'
    },
    {
      title: 'Pavido Navido Mariscos',
      description: 'Asesoramos este proyecto desde su concepción como dark kitchen hasta convertirse en un exitoso restaurante de mariscos. Desarrollamos su identidad de marca, estrategia de negocio y presencia digital.',
      image: '/pavido-logo.jpg',
      tags: ['Asesoría de Negocio', 'Branding', 'Marketing Digital'],
      category: 'Emprendimiento',
      icon: '🦐',
      tooltip: 'Mariscos frescos'
    },
  ];

  return (
    <section className="section bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          <span className="glow-title subtitle-light-container">Proyectos Destacados</span>
        </h2>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-300">
            Conoce algunos de nuestros proyectos más recientes en automatización, desarrollo web y desarrollo de software
          </p>
        </div>

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