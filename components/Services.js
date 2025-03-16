import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Automatización de Procesos',
      description: 'Implementamos soluciones de IA agéntica para automatizar flujos de trabajo complejos, reduciendo errores y aumentando la eficiencia operativa.',
      icon: '🤖',
    },
    {
      title: 'Desarrollo de Software',
      description: 'Creamos soluciones de software a medida que se adaptan perfectamente a las necesidades específicas de tu negocio, con enfoque en calidad y escalabilidad.',
      icon: '💻',
    },
    {
      title: 'Desarrollo Web',
      description: 'Diseñamos y desarrollamos sitios web modernos, responsivos y optimizados para SEO que destacan tu marca y mejoran la experiencia del usuario.',
      icon: '🌐',
    },
    {
      title: 'Integración de Sistemas',
      description: 'Conectamos tus sistemas existentes con nuestra plataforma de IA para crear un ecosistema digital cohesivo y eficiente.',
      icon: '🔄',
    },
    {
      title: 'Análisis Predictivo',
      description: 'Utilizamos modelos avanzados de IA para analizar datos y predecir tendencias, ayudándote a tomar decisiones informadas.',
      icon: '📊',
    },
    {
      title: 'Asistentes Virtuales Personalizados',
      description: 'Desarrollamos asistentes virtuales inteligentes adaptados a las necesidades específicas de tu negocio.',
      icon: '💬',
    },
  ];

  return (
    <section id="servicios" className="section bg-primary">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          <span className="light-underline">Nuestros Servicios</span>
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-300">
          Ofrecemos soluciones avanzadas de <span className="highlight-underline">automatización</span>, <span className="highlight-underline">desarrollo de software</span> y <span className="highlight-underline">desarrollo web</span> para optimizar tus procesos empresariales
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-6 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-gray-800 hover:border-secondary hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 