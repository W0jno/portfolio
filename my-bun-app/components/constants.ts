import type { ComponentType } from "react";
import { sectionPaths, sections } from "@/app/constants";
import type { Section } from "@/app/locale";
import { AboutMe } from "@/components/about/AboutMe";
import { Projects } from "@/components/projects/Projects";
import { TechStack } from "@/components/tech/TechStack";

export const views: Record<Section, ComponentType> = {
  about: AboutMe,
  projects: Projects,
  tech: TechStack,
};

export const viewRoutes = sections.map((section) => ({
  path: sectionPaths[section],
  View: views[section],
}));
