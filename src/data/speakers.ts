export interface Speaker {
  id: string;
  name: string;
  role: string;
  description: string;
  photo?: string;
  technologies: string[];
  socialMedia: {
    platform: string;
    url: string;
    icon: "linkedin" | "x";
  }[];
}

export const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Nombre y Apellido",
    role: "Rol | Experiencia",
    description: "Descripción breve de la charla y tópicos que abordará durante la presentación.",
    technologies: ["React", "TypeScript", "Node.js"],
    socialMedia: [
      {
        platform: "x",
        url: "https://x.com",
        icon: "x",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "speaker-2",
    name: "Nombre y Apellido",
    role: "Rol | Experiencia",
    description: "Descripción breve de la charla y tópicos que abordará durante la presentación.",
    technologies: ["Python", "Machine Learning", "TensorFlow"],
    socialMedia: [
      {
        platform: "x",
        url: "https://x.com",
        icon: "x",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "speaker-3",
    name: "Nombre y Apellido",
    role: "Rol | Experiencia",
    description: "Descripción breve de la charla y tópicos que abordará durante la presentación.",
    technologies: ["Kotlin", "Android", "Firebase"],
    socialMedia: [
      {
        platform: "x",
        url: "https://x.com",
        icon: "x",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "speaker-4",
    name: "Nombre y Apellido",
    role: "Rol | Experiencia",
    description: "Descripción breve de la charla y tópicos que abordará durante la presentación.",
    technologies: ["Go", "Kubernetes", "Docker"],
    socialMedia: [
      {
        platform: "x",
        url: "https://x.com",
        icon: "x",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "speaker-5",
    name: "Nombre y Apellido",
    role: "Rol | Experiencia",
    description: "Descripción breve de la charla y tópicos que abordará durante la presentación.",
    technologies: ["Vue.js", "Nuxt", "GraphQL"],
    socialMedia: [
      {
        platform: "x",
        url: "https://x.com",
        icon: "x",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "speaker-6",
    name: "Nombre y Apellido",
    role: "Rol | Experiencia",
    description: "Descripción breve de la charla y tópicos que abordará durante la presentación.",
    technologies: ["Rust", "WebAssembly", "Systems"],
    socialMedia: [
      {
        platform: "x",
        url: "https://x.com",
        icon: "x",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "speaker-7",
    name: "Nombre y Apellido",
    role: "Rol | Experiencia",
    description: "Descripción breve de la charla y tópicos que abordará durante la presentación.",
    technologies: ["Java", "Spring Boot", "Microservices"],
    socialMedia: [
      {
        platform: "x",
        url: "https://x.com",
        icon: "x",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "speaker-8",
    name: "Nombre y Apellido",
    role: "Rol | Experiencia",
    description: "Descripción breve de la charla y tópicos que abordará durante la presentación.",
    technologies: ["AWS", "Cloud", "DevOps"],
    socialMedia: [
      {
        platform: "x",
        url: "https://x.com",
        icon: "x",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "speaker-9",
    name: "Nombre y Apellido",
    role: "Rol | Experiencia",
    description: "Descripción breve de la charla y tópicos que abordará durante la presentación.",
    technologies: ["Svelte", "UX", "Design Systems"],
    socialMedia: [
      {
        platform: "x",
        url: "https://x.com",
        icon: "x",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "speaker-10",
    name: "Nombre y Apellido",
    role: "Rol | Experiencia",
    description: "Descripción breve de la charla y tópicos que abordará durante la presentación.",
    technologies: ["Flutter", "Mobile", "Cross-platform"],
    socialMedia: [
      {
        platform: "x",
        url: "https://x.com",
        icon: "x",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "speaker-11",
    name: "Nombre y Apellido",
    role: "Rol | Experiencia",
    description: "Descripción breve de la charla y tópicos que abordará durante la presentación.",
    technologies: ["Web3", "Blockchain", "Smart Contracts"],
    socialMedia: [
      {
        platform: "x",
        url: "https://x.com",
        icon: "x",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
  {
    id: "speaker-12",
    name: "Nombre y Apellido",
    role: "Rol | Experiencia",
    description: "Descripción breve de la charla y tópicos que abordará durante la presentación.",
    technologies: ["Data Science", "Analytics", "BigData"],
    socialMedia: [
      {
        platform: "x",
        url: "https://x.com",
        icon: "x",
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  },
];

export const speakersSection = {
  label: "Ponentes",
  heading: "Conoce a los referentes del tech que usas cada día",
} as const;
