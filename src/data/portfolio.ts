export const site = {
  name: "Dylan Gómez",
  fullName: "Dylan Ezequiel Gómez",
  firstName: "Dylan",
  lastName: "Gómez",
  role: "Desarrollador Full Stack",
  tagline: "Creo experiencias web únicas.",
  location: "Buenos Aires",
  timezone: "America/Argentina/Buenos_Aires",
  domain: "dylangomez.online",
  website: "https://www.dylangomez.online",
  github: "https://github.com/DylanGomez09",
  linkedin: "https://www.linkedin.com/in/dylangomez09/",
  availability: "Disponible para proyectos",
  email: "gomezdylan354@gmail.com",
  photo: "/images/about-1200.webp",
  photoSrcset: "/images/about-600.webp 600w, /images/about-1200.webp 1200w",
  photoSizes: "(min-width: 820px) 40vw, 100vw",
  heroPhoto: "/images/hero-1200.webp",
  heroPhotoSrcset:
    "/images/hero-800.webp 800w, /images/hero-1200.webp 1200w, /images/hero-2000.webp 2000w",
  heroPhotoSizes:
    "(min-width: 820px) and (orientation: landscape) 40vw, (min-width: 820px) 72vw, 100vw",
  avatar: "/images/avatar.jpg",
} as const;

export const navLinks = [
  { label: "Servicios", href: "/servicios/" },
  { label: "Proyectos", href: "/#proyectos" },
] as const;

export const hero = {
  index: "00",
  label: "Inicio",
  description:
    "Técnico en informática y desarrollador de software. Hago aplicaciones web y móviles, y llevo DG Systems, software a medida para PyMEs y negocios locales.",
};

export const about = {
  paragraphs: [
    "Soy Dylan Gómez, Desarrollador Full Stack.",
    "Creo productos digitales modernos, funcionales y escalables, sobre todo aplicaciones web y móviles. Trabajo con React, TypeScript y Node.js, combinando frontend y backend.",
    "Me interesa convertir problemas e ideas en soluciones concretas, y sumar Inteligencia Artificial cuando de verdad aporta valor al producto.",
    "Ese enfoque me llevó a desarrollar software con impacto real, reconocido en espacios educativos como la Feria de Ciencias y Tecnología 2025.",
    "Hoy busco seguir creciendo profesionalmente a través de proyectos, colaboraciones y oportunidades dentro del desarrollo de software.",
  ],
  tags: [
    "Desarrollo web",
    "Desarrollo móvil",
    "Backend",
    "Inteligencia artificial",
  ],
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Astro",
      "Vite",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    label: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "Python",
      "Prisma",
      "PostgreSQL",
      "MySQL",
      "JWT",
    ],
  },
  {
    label: "Cloud",
    items: ["AWS", "Azure"],
  },
  {
    label: "IA",
    items: ["Claude", "Gemini API"],
  },
  {
    label: "DevOps y herramientas",
    items: ["Docker", "Linux", "Git", "GitHub", "Figma"],
  },
];

export type Category = "SaaS" | "Web" | "Móvil" | "IA";

export type Project = {
  slug: string;
  title: string;
  categories: Category[];
  kind: string;
  featured?: boolean;
  client?: boolean;
  description: string;
  tech: string[];
  demo?: string;
  code?: string;
};

export const projectFilters: Array<"Todos" | Category> = [
  "Todos",
  "SaaS",
  "Web",
  "Móvil",
  "IA",
];

export const projects: Project[] = [
  {
    slug: "barra",
    title: "BARRA",
    categories: ["SaaS"],
    kind: "SaaS",
    featured: true,
    description:
      "SaaS multi-gimnasio con CRM de escritorio para gestionar clientes, cobranza, rutinas y asistencia, y una app móvil para socios con rutinas, sellos por QR y renovación del plan self-service.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Expo"],
    demo: "https://www.barrafit.online/",
  },
  {
    slug: "travio-ai",
    title: "TRAVIO AI",
    categories: ["Web", "IA"],
    kind: "App web · IA",
    description:
      "App full-stack que usa Gemini API para generar itinerarios de viaje personalizados según presupuesto e intereses.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Gemini API"],
    demo: "https://travio-ai-app.vercel.app/es",
  },
  {
    slug: "yf-portfolio",
    title: "YF Portfolio",
    categories: ["Web"],
    kind: "Landing page",
    description: "Sitio personal para una fotógrafa profesional.",
    tech: ["Astro", "Tailwind CSS"],
    demo: "https://yfuentealba.vercel.app/",
  },
  {
    slug: "almacen-preciso",
    title: "Almacén Preciso",
    categories: ["Móvil"],
    kind: "App móvil",
    description:
      "Gestión de inventario con reporte de faltantes en tiempo real, flujo de aprobación para el dueño, código de unión para el equipo, notificaciones push y roles Dueño/Empleado.",
    tech: ["React Native", "TypeScript", "Node.js", "Express", "Expo", "JWT"],
    code: "https://github.com/DylanGomez09/AlmacenPreciso",
  },
  {
    slug: "sia-tec",
    title: "SIA-TEC",
    categories: ["IA", "Web"],
    kind: "Proyecto escolar · IA",
    description:
      "Sistema para automatizar la atención y los turnos en centros de salud (CAPS) con IA. Incluye app y blog. Destacado por El Diario Sur.",
    tech: ["Python", "MySQL", "IA", "Astro", "Tailwind CSS"],
    code: "https://github.com/DylanGomez09/SIATEC-App",
  },
];

export type Mention = {
  outlet: string;
  kind: string;
  description: string;
  href: string;
};

export const mentions: Mention[] = [
  {
    outlet: "El Diario Sur",
    kind: "Prensa",
    description:
      "Destacó SIA-TEC por su impacto en la comunidad y la optimización de tiempos en guardias médicas.",
    href: "https://www.eldiariosur.com/san-vicente/2026/4/29/alumnos-de-la-tecnica-de-san-vicente-desarrollaron-un-programa-para-acelerar-la-atencion-en-los-caps-79546.html",
  },
  {
    outlet: "CoreByte",
    kind: "Colaboración",
    description:
      "Arquitectura frontend de una app escolar junto a un profesor: administración docente e inscripción de alumnos.",
    href: "https://www.corebyte.com.ar/#colaboradores",
  },
];

export type ProcessStep = {
  phase: string;
  title: string;
  description: string;
  output: string;
};

export const processSteps: ProcessStep[] = [
  {
    phase: "Descubrimiento",
    title: "Entender el negocio",
    description: "Cómo trabajás hoy, quién usa el sistema y dónde se pierde tiempo.",
    output: "Mapa del proceso",
  },
  {
    phase: "Definición",
    title: "Acordar el alcance",
    description: "Qué entra, qué espera y cuánto cuesta. Todo por escrito.",
    output: "Propuesta y prioridades",
  },
  {
    phase: "Diseño",
    title: "Prototipar la solución",
    description: "Flujos y pantallas navegables antes de escribir código.",
    output: "Prototipo navegable",
  },
  {
    phase: "Construcción",
    title: "Construir por iteraciones",
    description: "Entregas cortas con demos que podés probar y corregir.",
    output: "Demo funcional",
  },
  {
    phase: "Validación",
    title: "Probar antes de publicar",
    description: "Flujos completos, permisos, rendimiento y accesibilidad.",
    output: "Checklist de QA",
  },
  {
    phase: "Despliegue",
    title: "Publicar y acompañar",
    description: "Producción, documentación y soporte para lo que venga.",
    output: "Sistema en producción",
  },
];
