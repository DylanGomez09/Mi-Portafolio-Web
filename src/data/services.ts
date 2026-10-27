export type Service = {
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    title: 'Aplicaciones web a medida',
    description:
      'Sistemas de gestión, paneles y plataformas que reemplazan planillas sueltas y ordenan la operación diaria.',
    items: ['React, Next.js y Astro', 'Node.js y PostgreSQL', 'Autenticación y roles'],
  },
  {
    title: 'Apps móviles',
    description:
      'Aplicaciones para iOS y Android con una sola base de código, conectadas al mismo backend que tu sistema.',
    items: ['React Native y Expo', 'Notificaciones push', 'Flujos para clientes y equipos'],
  },
  {
    title: 'Automatización e IA',
    description:
      'Integro modelos como Gemini o Claude en tareas concretas, con validación y control humano donde importa.',
    items: ['Clasificar y resumir', 'Generar contenido', 'Asistentes sobre datos propios'],
  },
  {
    title: 'Sitios y landings',
    description:
      'Sitios rápidos y accesibles, pensados para posicionar, convertir consultas y medir lo que pasa.',
    items: ['Astro y Tailwind CSS', 'SEO técnico y Core Web Vitals', 'Analítica y conversión'],
  },
  {
    title: 'Evolución y soporte',
    description:
      'Mejoras, correcciones y nuevas funciones sobre lo que ya está en producción, sin frenar el negocio.',
    items: ['Entregas por etapas', 'Documentación', 'Monitoreo y mantenimiento'],
  },
];

export const serviceAudiences = [
  'PyMEs que necesitan ordenar ventas, stock o atención al cliente.',
  'Emprendedores que quieren lanzar un producto digital sin improvisar.',
  'Profesionales que necesitan un sitio que consiga consultas reales.',
  'Equipos que buscan reforzar frontend, backend o integraciones de IA.',
];

export const serviceSteps = [
  {
    title: 'Relevamiento',
    description:
      'Entiendo cómo trabajás hoy, quién usa el sistema y dónde se pierde tiempo. De ahí sale el alcance.',
  },
  {
    title: 'Iteraciones',
    description:
      'Diseño y construyo por etapas, con demos funcionales para probar y corregir antes de avanzar.',
  },
  {
    title: 'Lanzamiento',
    description:
      'Publico, documento y acompaño la puesta en marcha. Después evaluamos qué conviene mejorar.',
  },
];

export const serviceFaqs = [
  {
    question: '¿Trabajás con clientes fuera de Buenos Aires?',
    answer:
      'Sí. Trabajo en remoto con clientes de Argentina y del exterior, con reuniones por videollamada y entregas por etapas.',
  },
  {
    question: '¿Cómo se define el presupuesto?',
    answer:
      'Primero relevo el proceso y los objetivos. Después envío una propuesta con entregables, tiempos y precio por etapa, antes de escribir código.',
  },
  {
    question: '¿Cuánto tarda un proyecto?',
    answer:
      'Depende del alcance. Una landing o un sitio institucional puede resolverse en pocas semanas; un sistema a medida con backend, roles y app móvil lleva varios meses.',
  },
  {
    question: '¿Qué tecnologías usás?',
    answer:
      'React, Next.js, Astro y TypeScript en el frontend; Node.js, Express y PostgreSQL en el backend; React Native y Expo para móvil. Sumo Gemini o Claude cuando la IA aporta valor real.',
  },
  {
    question: '¿Puedo pedir cambios durante el desarrollo?',
    answer:
      'Sí. Trabajo por iteraciones cortas con demos funcionales para que puedas probar y ajustar antes de avanzar a la siguiente etapa.',
  },
  {
    question: '¿Ofrecés mantenimiento después del lanzamiento?',
    answer:
      'Sí. Puedo acompañar con soporte, monitoreo y nuevas funciones, o dejar el proyecto documentado para que lo mantenga tu equipo.',
  },
];
