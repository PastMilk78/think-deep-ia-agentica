import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hola, soy el asistente virtual de Think Deep. ¿En qué puedo ayudarte hoy?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Función para enviar mensajes al backend
  const sendMessage = async (message) => {
    if (!message.trim()) return;

    // Añadir mensaje del usuario al chat
    const newMessages = [
      ...messages,
      { role: 'user', content: message }
    ];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Llamada a la API de agentes
      const response = await fetch('/api/chat-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          messages: newMessages.map(msg => ({ role: msg.role, content: msg.content }))
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      
      // Añadir respuesta del asistente
      setMessages([...newMessages, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      
      // Intentar con el endpoint básico como fallback
      try {
        const fallbackResponse = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            messages: newMessages.map(msg => ({ role: msg.role, content: msg.content }))
          }),
        });

        if (!fallbackResponse.ok) {
          throw new Error('Error en la respuesta del servidor de fallback');
        }

        const fallbackData = await fallbackResponse.json();
        
        // Añadir respuesta del asistente
        setMessages([...newMessages, { role: 'assistant', content: fallbackData.message }]);
      } catch (fallbackError) {
        console.error('Error en el fallback:', fallbackError);
        // Añadir mensaje de error
        setMessages([
          ...newMessages,
          { 
            role: 'assistant', 
            content: 'Lo siento, ha ocurrido un error al procesar tu mensaje. Por favor, intenta nuevamente o contáctanos directamente.' 
          }
        ]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll al último mensaje
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-secondary text-primary rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Ventana de chat */}
      <div className={`fixed bottom-24 right-6 w-96 bg-gray-900 rounded-lg shadow-xl z-50 transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        {/* Encabezado del chat */}
        <div className="bg-gray-800 rounded-t-lg p-4 flex items-center">
          <div className="w-10 h-10 relative mr-3">
            <Image
              src="/logo-original.png"
              alt="Think Deep Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div>
            <h3 className="text-white font-semibold">Asistente Think Deep</h3>
            <p className="text-gray-400 text-sm">Respuestas impulsadas por IA</p>
          </div>
        </div>

        {/* Mensajes */}
        <div className="p-4 h-96 overflow-y-auto">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-4 ${message.role === 'user' ? 'text-right' : ''}`}
            >
              <div 
                className={`inline-block p-3 rounded-lg ${
                  message.role === 'user' 
                    ? 'bg-secondary text-primary' 
                    : 'bg-gray-800 text-white'
                } max-w-[80%]`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="mb-4">
              <div className="inline-block p-3 rounded-lg bg-gray-800 text-white">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Formulario de entrada */}
        <form onSubmit={handleSubmit} className="border-t border-gray-700 p-4">
          <div className="flex">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-gray-800 text-white rounded-l-lg px-4 py-2 focus:outline-none"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-secondary text-primary px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors"
              disabled={isLoading || !inputMessage.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AIChat; 