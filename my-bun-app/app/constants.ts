import type { Locale, Section } from "@/app/locale";
import type { Dictionary } from "@/app/content";
import { aboutCopy } from "@/components/about/constants";
import { projectsCopy } from "@/components/projects/constants";
import { shellCopy } from "@/components/shell/constants";
import { techCopy } from "@/components/tech/constants";

export const STORAGE_KEY = "portfolio-locale";

export const sections: Section[] = ["about", "projects", "tech"];

export const sectionPaths: Record<Section, string> = {
  about: "/about",
  projects: "/projects",
  tech: "/tech",
};

export const content: Record<Locale, Dictionary> = {
  pl: {
    shell: shellCopy.pl,
    about: aboutCopy.pl,
    projects: projectsCopy.pl,
    tech: techCopy.pl,
  },
  en: {
    shell: shellCopy.en,
    about: aboutCopy.en,
    projects: projectsCopy.en,
    tech: techCopy.en,
  },
};
