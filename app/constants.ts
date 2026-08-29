import type { Locale, Section } from "@/app/locale";
import type { Dictionary } from "@/app/content";
import { aboutCopy } from "@/components/about/constants";
import { projectsCopy } from "@/components/projects/constants";
import { shellCopy } from "@/components/shell/constants";
import { skillsCopy } from "@/components/skills/constants";

export const STORAGE_KEY = "portfolio-locale";

export const sections: Section[] = ["about", "projects", "skills"];

export const sectionPaths: Record<Section, string> = {
  about: "/about",
  projects: "/projects",
  skills: "/skills",
};

export const content: Record<Locale, Dictionary> = {
  pl: {
    shell: shellCopy.pl,
    about: aboutCopy.pl,
    projects: projectsCopy.pl,
    skills: skillsCopy.pl,
  },
  en: {
    shell: shellCopy.en,
    about: aboutCopy.en,
    projects: projectsCopy.en,
    skills: skillsCopy.en,
  },
};
