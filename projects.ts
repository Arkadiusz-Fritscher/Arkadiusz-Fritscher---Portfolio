export interface Project {
  id: number;
  pos: number;
  title: string;
  date: string;
  description: string;
  stack: string[];
  services: string[];
  links: Links;
  thumbnail: string;
  images: string[];
}

export interface Links {
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: 1,
    pos: 2,
    title: "Automatisierte Bildgruppierung anhand von Metadaten",
    date: "April 2023",
    description: `
    Ein Energieversorgungsunternehmen betreibt kilometerlange Wasser- und Fernwärmeleitungen, die Tausende von Absperrungen, Armaturen und Schächten beinhalten. Jährlich werden diese Einrichtungen von Mitarbeitern kontrolliert und gewartet, wobei über 7.000 Fotos erstellt werden.
    Bisher wurden alle Bilder manuell sortiert. \nIch habe eine leicht zu bedienende Anwendung erstellt, die automatisiert die Metadaten von Bildern ausliest und diese mit Positionen aus einer Datenbank vergleicht. Bei einer Übereinstimmung wird das Bild automatisch mit weiteren Bildern derselben Position gruppiert, umbenannt und komprimiert.
    `,
    stack: ["Vue 3", "Javascript", "Quasar", "Html", "Css"],
    services: ["Konzeption", "Design", "Entwicklung"],
    links: {
      live: "",
      github: "",
    },
    thumbnail: "bilder-gps-sortieren-screens@1x.jpg",
    images: ["bilder-gps-sortieren@1x.jpg"],
  },
  {
    id: 2,
    pos: 1,
    title: "Mein Portfolio 2023",
    date: "February 2022",
    description: `
    Das Hauptziel dieses Projekts bestand darin, eine ansprechende und zugleich simple Webseite zu entwickeln, auf der ich meine Projekte und mich selbst präsentieren kann. Darüber hinaus war es wichtig, eine unkomplizierte Kontaktmöglichkeit zu schaffen.
    `,
    stack: ["Vue", "Javascript", "Html", "Css"],
    services: ["Developing", "Design", "Concept"],
    links: {
      live: "",
      github: "",
    },
    thumbnail: "img-2.jpg",
    images: ["img-1.jpg"],
  },
  {
    id: 3,
    pos: 3,
    title: "CSS clamp generator",
    date: "November 2022",
    description:
      "As a self-taught frontend developer, I am passionate about creating engaging user experiences that drive results. My goal is to work at a company where I can bring innovative front-end designs and development solutions to life. Let's work together to achieve your goals",
    stack: ["Vue"],
    services: ["Developing"],
    links: {
      live: "",
      github: "",
    },
    thumbnail: "clamp-1@1x.jpg",
    images: ["clamp-3@1x.jpg", "clamp-4@1x.jpg"],
  },
];
