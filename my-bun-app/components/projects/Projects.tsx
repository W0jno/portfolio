"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { useLocale } from "@/components/LocaleProvider";

export function Projects() {
  const { t } = useLocale();

  return (
    <section className="flex min-h-full flex-col gap-4">
      <h2 className="text-xs tracking-widest text-gold">
        [ {t.projects.label} ]
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {t.projects.items.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            openLabel={t.projects.openRepo}
          />
        ))}
      </div>
    </section>
  );
}
