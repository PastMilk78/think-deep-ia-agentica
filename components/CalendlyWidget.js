import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="calendly-container my-8">
      <h2 className="text-2xl font-bold text-center mb-4">Agenda una cita con nosotros</h2>
      <div className="max-w-4xl mx-auto">
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/pastillasdeafrecho78/agenda-td" 
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>
    </div>
  );
};

export default CalendlyWidget;
