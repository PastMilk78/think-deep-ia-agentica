import React from 'react';

const Contact = () => {
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-300">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 font-medium text-gray-300">Empresa</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-300">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>
              <button type="submit" className="button px-8 py-3">Enviar Mensaje</button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Información de Contacto</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-lg mb-2 text-gray-300">Dirección</h4>
                <p className="text-gray-400">Av. Principal 123, Edificio Empresarial, Piso 5</p>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2 text-gray-300">Teléfono</h4>
                <p className="text-gray-400">+123 456 7890</p>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2 text-gray-300">Email</h4>
                <p className="text-gray-400">info@thinkdeep.com</p>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2 text-gray-300">Horario de Atención</h4>
                <p className="text-gray-400">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 