import { Link } from "react-router-dom";
import type { Project } from "@/components/projects/copy";
import { projectPath } from "@/components/projects/constants";

interface ProjectCardProps {
  project: Project;
  openLabel: string;
}

export function ProjectCard({ project, openLabel }: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-2 border border-border bg-bg-raised p-3">
      <h3 className="text-sm tracking-wide text-gold">
        <Link to={projectPath(project.id)} className="hover:text-neon">
          {project.title}/
        </Link>
      </h3>
      <p className="text-xs leading-relaxed tracking-normal text-muted normal-case">
        {project.description}
      </p>
      <ul className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="border border-neon/40 px-2 py-1 text-xs uppercase text-neon sm:text-sm"
          >
            {tag}
          </li>
        ))}
      </ul>
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto text-xs uppercase text-text hover:text-neon sm:text-sm"
        >
          &gt; {openLabel}
        </a>
      ) : null}
    </article>
  );
}
