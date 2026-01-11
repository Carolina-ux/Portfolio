export enum LINKS_TYPES {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export type Skill = {
  name: string;
  subtitle?: string;
  imageSrc: string;
  url?: string;
};
