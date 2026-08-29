"use client";

import { SkillsCarousel } from "@/components/skills/SkillsCarousel";
import { useLocale } from "@/components/LocaleProvider";

export function Skills() {
  const { t } = useLocale();
  const { label, hint, groups } = t.skills;

  return (
    <section className="flex min-h-full min-w-0 flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h2 className="text-xs tracking-widest text-gold">[ {label} ]</h2>
        <p className="text-xs uppercase text-muted sm:text-sm">{hint}</p>
      </div>

      <SkillsCarousel />

      <div className="flex flex-col gap-4">
        {groups.map((group) => (
          <section key={group.id}>
            <h3 className="mb-2 text-xs tracking-widest text-gold sm:text-sm">
              [ {group.label} ]
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs uppercase sm:text-sm">
              {group.items.map((item) => (
                <li key={item} className="border border-border px-2 py-1">
                  <span className="text-neon">&gt; </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
