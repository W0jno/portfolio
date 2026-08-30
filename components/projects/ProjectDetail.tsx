"use client";

import { Link, Navigate, useParams } from "react-router-dom";
import { sectionPaths } from "@/app/constants";
import { useLocale } from "@/components/LocaleProvider";

export function ProjectDetail() {
  const { t } = useLocale();
  const { projectId } = useParams();
  const project = t.projects.items.find((item) => item.id === projectId);

  if (!project) {
    return <Navigate to={sectionPaths.projects} replace />;
  }

  return (
    <article className="flex min-h-full flex-col gap-4">
      <Link
        to={sectionPaths.projects}
        className="text-xs uppercase tracking-wide text-muted hover:text-neon sm:text-sm"
      >
        {t.projects.backLabel}
      </Link>

      <h2 className="text-sm tracking-widest text-gold sm:text-base">
        [ {project.title} ]
      </h2>

      <p className="text-xs leading-relaxed text-muted sm:text-sm">
        {project.description}
      </p>

      {project.details?.length ? (
        <ul className="space-y-1 text-xs leading-relaxed text-muted sm:text-sm">
          {project.details.map((detail) => (
            <li key={detail}>
              <span className="text-neon">&gt; </span>
              {detail}
            </li>
          ))}
        </ul>
      ) : null}

      <div>
        <h3 className="mb-2 text-xs uppercase tracking-wide text-gold sm:text-sm">
          {t.projects.tagsLabel}:
        </h3>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-neon/40 px-2 py-1 text-xs uppercase text-neon sm:text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {project.githubUrl ? (
        <div className="mt-auto flex flex-col gap-1">
          <h3 className="text-xs uppercase tracking-wide text-gold sm:text-sm">
            {t.projects.githubLabel}:
          </h3>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="break-all text-xs text-muted hover:text-neon sm:text-sm"
          >
            {project.githubUrl}
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase text-text hover:text-neon sm:text-sm"
          >
            &gt; {t.projects.openRepo}
          </a>
        </div>
      ) : null}
    </article>
  );
}
