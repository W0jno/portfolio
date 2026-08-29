"use client";

import { useLocale } from "@/components/LocaleProvider";
import type { Locale } from "@/app/locale";

export function LanguageSwitch() {
  const { locale, setLocale, t } = useLocale();

  function optionClass(code: Locale) {
    return locale === code
      ? "bg-neon text-bg px-1"
      : "text-muted hover:text-neon";
  }

  return (
    <p className="text-xs uppercase tracking-wide sm:text-sm">
      <span className="text-muted">{t.shell.system.langKey}: </span>
      <button
        type="button"
        className={optionClass("pl")}
        onClick={() => setLocale("pl")}
        aria-pressed={locale === "pl"}
      >
        PL
      </button>
      <span className="text-muted"> / </span>
      <button
        type="button"
        className={optionClass("en")}
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </p>
  );
}
