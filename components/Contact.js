import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [errorDetail, setErrorDetail] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');
    setErrorDetail('');
    
    console.log('Iniciando envío del formulario...', formData);

    try {
      // Intentar primero con el nuevo endpoint alternativo
      let response;
      let data;
      let useMethod = '';
      
      try {
        // Primero intentamos con el nuevo método
        console.log('Intentando enviar mensaje con el método alternativo...');
        response = await fetch('/api/contact-alternative', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        data = await response.json();
        console.log('Respuesta del método alternativo:', data);
        
        if (!response.ok) {
          const errorMsg = `Error con el método alternativo: ${data.error || 'Desconocido'}`;
          console.error(errorMsg, data);
          if (data.details) {
            console.error('Detalles del error:', data.details);
          }
          throw new Error(errorMsg);
        }
        
        console.log('Mensaje enviado exitosamente con el método alternativo');
        useMethod = 'alternativo';
      } catch (alternativeError) {
        // Si el método alternativo falla, intentamos con el método original
        console.log('El método alternativo falló, intentando con el método original...', alternativeError);
        
        response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        data = await response.json();
        console.log('Respuesta del método original:', data);
        
        if (!response.ok) {
          const errorMsg = `Error con el método original: ${data.error || 'Desconocido'}`;
          console.error(errorMsg, data);
          if (data.details) {
            console.error('Detalles del error:', data.details);
          }
          throw new Error(errorMsg);
        }
        
        console.log('Mensaje enviado exitosamente con el método original');
        useMethod = 'original';
      }

      // Si llegamos aquí, uno de los métodos funcionó
      setSubmitStatus('success');
      setSubmitMessage(`¡Mensaje enviado con éxito usando el método ${useMethod}! Nos pondremos en contacto contigo pronto.`);
      
      // Resetear el formulario
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      // Ambos métodos fallaron
      console.error('Error al enviar el formulario:', error);
      
      setSubmitStatus('error');
      setSubmitMessage('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente por teléfono.');
      
      // Guardar detalles del error para debug
      setErrorDetail(error.toString());
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section bg-black">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Contáctanos</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-300">
          Estamos listos para ayudarte a transformar tu negocio con soluciones de IA agéntica
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Envíanos un mensaje</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-300">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 font-medium text-gray-300">Empresa</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                  placeholder="Nombre de tu empresa"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-300">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                  placeholder="¿Cómo podemos ayudarte?"
                  required
                ></textarea>
              </div>
              
              {submitMessage && (
                <div className={`p-4 rounded-md ${submitStatus === 'success' ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
                  {submitMessage}
                  
                  {/* Solo mostrar detalles del error en entorno de desarrollo */}
                  {submitStatus === 'error' && errorDetail && (
                    <div className="mt-2 text-xs opacity-75">
                      <details>
                        <summary>Detalles técnicos (para debug)</summary>
                        <pre className="mt-1 overflow-auto max-h-32 p-2 bg-gray-800 rounded">
                          {errorDetail}
                        </pre>
                      </details>
                    </div>
                  )}
                </div>
              )}
              
              <button 
                type="submit" 
                className="button px-8 py-3 flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Información de Contacto</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-lg mb-2 text-gray-300">Dirección</h4>
                <p className="text-gray-400">Rio Amazonas 110, San Cristobal, Dolores Hidalgo C.I.N, Guanajuato</p>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2 text-gray-300">Teléfono</h4>
                <p className="text-gray-400">+52 418 177 4543</p>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2 text-gray-300">Email</h4>
                <p className="text-gray-400">salvador@thinkdeepgroup.com</p>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2 text-gray-300">Horario de Atención</h4>
                <p className="text-gray-400">Lunes a Sábado: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
