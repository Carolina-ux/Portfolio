export type Skill = {
  name: string;
  subtitle?: string;
  imageSrc: string;
  url?: string;
};

export const skills: Skill[] = [
  {
    name: "Famer",
    subtitle: "Web Desing",
    imageSrc: "./assets/img/skills/framer.svg",
  },
  {
    name: "Figma",
    subtitle: "Collaborative Desing",
    imageSrc: "./assets/img/skills/figma.svg",
  },
  {
    name: "Notion",
    subtitle: "Proyect Management",
    imageSrc: "./assets/img/skills/notion.svg",
  },
  {
    name: "Adobe Suite",
    subtitle: "Desing tools",
    imageSrc: "./assets/img/skills/adobe.png",
  },
  {
    name: "ScimagoGraphica",
    subtitle: "Data Visualization",
    imageSrc: "./assets/img/skills/ScimagoGraphica.png",
  },
  {
    name: "Voiceflow",
    subtitle: "Voice Prototyping",
    imageSrc: "./assets/img/skills/Voiceflow.png",
  },
];
