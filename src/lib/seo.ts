import { mentions, projects, site } from '../data/portfolio';

export const absoluteUrl = (path: string) => new URL(path, site.website).toString();

export const PERSON_ID = `${site.website}/#person`;
export const WEBSITE_ID = `${site.website}/#website`;
export const OG_IMAGE = absoluteUrl('/images/og.jpg');

const KNOWS_ABOUT = [
  'Desarrollo web',
  'React',
  'Next.js',
  'Astro',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'React Native',
  'Expo',
  'PostgreSQL',
  'Python',
  'Inteligencia artificial',
];

const subjectOf = mentions
  .filter((mention) => mention.kind === 'Prensa')
  .map((mention) => ({
    '@type': 'NewsArticle',
    headline:
      'Alumnos de la técnica de San Vicente desarrollaron un programa para acelerar la atención en los CAPS',
    url: mention.href,
    publisher: { '@type': 'Organization', name: mention.outlet },
  }));

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: site.fullName,
  alternateName: site.name,
  jobTitle: site.role,
  description:
    'Desarrollador full stack en Buenos Aires. Aplicaciones web y móviles, software a medida e integración de inteligencia artificial.',
  url: site.website,
  image: {
    '@type': 'ImageObject',
    url: OG_IMAGE,
    width: 1200,
    height: 630,
  },
  email: `mailto:${site.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.location,
    addressCountry: 'AR',
  },
  sameAs: [site.github, site.linkedin],
  knowsAbout: KNOWS_ABOUT,
  knowsLanguage: ['es'],
  hasOccupation: {
    '@type': 'Occupation',
    name: site.role,
    occupationLocation: { '@type': 'City', name: site.location },
    skills: KNOWS_ABOUT.join(', '),
  },
  worksFor: { '@type': 'Organization', name: 'DG Systems' },
  ...(subjectOf.length > 0 ? { subjectOf } : {}),
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: site.website,
  name: site.name,
  description:
    'Portfolio y servicios de Dylan Gómez, desarrollador full stack en Buenos Aires.',
  inLanguage: 'es-AR',
  publisher: { '@id': PERSON_ID },
};

type PageInput = {
  path: string;
  name: string;
  description: string;
};

export const webPageSchema = ({ path, name, description }: PageInput) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': PERSON_ID },
  inLanguage: 'es-AR',
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: OG_IMAGE,
    width: 1200,
    height: 630,
  },
});

export const profilePageSchema = ({ path, name, description }: PageInput) => ({
  ...webPageSchema({ path, name, description }),
  '@type': 'ProfilePage',
  mainEntity: { '@id': PERSON_ID },
});

export const breadcrumbSchema = (items: Array<{ name: string; path: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const projectsItemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Proyectos de Dylan Gómez',
  description: 'Aplicaciones web, móviles y proyectos de inteligencia artificial.',
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      url: project.demo ?? project.code ?? `${site.website}/#proyectos`,
      keywords: project.tech.join(', '),
      author: { '@id': PERSON_ID },
      inLanguage: 'es-AR',
    },
  })),
};

export const faqSchema = (items: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const servicesSchema = (
  services: Array<{ title: string; description: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${absoluteUrl('/servicios/')}#service`,
  name: 'Dylan Gómez — Desarrollo de software',
  description:
    'Desarrollo de aplicaciones web y móviles, software a medida, automatización con IA y sitios rápidos para PyMEs y emprendedores.',
  url: absoluteUrl('/servicios/'),
  image: OG_IMAGE,
  email: `mailto:${site.email}`,
  founder: { '@id': PERSON_ID },
  areaServed: [
    { '@type': 'City', name: site.location },
    { '@type': 'Country', name: 'Argentina' },
  ],
  availableLanguage: ['es'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios',
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: { '@id': PERSON_ID },
      },
    })),
  },
});
