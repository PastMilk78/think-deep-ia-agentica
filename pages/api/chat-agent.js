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

Proyectos destacados:
1. Sitio Web Think Deep - Desarrollado con Next.js y Tailwind CSS, optimizado para SEO y con efectos visuales avanzados.
2. Frateli Joyería - Implementación de estrategias de marketing digital, catálogo en línea y sistema de gestión de inventario personalizado.
3. Pavido Navido Mariscos - Desarrollo de identidad de marca, estrategia de negocio y presencia digital.

Directrices:
1. Sé amable, profesional y servicial en todo momento.
2. Proporciona información precisa sobre los servicios y beneficios de Think Deep.
3. Si te preguntan sobre temas fuera del alcance de Think Deep, redirige la conversación hacia los servicios que ofrece la empresa.
4. Si el usuario quiere contactar con la empresa, proporciona los datos de contacto disponibles.
5. No inventes información que no esté en tu conocimiento sobre la empresa.
6. Responde en español a menos que el usuario te hable en otro idioma.
7. Sé conciso pero informativo en tus respuestas.
8. Si te preguntan sobre precios específicos, indica que varían según las necesidades del cliente y recomienda contactar directamente para obtener un presupuesto personalizado.
`;

// Definición de funciones para el asistente
const functions = [
  {
    name: "get_contact_info",
    description: "Obtiene la información de contacto de Think Deep",
    parameters: {
      type: "object",
      properties: {},
      required: []
    }
  },
  {
    name: "get_services_info",
    description: "Obtiene información detallada sobre los servicios que ofrece Think Deep",
    parameters: {
      type: "object",
      properties: {
        service_name: {
          type: "string",
          enum: ["Automatización de Procesos", "Desarrollo de Software", "Desarrollo Web", "Integración de Sistemas", "Análisis Predictivo", "Asistentes Virtuales Personalizados"],
          description: "El nombre del servicio específico sobre el que se quiere información"
        }
      },
      required: []
    }
  },
  {
    name: "get_process_info",
    description: "Obtiene información sobre el proceso de trabajo de Think Deep",
    parameters: {
      type: "object",
      properties: {
        step_name: {
          type: "string",
          enum: ["Análisis y Diagnóstico", "Diseño de Solución", "Desarrollo e Implementación", "Pruebas y Optimización", "Capacitación y Soporte"],
          description: "El nombre de la etapa específica del proceso sobre la que se quiere información"
        }
      },
      required: []
    }
  }
];

// Implementaciones de las funciones
const functionImplementations = {
  get_contact_info: async () => {
    return {
      email: "salvador@thinkdeepgroup.com",
      phone: "+52 418 177 4543",
      address: "Rio Amazonas 110, San Cristobal, Dolores Hidalgo C.I.N, Guanajuato",
      business_hours: "Lunes a Sábado: 9:00 AM - 6:00 PM"
    };
  },
  get_services_info: async ({ service_name }) => {
    const servicesInfo = {
      "Automatización de Procesos": {
        description: "Implementamos soluciones de IA agéntica para automatizar flujos de trabajo complejos, reduciendo errores y aumentando la eficiencia operativa.",
        benefits: ["Reducción de costos operativos", "Mayor eficiencia", "Menos errores humanos", "Procesos más rápidos"],
        use_cases: ["Procesamiento de documentos", "Gestión de inventario", "Atención al cliente automatizada", "Generación de informes"]
      },
      "Desarrollo de Software": {
        description: "Creamos soluciones de software a medida que se adaptan perfectamente a las necesidades específicas de tu negocio, con enfoque en calidad y escalabilidad.",
        benefits: ["Software personalizado", "Integración con sistemas existentes", "Escalabilidad", "Soporte continuo"],
        technologies: ["Python", "JavaScript", "React", "Node.js", "Django", "SQL/NoSQL databases"]
      },
      "Desarrollo Web": {
        description: "Diseñamos y desarrollamos sitios web modernos, responsivos y optimizados para SEO que destacan tu marca y mejoran la experiencia del usuario.",
        benefits: ["Diseño moderno y responsivo", "Optimización SEO", "Experiencia de usuario mejorada", "Rendimiento optimizado"],
        technologies: ["Next.js", "React", "Tailwind CSS", "WordPress", "Shopify"]
      },
      "Integración de Sistemas": {
        description: "Conectamos tus sistemas existentes con nuestra plataforma de IA para crear un ecosistema digital cohesivo y eficiente.",
        benefits: ["Flujo de datos sin interrupciones", "Eliminación de silos de información", "Procesos más eficientes", "Mejor toma de decisiones"],
        use_cases: ["Integración CRM-ERP", "Conexión con APIs externas", "Migración de datos", "Sincronización entre plataformas"]
      },
      "Análisis Predictivo": {
        description: "Utilizamos modelos avanzados de IA para analizar datos y predecir tendencias, ayudándote a tomar decisiones informadas.",
        benefits: ["Decisiones basadas en datos", "Identificación de tendencias", "Anticipación a cambios del mercado", "Optimización de recursos"],
        technologies: ["Machine Learning", "Deep Learning", "Procesamiento de lenguaje natural", "Análisis estadístico"]
      },
      "Asistentes Virtuales Personalizados": {
        description: "Desarrollamos asistentes virtuales inteligentes adaptados a las necesidades específicas de tu negocio.",
        benefits: ["Atención al cliente 24/7", "Reducción de carga de trabajo", "Experiencia personalizada", "Escalabilidad"],
        use_cases: ["Chatbots para atención al cliente", "Asistentes para ventas", "Sistemas de recomendación", "Automatización de FAQ"]
      }
    };

    if (service_name) {
      return servicesInfo[service_name] || { error: "Servicio no encontrado" };
    } else {
      return Object.keys(servicesInfo).reduce((acc, key) => {
        acc[key] = servicesInfo[key].description;
        return acc;
      }, {});
    }
  },
  get_process_info: async ({ step_name }) => {
    const processInfo = {
      "Análisis y Diagnóstico": {
        description: "Evaluamos tus procesos actuales e identificamos oportunidades de automatización y mejora.",
        activities: ["Entrevistas con stakeholders", "Análisis de procesos existentes", "Identificación de cuellos de botella", "Evaluación de tecnologías actuales"],
        deliverables: ["Informe de diagnóstico", "Mapa de procesos", "Identificación de oportunidades"]
      },
      "Diseño de Solución": {
        description: "Creamos una solución personalizada que se adapta a tus necesidades específicas y objetivos de negocio.",
        activities: ["Definición de requisitos", "Diseño de arquitectura", "Selección de tecnologías", "Planificación de implementación"],
        deliverables: ["Documento de especificaciones", "Prototipos", "Plan de implementación"]
      },
      "Desarrollo e Implementación": {
        description: "Desarrollamos e implementamos la solución de IA agéntica, integrándola con tus sistemas existentes.",
        activities: ["Desarrollo de software", "Configuración de IA", "Integración con sistemas existentes", "Pruebas iniciales"],
        deliverables: ["Código fuente", "Documentación técnica", "Manuales de usuario"]
      },
      "Pruebas y Optimización": {
        description: "Realizamos pruebas exhaustivas y optimizamos la solución para garantizar un rendimiento óptimo.",
        activities: ["Pruebas funcionales", "Pruebas de rendimiento", "Pruebas de seguridad", "Optimización"],
        deliverables: ["Informes de pruebas", "Solución optimizada", "Plan de mantenimiento"]
      },
      "Capacitación y Soporte": {
        description: "Proporcionamos capacitación a tu equipo y ofrecemos soporte continuo para asegurar el éxito a largo plazo.",
        activities: ["Sesiones de capacitación", "Documentación de usuario", "Soporte técnico", "Actualizaciones periódicas"],
        deliverables: ["Materiales de capacitación", "Acceso a soporte", "Actualizaciones y mejoras"]
      }
    };

    if (step_name) {
      return processInfo[step_name] || { error: "Etapa no encontrada" };
    } else {
      return Object.keys(processInfo).reduce((acc, key) => {
        acc[key] = processInfo[key].description;
        return acc;
      }, {});
    }
  }
};

export default async function handler(req, res) {
  // Solo permitir solicitudes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Formato de mensajes inválido' });
    }

    // Verificar que la clave API esté configurada
    if (!process.env.OPENAI_API_KEY) {
      console.error('Error: OPENAI_API_KEY no está configurada');
      return res.status(500).json({ error: 'Error de configuración del servidor: API key no disponible' });
    }

    // Inicializar el cliente de OpenAI con la clave API
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Preparar los mensajes para la API
    const apiMessages = [
      { role: 'system', content: systemInstructions },
      ...messages
    ];

    try {
      // Primera llamada para obtener la respuesta del asistente
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: apiMessages,
        functions: functions,
        function_call: 'auto',
      });

      // Obtener la respuesta del asistente
      const responseMessage = response.choices[0].message;

      // Verificar si el asistente quiere llamar a una función
      if (responseMessage.function_call) {
        // Obtener los detalles de la llamada a la función
        const functionName = responseMessage.function_call.name;
        const functionArgs = JSON.parse(responseMessage.function_call.arguments || '{}');

        // Verificar si la función existe
        if (!functionImplementations[functionName]) {
          throw new Error(`Función no encontrada: ${functionName}`);
        }

        // Ejecutar la función
        const functionResult = await functionImplementations[functionName](functionArgs);

        // Añadir la llamada a la función y su resultado a los mensajes
        apiMessages.push(responseMessage);
        apiMessages.push({
          role: 'function',
          name: functionName,
          content: JSON.stringify(functionResult),
        });

        // Segunda llamada para obtener la respuesta final
        const secondResponse = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: apiMessages,
        });

        // Devolver la respuesta final
        return res.status(200).json({ 
          message: secondResponse.choices[0].message.content 
        });
      } else {
        // Si no hay llamada a función, devolver la respuesta directamente
        return res.status(200).json({ 
          message: responseMessage.content 
        });
      }
    } catch (openaiError) {
      console.error('Error al llamar a la API de OpenAI:', openaiError);
      return res.status(500).json({ error: `Error al procesar la solicitud: ${openaiError.message}` });
    }
  } catch (error) {
    console.error('Error en el servidor:', error);
    return res.status(500).json({ error: `Error interno del servidor: ${error.message}` });
  }
} 