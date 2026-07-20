export interface Speaker {
  id: string;
  name: string;
  role: string;
  description: string;
  photo?: string;
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
