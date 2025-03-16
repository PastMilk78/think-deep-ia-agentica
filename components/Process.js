import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Análisis y Diagnóstico',
      description: 'Evaluamos tus procesos actuales e identificamos oportunidades de automatización y mejora.',
    },
    {
      number: '02',
      title: 'Diseño de Solución',
      description: 'Creamos una solución personalizada que se adapta a tus necesidades específicas y objetivos de negocio.',
    },
    {
      number: '03',
      title: 'Desarrollo e Implementación',
      description: 'Desarrollamos e implementamos la solución de IA agéntica, integrándola con tus sistemas existentes.',
    },
    {
      number: '04',
      title: 'Pruebas y Optimización',
      description: 'Realizamos pruebas exhaustivas y optimizamos la solución para garantizar un rendimiento óptimo.',
    },
    {
      number: '05',
      title: 'Capacitación y Soporte',
      description: 'Proporcionamos capacitación a tu equipo y ofrecemos soporte continuo para asegurar el éxito a largo plazo.',
    },
  ];

  return (
    <section id="proceso" className="section bg-primary">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Nuestro Proceso</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-300">
          Un enfoque metódico para implementar soluciones de IA agéntica en tu organización
        </p>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-start md:items-center bg-gray-900 p-6 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-gray-800 hover:border-secondary hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] relative overflow-hidden"
            >
              <div className="flex-shrink-0 bg-secondary text-primary font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 