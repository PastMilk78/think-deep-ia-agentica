import React from 'react';
import Image from 'next/image';

const AutomationExamples = () => {
  const projects = [
    {
      title: 'Plataforma de Automatización de Ventas',
      description: 'Sistema inteligente que automatiza el proceso de ventas desde la prospección hasta el cierre, reduciendo el tiempo de ciclo en un 40%.',
      image: '/automation-example-1.jpg',
      tags: ['Automatización', 'IA', 'Ventas'],
      category: 'Automatización'
    },
    {
      title: 'Sitio Web Think Deep',
      description: 'Desarrollo de sitio web corporativo con diseño moderno, optimizado para SEO y con formulario de contacto integrado con sistema de correo electrónico.',
      image: '/header-original.jpg',
      tags: ['Desarrollo Web', 'Next.js', 'Tailwind CSS'],
      category: 'Desarrollo Web'
    },
    {
      title: 'Sistema de Gestión Empresarial',
      description: 'Software a medida para la gestión integral de recursos, clientes y proyectos, con módulos personalizados según las necesidades específicas del cliente.',
      image: '/automation-example-2.jpg',
      tags: ['Desarrollo de Software', 'ERP', 'Gestión'],
      category: 'Desarrollo de Software'
    },
  ];

  return (
    <section className="section bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          <span className="light-underline">Proyectos Destacados</span>
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-300">
          Conoce algunos de nuestros proyectos más recientes en <span className="highlight-underline">automatización</span>, <span className="highlight-underline">desarrollo web</span> y <span className="highlight-underline">desarrollo de software</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glow-border bg-black rounded-lg overflow-hidden shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                  {project.category}
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