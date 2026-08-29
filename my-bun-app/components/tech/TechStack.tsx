"use client";

import { TechCarousel } from "@/components/tech/TechCarousel";
import { useLocale } from "@/components/LocaleProvider";
import { techItems } from "@/components/tech/constants";

export function TechStack() {
  const { t } = useLocale();

  return (
    <section className="flex min-h-full min-w-0 flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h2 className="text-xs tracking-widest text-gold">[ {t.tech.label} ]</h2>
        <p className="text-xs uppercase text-muted sm:text-sm">{t.tech.hint}</p>
      </div>
      <TechCarousel />
      <ul className="grid grid-cols-2 gap-2 text-xs uppercase sm:text-sm">
        {techItems.map((item) => (
          <li key={item} className="border border-border px-2 py-1">
            <span className="text-neon">&gt; </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
