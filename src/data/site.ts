export const site = {
  name: "GDG Aranjuez",
  title: "FresON Fest 2026",
  titleSuffix: "FresON Fest 2026",
  description:
    "FresON Fest 2026 — evento de GDG Aranjuez. 24 de octubre de 2026 en Aranjuez.",
  locale: "es_ES",
  language: "es",
  twitter: "@gdgaranjuez",
  ogImage: "/og.jpg" as string | undefined,
  themeColor: "#f37d16",
  event: {
    name: "FresON Fest 2026",
    startDate: "2026-10-24",
    endDate: "2026-10-24",
    /** Local start used by the hero countdown. */
    startDateTime: "2026-10-24T09:00:00+02:00",
    location: "Aranjuez, España",
  },
} as const;
