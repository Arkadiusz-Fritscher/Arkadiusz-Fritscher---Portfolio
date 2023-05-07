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
    pos: 1,
    title: "Tortor a ut porta.",
    date: "April 2023",
    description:
      "As a self-taught frontend developer, I am passionate about creating engaging user experiences that drive results. My goal is to work at a company where I can bring innovative front-end designs and development solutions to life. Let's work together to achieve your goals",
    stack: ["Vue", "Javascript", "Html", "Css"],
    services: ["Developing", "Design", "Concept"],
    links: {
      live: "",
      github: "",
    },
    thumbnail: "thumbnail.png",
    images: ["Bildschirm­foto 2023-05-04 um 23.53.35.png"],
  },
  {
    id: 2,
    pos: 2,
    title: "Eu aliquam scelerisque vestibulum tortor.",
    date: "February 2022",
    description:
      "As a self-taught frontend developer, I am passionate about creating engaging user experiences that drive results. My goal is to work at a company where I can bring innovative front-end designs and development solutions to life. Let's work together to achieve your goals",
    stack: ["Vue", "Javascript", "Html", "Css"],
    services: ["Developing", "Design", "Concept"],
    links: {
      live: "",
      github: "",
    },
    thumbnail: "",
    images: ["1.png", "2.png", "3.png"],
  },
  {
    id: 3,
    pos: 3,
    title: "Et parturient class faucibus in.",
    date: "November 2022",
    description:
      "As a self-taught frontend developer, I am passionate about creating engaging user experiences that drive results. My goal is to work at a company where I can bring innovative front-end designs and development solutions to life. Let's work together to achieve your goals",
    stack: ["Vue"],
    services: ["Developing"],
    links: {
      live: "",
      github: "",
    },
    thumbnail: "",
    images: ["1.png", "2.png", "3.png"],
  },
];
