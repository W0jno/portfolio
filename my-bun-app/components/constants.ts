import type { ComponentType } from "react";
import { sectionPaths, sections } from "@/app/constants";
import type { Section } from "@/app/locale";
import { AboutMe } from "@/components/about/AboutMe";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";

export const views: Record<Section, ComponentType> = {
  about: AboutMe,
  projects: Projects,
  skills: Skills,
};

export const viewRoutes = [
  ...sections.map((section) => ({
    path: sectionPaths[section],
    View: views[section],
  })),
  { path: `${sectionPaths.projects}/:projectId`, View: ProjectDetail },
];
