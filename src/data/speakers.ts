import type { IconName } from "@/types/icon";

interface SpeakerSocialLink {
  href: string;
  label: string;
  icon: IconName;
}

interface Speaker {
  name: string;
  role: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  socialLinks: SpeakerSocialLink[];
}

// TODO: Replace this temporary placeholder with final speaker headshots.
const placeholderSpeakerImage = "/og.jpg";

export const speakersSection: {
  label: string;
  heading: string;
  speakers: Speaker[];
} = {
  label: "Speakers",
  heading: "Conoce a los ponentes destacados",
  speakers: [
    {
      name: "Lucía Romero",
      role: "Staff Software Engineer en CloudNova",
      description:
        "Especialista en plataformas de datos y arquitecturas resilientes a gran escala.",
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Lucía Romero",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/lucia-romero-tech",
          label: "LinkedIn de Lucía Romero",
          icon: "linkedin",
        },
        {
          href: "https://x.com/luciaromero",
          label: "X de Lucía Romero",
          icon: "x",
        },
      ],
    },
    {
      name: "Carlos Peña",
      role: "Principal Developer Advocate",
      description:
        "Impulsa comunidades técnicas con foco en DX, IA aplicada y productos abiertos.",
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Carlos Peña",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/carlos-pena-dev",
          label: "LinkedIn de Carlos Peña",
          icon: "linkedin",
        },
        {
          href: "https://x.com/carlospena_dev",
          label: "X de Carlos Peña",
          icon: "x",
        },
      ],
    },
    {
      name: "Marta Alonso",
      role: "Tech Lead Frontend en Nébula",
      description:
        "Diseña experiencias web accesibles y sistemas de diseño para equipos distribuidos.",
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Marta Alonso",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/marta-alonso-web",
          label: "LinkedIn de Marta Alonso",
          icon: "linkedin",
        },
        {
          href: "https://x.com/martaalonso_dev",
          label: "X de Marta Alonso",
          icon: "x",
        },
      ],
    },
    {
      name: "Diego Serrano",
      role: "Engineering Manager en Flowbit",
      description:
        "Lidera equipos de producto con cultura de calidad, métricas y entrega continua.",
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Diego Serrano",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/diego-serrano-eng",
          label: "LinkedIn de Diego Serrano",
          icon: "linkedin",
        },
        {
          href: "https://x.com/dserrano_eng",
          label: "X de Diego Serrano",
          icon: "x",
        },
      ],
    },
    {
      name: "Irene Castillo",
      role: "Senior Platform Engineer",
      description:
        "Automatiza infraestructura cloud con enfoque en seguridad y observabilidad.",
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Irene Castillo",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/irene-castillo-platform",
          label: "LinkedIn de Irene Castillo",
          icon: "linkedin",
        },
        {
          href: "https://x.com/irenecloudops",
          label: "X de Irene Castillo",
          icon: "x",
        },
      ],
    },
    {
      name: "Álvaro Delgado",
      role: "CTO en Lattice AI",
      description:
        "Construye productos de inteligencia artificial centrados en impacto de negocio.",
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Álvaro Delgado",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/alvaro-delgado-cto",
          label: "LinkedIn de Álvaro Delgado",
          icon: "linkedin",
        },
        {
          href: "https://x.com/alvarodelgad0",
          label: "X de Álvaro Delgado",
          icon: "x",
        },
      ],
    },
    {
      name: "Noelia Martín",
      role: "Product Designer en Orbit",
      description:
        "Convierte investigación de usuarios en experiencias digitales medibles y claras.",
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Noelia Martín",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/noelia-martin-design",
          label: "LinkedIn de Noelia Martín",
          icon: "linkedin",
        },
        {
          href: "https://x.com/noeliamartinux",
          label: "X de Noelia Martín",
          icon: "x",
        },
      ],
    },
    {
      name: "Raúl Jiménez",
      role: "DevOps Consultant",
      description:
        "Ayuda a escalar pipelines de entrega con prácticas de fiabilidad y coste eficiente.",
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Raúl Jiménez",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/raul-jimenez-devops",
          label: "LinkedIn de Raúl Jiménez",
          icon: "linkedin",
        },
        {
          href: "https://x.com/rauldevops",
          label: "X de Raúl Jiménez",
          icon: "x",
        },
      ],
    },
    {
      name: "Sonia Gil",
      role: "AI Engineer en Synapse",
      description:
        "Diseña asistentes de IA seguros, explicables y listos para entornos regulados.",
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Sonia Gil",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/sonia-gil-ai",
          label: "LinkedIn de Sonia Gil",
          icon: "linkedin",
        },
        {
          href: "https://x.com/soniagil_ai",
          label: "X de Sonia Gil",
          icon: "x",
        },
      ],
    },
    {
      name: "Pablo Crespo",
      role: "Mobile Architect en Vértice",
      description:
        "Optimiza apps multiplataforma con foco en rendimiento, testing y mantenibilidad.",
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Pablo Crespo",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/pablo-crespo-mobile",
          label: "LinkedIn de Pablo Crespo",
          icon: "linkedin",
        },
        {
          href: "https://x.com/pablocrespo_dev",
          label: "X de Pablo Crespo",
          icon: "x",
        },
      ],
    },
    {
      name: "Ana Beltrán",
      role: "Data Scientist en Atlas Labs",
      description:
        "Aplica analítica avanzada para resolver decisiones complejas en tiempo real.",
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Ana Beltrán",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/ana-beltran-data",
          label: "LinkedIn de Ana Beltrán",
          icon: "linkedin",
        },
        {
          href: "https://x.com/anabeltran_ds",
          label: "X de Ana Beltrán",
          icon: "x",
        },
      ],
    },
    {
      name: "Javier Ortega",
      role: "Cybersecurity Specialist",
      description:
        "Protege aplicaciones modernas mediante threat modeling y hardening continuo.",
      image: {
        src: placeholderSpeakerImage,
        alt: "Retrato de Javier Ortega",
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/in/javier-ortega-security",
          label: "LinkedIn de Javier Ortega",
          icon: "linkedin",
        },
        {
          href: "https://x.com/jortega_sec",
          label: "X de Javier Ortega",
          icon: "x",
        },
      ],
    },
  ],
};
