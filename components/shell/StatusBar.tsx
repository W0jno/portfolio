"use client";

import { useLocale } from "@/components/LocaleProvider";

export function StatusBar() {
  const { t } = useLocale();

  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-status/40 bg-status-bar px-3 py-1 text-xs uppercase tracking-wide text-status sm:text-sm">
      <div className="flex flex-wrap gap-x-4">
        <span>{t.shell.statusBar.uptime}</span>
        <span>{t.shell.statusBar.user}</span>
        <span>{t.shell.statusBar.net}</span>
      </div>
      <span>{t.shell.statusBar.version}</span>
    </footer>
  );
}
