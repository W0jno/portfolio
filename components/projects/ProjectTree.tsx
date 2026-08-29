"use client";

import { NavLink } from "react-router-dom";
import { projectPath } from "@/components/projects/constants";
import { useLocale } from "@/components/LocaleProvider";

export function ProjectTree() {
  const { t } = useLocale();
  const { items } = t.projects;

  return (
    <ul className="mt-1 ml-3 space-y-1 border-l border-border pl-2 text-xs uppercase sm:text-sm">
      {items.map((project, index) => (
        <li key={project.id} className="flex">
          <span className="text-border" aria-hidden="true">
            {index === items.length - 1 ? "└─ " : "├─ "}
          </span>
          <NavLink
            to={projectPath(project.id)}
            className={({ isActive }) =>
              `min-w-0 truncate ${
                isActive ? "text-neon" : "text-text hover:text-neon"
              }`
            }
          >
            {project.title}/
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
