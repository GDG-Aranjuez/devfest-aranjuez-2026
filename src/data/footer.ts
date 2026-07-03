import type { FooterLink, FooterSection } from "@/types/footer";
import type { IconName } from "@/types/icon";

export const footerMeta = {
  tagline: "GDG Aranjuez · Comunidad de desarrolladores Google en Aranjuez.",
  copyright: "© 2026, GDG Aranjuez",
  help: { href: "/ayuda", label: "¿Necesitas ayuda?" },
  conduct: { href: "/codigo-conducta", label: "Código de conducta" },
} as const;

export const socialLinks = [
  {
    href: "https://www.linkedin.com/company/gdg-aranjuez",
    label: "LinkedIn",
    icon: "linkedin" satisfies IconName,
  },
  {
    href: "https://twitter.com/gdgaranjuez",
    label: "X (Twitter)",
    icon: "x" satisfies IconName,
  },
] as const;

const ubicacion: FooterLink = {
  href: "/ubicacion",
  label: "Ubicación",
  mobileLabel: "Cómo llegar",
};

export const footerSections: FooterSection[] = [
  {
    title: "Evento",
    links: [
      { href: "/ponentes", label: "Ponentes" },
      { href: "/agenda", label: "Agenda" },
      ubicacion,
    ],
  },
  {
    title: "Comunidad",
    links: [
      { href: "/nosotros", label: "GDG Aranjuez" },
      { href: "/patrocinadores", label: "Patrocinadores" },
      { href: "/ediciones-anteriores", label: "Ediciones anteriores" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { href: "mailto:gdgaranjuez@gmail.com", label: "Correo electrónico" },
      { href: "/patrocinadores", label: "Hazte patrocinador" },
      { href: "/cfp", label: "Propón una charla" },
    ],
  },
];

export const footerMobileNav: FooterLink[] = [
  { href: "/ponentes", label: "Ponentes" },
  { href: "/agenda", label: "Agenda" },
  { href: "/patrocinadores", label: "Patrocinadores" },
  ubicacion,
  { href: "/ediciones-anteriores", label: "Ediciones anteriores" },
];
