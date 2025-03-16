import React from 'react';
import Image from 'next/image';

const Benefits = () => {
  const benefits = [
    {
      title: 'Reducción de Costos Operativos',
      description: 'Nuestras soluciones de automatización reducen significativamente los costos operativos al minimizar la intervención manual y optimizar los recursos.',
      icon: '💰',
      tooltip: 'Ahorra recursos'
    },
    {
      title: 'Mayor Eficiencia y Productividad',
      description: 'La automatización de workflows permite a tu equipo enfocarse en tareas de mayor valor, aumentando la productividad general de la organización.',
      icon: '⚡',
      tooltip: 'Potencia tu equipo'
    },
    {
      title: 'Mejora en la Toma de Decisiones',
      description: 'Con análisis de datos en tiempo real y modelos predictivos, podrás tomar decisiones más informadas y estratégicas.',
      icon: '🧠',
      tooltip: 'Decisiones inteligentes'
    },
    {
      title: 'Escalabilidad y Adaptabilidad',
      description: 'Nuestras soluciones crecen con tu negocio y se adaptan a tus necesidades cambiantes, garantizando una inversión a largo plazo.',
      icon: '📈',
      tooltip: 'Crece sin límites'
    },
    {
      title: 'Reducción de Errores',
      description: 'La automatización minimiza los errores humanos, mejorando la calidad y consistencia de tus procesos empresariales.',
      icon: '✅',
      tooltip: 'Precisión garantizada'
    },
    {
      title: 'Experiencia de Cliente Mejorada',
      description: 'Respuestas más rápidas y precisas a las consultas de los clientes, lo que resulta en una mayor satisfacción y fidelidad.',
      icon: '😊',
      tooltip: 'Clientes satisfechos'
    },
  ];

  return (
    <section id="beneficios" className="section bg-black">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          <span className="main-title-light">Beneficios</span>
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-300">
          Descubre cómo nuestras soluciones de IA agéntica pueden transformar tu negocio
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glow-border bg-gray-900 p-6 rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group emoji-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="emoji-tooltip mb-4">
                <div className="emoji-icon">{benefit.icon}</div>
                <span className="tooltip-text">{benefit.tooltip}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 