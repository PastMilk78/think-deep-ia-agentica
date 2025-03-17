import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Automatización de Procesos',
      description: 'Implementamos soluciones de IA agéntica para automatizar flujos de trabajo complejos, reduciendo errores y aumentando la eficiencia operativa.',
      icon: '🤖',
      tooltip: 'Automatización Inteligente'
    },
    {
      title: 'Desarrollo de Software',
      description: 'Creamos soluciones de software a medida que se adaptan perfectamente a las necesidades específicas de tu negocio, con enfoque en calidad y escalabilidad.',
      icon: '💻',
      tooltip: 'Software Personalizado'
    },
    {
      title: 'Desarrollo Web',
      description: 'Diseñamos y desarrollamos sitios web modernos, responsivos y optimizados para SEO que destacan tu marca y mejoran la experiencia del usuario.',
      icon: '🌐',
      tooltip: 'Sitios Web Modernos'
    },
    {
      title: 'Integración de Sistemas',
      description: 'Conectamos tus sistemas existentes con nuestra plataforma de IA para crear un ecosistema digital cohesivo y eficiente.',
      icon: '🔄',
      tooltip: 'Sistemas Conectados'
    },
    {
      title: 'Análisis Predictivo',
      description: 'Utilizamos modelos avanzados de IA para analizar datos y predecir tendencias, ayudándote a tomar decisiones informadas.',
      icon: '📊',
      tooltip: 'Datos Inteligentes'
    },
    {
      title: 'Asistentes Virtuales Personalizados',
      description: 'Desarrollamos asistentes virtuales inteligentes adaptados a las necesidades específicas de tu negocio.',
      icon: '💬',
      tooltip: 'Asistentes IA'
    },
  ];

  return (
    <section id="servicios" className="section bg-primary fullpage-light-section">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          <span className="glow-title">Nuestros Servicios</span>
        </h2>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-300">
            <span className="text-highlight">Ofrecemos soluciones avanzadas de automatización, desarrollo de software y desarrollo web para optimizar tus procesos empresariales</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glow-border bg-gray-900 p-6 rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group emoji-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="emoji-tooltip mb-4">
                <div className="emoji-icon">{service.icon}</div>
                <span className="tooltip-text">{service.tooltip}</span>
              </div>
              
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