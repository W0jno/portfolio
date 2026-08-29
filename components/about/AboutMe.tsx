"use client";

import { WorkExperienceCard } from "@/components/about/WorkExperience";
import { useLocale } from "@/components/LocaleProvider";

export function AboutMe() {
  const { t } = useLocale();
  const { about } = t;

  return (
    <article className="flex min-h-full flex-col gap-6 text-xs uppercase tracking-wide md:text-sm">
      <header className="space-y-1 text-gold">
        <p>
          {about.nameKey}: <span className="text-text">{about.name}</span>
        </p>
        <p>
          {about.locKey}: <span className="text-text">{about.loc}</span>
        </p>
        <p>
          {about.roleKey}: <span className="text-text">{about.role}</span>
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-gold">[ {about.bioLabel} ]</h2>
        <p className="normal-case leading-relaxed tracking-normal text-muted">
          {about.bio}
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-gold">[ {about.workLabel} ]</h2>
        <div className="flex flex-col gap-3">
          {about.work.map((job) => (
            <WorkExperienceCard
              key={job.id}
              job={job}
              roleLabel={about.workRoleLabel}
              companyLabel={about.workCompanyLabel}
              periodLabel={about.workPeriodLabel}
              descriptionLabel={about.workDescriptionLabel}
              skillsLabel={about.workSkillsLabel}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-gold">[ {about.educationLabel} ]</h2>
        <ul className="space-y-3">
          {about.education.map((entry) => (
            <li key={entry.id} className="border border-border px-3 py-2">
              <p className="text-text">{entry.school}</p>
              <p className="text-xs text-neon sm:text-sm">{entry.period}</p>
              <p className="mt-1 normal-case leading-relaxed tracking-normal text-muted">
                {entry.description}
              </p>
              {entry.bullets?.length ? (
                <ul className="mt-2 space-y-1 normal-case tracking-normal text-muted">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span className="text-neon">&gt; </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-auto pt-2 text-xs text-muted sm:text-sm">
        {about.eof}
        <span className="cursor-blink text-neon">_</span>
      </p>
    </article>
  );
}
