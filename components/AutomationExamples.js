import React from 'react';

const AutomationExamples = () => {
  const examples = [
    {
      icon: '🤖',
      title: 'Chatbots Inteligentes',
      description: 'Automatiza la atención al cliente 24/7 con chatbots que aprenden de cada interacción y resuelven consultas complejas.'
    },
    {
      icon: '📊',
      title: 'Análisis de Datos',
      description: 'Procesa grandes volúmenes de datos para identificar patrones y tendencias que impulsen decisiones estratégicas.'
    },
    {
      icon: '📝',
      title: 'Generación de Contenido',
      description: 'Crea automáticamente informes, correos electrónicos y contenido de marketing personalizado para diferentes audiencias.'
    },
    {
      icon: '📅',
      title: 'Programación Inteligente',
      description: 'Optimiza la gestión de calendarios y reuniones con asistentes virtuales que coordinan horarios automáticamente.'
    },
    {
      icon: '🔍',
      title: 'Búsqueda Semántica',
      description: 'Mejora la recuperación de información con sistemas que entienden el contexto y la intención detrás de las consultas.'
    },
    {
      icon: '📈',
      title: 'Predicción de Tendencias',
      description: 'Anticipa cambios en el mercado y comportamiento de clientes con modelos predictivos avanzados.'
    },
    {
      icon: '🔄',
      title: 'Automatización de Procesos',
      description: 'Elimina tareas repetitivas en departamentos como finanzas, RRHH y operaciones con flujos de trabajo inteligentes.'
    },
    {
      icon: '🛒',
      title: 'Recomendaciones Personalizadas',
      description: 'Aumenta las ventas con sistemas que sugieren productos basados en preferencias y comportamientos individuales.'
    }
  ];

  return (
    <section className="section bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Ejemplos de Automatización con IA</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-300">
          Descubre cómo la IA agéntica puede transformar diferentes aspectos de tu negocio con estas aplicaciones prácticas
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((example, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:scale-105 border-2 border-gray-700 hover:border-secondary hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] relative overflow-hidden"
            >
              <div className="text-4xl mb-4">{example.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{example.title}</h3>
              <p className="text-gray-400">{example.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Estos son solo algunos ejemplos de lo que podemos hacer. ¿Tienes un desafío específico?
          </p>
          <a href="#contacto" className="button">Hablemos de tu Proyecto</a>
        </div>
      </div>
    </section>
  );
};

export default AutomationExamples; 