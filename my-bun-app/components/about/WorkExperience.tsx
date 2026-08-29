import type { WorkExperience as Job } from "@/components/about/copy";
import { LabeledField } from "@/components/about/LabeledField";

interface WorkExperienceCardProps {
  job: Job;
  roleLabel: string;
  periodLabel: string;
  descriptionLabel: string;
  skillsLabel: string;
}

export function WorkExperienceCard({
  job,
  roleLabel,
  periodLabel,
  descriptionLabel,
  skillsLabel,
}: WorkExperienceCardProps) {
  return (
    <article className="flex flex-col gap-2 border border-border bg-bg-raised p-3 sm:p-4">
      <LabeledField label={roleLabel} value={job.role} />
      <LabeledField label={periodLabel} value={job.period} />
      <LabeledField label={descriptionLabel} />
      <p className="text-xs leading-relaxed tracking-normal text-muted normal-case sm:text-sm">
        {job.description}
      </p>
      <LabeledField label={skillsLabel} />
      <ul className="flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <li
            key={skill}
            className="border border-neon/40 px-2 py-1 text-xs uppercase text-neon sm:text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
