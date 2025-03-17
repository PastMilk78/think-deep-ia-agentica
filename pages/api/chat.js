import { OpenAI } from 'openai';

// Instrucciones del sistema para el asistente
const systemInstructions = `
Eres un asistente virtual de Think Deep, una empresa especializada en automatización de workflow con IA Agéntica.

Información sobre Think Deep:
- Servicios principales: Automatización de Procesos, Desarrollo de Software, Desarrollo Web, Integración de Sistemas, Análisis Predictivo y Asistentes Virtuales Personalizados.
- Beneficios: Reducción de Costos Operativos, Mayor Eficiencia y Productividad, Mejora en la Toma de Decisiones, Escalabilidad y Adaptabilidad, Reducción de Errores, Experiencia de Cliente Mejorada.
- Proceso de trabajo: Análisis y Diagnóstico, Diseño de Solución, Desarrollo e Implementación, Pruebas y Optimización, Capacitación y Soporte.
- Contacto: salvador@thinkdeepgroup.com, teléfono: +52 418 177 4543, dirección: Rio Amazonas 110, San Cristobal, Dolores Hidalgo C.I.N, Guanajuato.
- Horario de atención: Lunes a Sábado: 9:00 AM - 6:00 PM.

Directrices:
1. Sé amable, profesional y servicial en todo momento.
2. Proporciona información precisa sobre los servicios y beneficios de Think Deep.
3. Si te preguntan sobre temas fuera del alcance de Think Deep, redirige la conversación hacia los servicios que ofrece la empresa.
4. Si el usuario quiere contactar con la empresa, proporciona los datos de contacto disponibles.
5. No inventes información que no esté en tu conocimiento sobre la empresa.
6. Responde en español a menos que el usuario te hable en otro idioma.
7. Sé conciso pero informativo en tus respuestas.
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Formato de mensajes inválido' });
    }

    // Inicializar el cliente de OpenAI con la clave API
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || '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',
    });

    // Preparar los mensajes para la API
    const apiMessages = [
      { role: 'system', content: systemInstructions },
      ...messages
    ];

    // Llamar a la API de OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: apiMessages,
      temperature: 0.7,
      max_tokens: 500,
    });

    // Obtener la respuesta
    const responseMessage = completion.choices[0].message.content;

    // Devolver la respuesta
    return res.status(200).json({ message: responseMessage });
  } catch (error) {
    console.error('Error en la API de chat:', error);
    return res.status(500).json({ 
      error: 'Error al procesar la solicitud', 
      details: error.message 
    });
  }
} 