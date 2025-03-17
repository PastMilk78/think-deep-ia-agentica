import React from 'react';
import ScrollTriggerLight from './ScrollTriggerLight';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Análisis y Diagnóstico',
      description: 'Evaluamos tus procesos actuales e identificamos oportunidades de automatización y mejora.',
      icon: '🔍',
      tooltip: 'Descubrimos oportunidades'
    },
    {
      number: '02',
      title: 'Diseño de Solución',
      description: 'Creamos una solución personalizada que se adapta a tus necesidades específicas y objetivos de negocio.',
      icon: '✏️',
      tooltip: 'Diseño a medida'
    },
    {
      number: '03',
      title: 'Desarrollo e Implementación',
      description: 'Desarrollamos e implementamos la solución de IA agéntica, integrándola con tus sistemas existentes.',
      icon: '🛠️',
      tooltip: 'Construcción e integración'
    },
    {
      number: '04',
      title: 'Pruebas y Optimización',
      description: 'Realizamos pruebas exhaustivas y optimizamos la solución para garantizar un rendimiento óptimo.',
      icon: '🧪',
      tooltip: 'Calidad garantizada'
    },
    {
      number: '05',
      title: 'Capacitación y Soporte',
      description: 'Proporcionamos capacitación a tu equipo y ofrecemos soporte continuo para asegurar el éxito a largo plazo.',
      icon: '🤝',
      tooltip: 'Acompañamiento continuo'
    },
  ];

  return (
    <section id="proceso" className="section bg-primary">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          <ScrollTriggerLight threshold={0.6} delay={600}>
            <span className="glow-title subtitle-light-container">Nuestro Proceso</span>
          </ScrollTriggerLight>
        </h2>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-300">
            Un enfoque metódico para implementar soluciones de IA agéntica en tu organización
          </p>
        </div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <ScrollTriggerLight key={index} threshold={0.3} rootMargin="0px 0px -50px 0px" delay={600 + index * 150}>
              <div 
                className="glow-border flex flex-col md:flex-row items-start md:items-center bg-gray-900 p-6 rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group emoji-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="flex-shrink-0 bg-secondary text-primary font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 relative">
                  {step.number}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold text-white mr-3">{step.title}</h3>
                    <div className="emoji-tooltip">
                      <div className="emoji-icon text-2xl">{step.icon}</div>
                      <span className="tooltip-text">{step.tooltip}</span>
                    </div>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </ScrollTriggerLight>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 