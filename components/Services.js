import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Automatización de Procesos',
      description: 'Implementamos soluciones de IA agéntica para automatizar flujos de trabajo complejos, reduciendo errores y aumentando la eficiencia operativa.',
      icon: '🤖',
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
        <h2 className="section-title text-center">Nuestros Servicios</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-300">
          Ofrecemos soluciones avanzadas de automatización con IA agéntica para optimizar tus procesos empresariales
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-800">
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