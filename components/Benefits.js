import React from 'react';
import Image from 'next/image';

const Benefits = () => {
  const benefits = [
    {
      title: 'Reducción de Costos Operativos',
      description: 'Nuestras soluciones de automatización reducen significativamente los costos operativos al minimizar la intervención manual y optimizar los recursos.',
    },
    {
      title: 'Mayor Eficiencia y Productividad',
      description: 'La automatización de workflows permite a tu equipo enfocarse en tareas de mayor valor, aumentando la productividad general de la organización.',
    },
    {
      title: 'Mejora en la Toma de Decisiones',
      description: 'Con análisis de datos en tiempo real y modelos predictivos, podrás tomar decisiones más informadas y estratégicas.',
    },
    {
      title: 'Escalabilidad y Adaptabilidad',
      description: 'Nuestras soluciones crecen con tu negocio y se adaptan a tus necesidades cambiantes, garantizando una inversión a largo plazo.',
    },
    {
      title: 'Reducción de Errores',
      description: 'La automatización minimiza los errores humanos, mejorando la calidad y consistencia de tus procesos empresariales.',
    },
    {
      title: 'Experiencia de Cliente Mejorada',
      description: 'Respuestas más rápidas y precisas a las consultas de los clientes, lo que resulta en una mayor satisfacción y fidelidad.',
    },
  ];

  return (
    <section id="beneficios" className="section bg-black">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Beneficios</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-300">
          Descubre cómo nuestras soluciones de IA agéntica pueden transformar tu negocio
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-6 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-gray-800 hover:border-secondary hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] relative overflow-hidden"
            >
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