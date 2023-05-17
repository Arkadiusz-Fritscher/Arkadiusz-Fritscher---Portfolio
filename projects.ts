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
    thumbnail: "bilder-gps-sortieren-screens",
    images: ["bilder-gps-sortieren"],
  },
  {
    id: 2,
    pos: 1,
    title: "Mein Portfolio 2023",
    date: "Mai 2023",
    description: `
    Das Hauptziel dieses Projekts bestand darin, eine ansprechende und zugleich simple Webseite zu entwickeln, auf der ich meine Projekte und mich selbst präsentieren kann. Darüber hinaus war es wichtig, eine unkomplizierte Kontaktmöglichkeit zu schaffen.
    `,
    stack: ["Vue", "Javascript", "Html", "Css"],
    services: ["Konzeption", "Design", "Entwicklung"],
    links: {
      live: "https://fritscher.dev",
      github: "https://github.com/Arkadiusz-Fritscher/Arkadiusz-Fritscher---Portfolio",
    },
    thumbnail: "portfolio-1",
    images: ["portfolio-2", "portfolio-3"],
  },
  {
    id: 3,
    pos: 3,
    title: "CSS clamp generator",
    date: "März 2022",
    description: `
    Ein CSS Clamp Generator ist ein Tool, das basierend auf den Eingabewerten wie Mindestgröße, Maximalgröße, Min. Schriftgröße und Max. Schriftgröße eine Formel für die CSS clamp()-Funktion generiert. Diese Formel ermöglicht es Entwicklern, flexibles und responsives Design zu implementieren, indem sie den optimalen Wertebereich für Elementgrößen und Schriftgrößen festlegt.
    `,
    stack: ["Vue", "Html", "Css"],
    services: ["Konzeption", "Design", "Entwicklung"],
    links: {
      live: "https://clamp-generator.vercel.app/",
      github: "https://github.com/Arkadiusz-Fritscher/clamp-generator-lite",
    },
    thumbnail: "clamp-1",
    images: ["clamp-3", "clamp-4"],
  },
  {
    id: 4,
    pos: 4,
    title: "Pixelperfect Preisgestaltungs Komponente",
    date: "Juli 2022",
    description: `
    Eine Challenge von Frontendmentor.io. Frontendmentor ist eine Plattform für Frontend-Entwickler, die praktische Projekte und Herausforderungen bereitstellt, um Fähigkeiten zu verbessern und Erfahrungen zu sammeln. Mit Designvorlagen und Upload-Möglichkeiten erhalten Entwickler wertvolles Feedback und Bewertungen von der Community.
    `,
    stack: ["Vue", "Html", "Css"],
    services: ["Entwicklung"],
    links: {
      live: "https://www.frontendmentor.io/solutions/solution-for-interactive-pricing-component-with-sass-and-javascript-g8Sb-u7UP",
      github: "https://github.com/Arkadiusz-Fritscher/fm-solution__Interactive-pricing-component",
    },
    thumbnail: "mentor-2",
    images: ["mentor-1"],
  },
];
