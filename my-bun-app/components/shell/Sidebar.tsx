"use client";

import { NavLink } from "react-router-dom";
import { LanguageSwitch } from "@/components/shell/LanguageSwitch";
import { useLocale } from "@/components/LocaleProvider";
import { sectionPaths, sections } from "@/app/constants";

export function Sidebar() {
  const { t } = useLocale();
  const shell = t.shell;

  return (
    <aside className="flex w-full shrink-0 flex-col gap-5 border-border md:w-56 md:border-r">
      <section>
        <h2 className="mb-2 text-xs sm:text-sm tracking-widest text-gold">
          [ {shell.navLabel} ]
        </h2>
        <nav className="flex flex-col gap-1">
          {sections.map((section) => (
            <NavLink
              key={section}
              to={sectionPaths[section]}
              className={({ isActive }) =>
                `border px-2 py-1.5 text-left text-xs uppercase tracking-wide ${
                  isActive
                    ? "border-neon bg-neon text-bg"
                    : "border-border text-text hover:border-neon hover:text-neon"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? "text-bg" : "text-neon"}>&gt; </span>
                  {shell.nav[section]}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </section>

      <section>
        <h2 className="mb-2 text-xs sm:text-sm tracking-widest text-gold">
          [ {shell.systemLabel} ]
        </h2>
        <dl className="space-y-1 text-xs sm:text-sm uppercase">
          <div>
            <dt className="inline text-muted">{shell.system.userKey}: </dt>
            <dd className="inline">{shell.system.user}</dd>
          </div>
          <div>
            <dt className="inline text-muted">{shell.system.roleKey}: </dt>
            <dd className="inline">{shell.system.role}</dd>
          </div>
          <div>
            <dt className="inline text-muted">{shell.system.statusKey}: </dt>
            <dd className="inline text-neon">{shell.system.status}</dd>
          </div>
          <div>
            <dt className="inline text-muted">{shell.system.uptimeKey}: </dt>
            <dd className="inline">{shell.system.uptime}</dd>
          </div>
          <LanguageSwitch />
        </dl>
      </section>

      <section>
        <h2 className="mb-2 text-xs sm:text-sm tracking-widest text-gold">
          [ {shell.linksLabel} ]
        </h2>
        <ul className="space-y-1 text-xs sm:text-sm uppercase">
          <li>
            <a
              className="text-text hover:text-neon"
              href={shell.links.githubHref}
              target="_blank"
              rel="noreferrer"
            >
              [G] {shell.links.github}
            </a>
          </li>
          <li>
            <a
              className="text-text hover:text-neon"
              href={shell.links.linkedinHref}
              target="_blank"
              rel="noreferrer"
            >
              [L] {shell.links.linkedin}
            </a>
          </li>
          <li>
            <a
              className="text-text hover:text-neon"
              href={shell.links.resumeHref}
              target="_blank"
              rel="noreferrer"
            >
              [R] {shell.links.resume}
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
}
