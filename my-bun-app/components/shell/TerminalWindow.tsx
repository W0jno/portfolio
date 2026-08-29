"use client";

import { Outlet, useLocation } from "react-router-dom";
import { sectionFromPath } from "@/app/locale";
import { Sidebar } from "@/components/shell/Sidebar";
import { StatusBar } from "@/components/shell/StatusBar";
import { useLocale } from "@/components/LocaleProvider";

export function TerminalWindow() {
  const { t } = useLocale();
  const { pathname } = useLocation();
  const section = sectionFromPath(pathname);

  return (
    <div className="scanlines relative flex h-full min-h-0 flex-1 flex-col bg-bg">
      <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col p-3 md:p-6">
        <div className="flex min-h-0 flex-1 flex-col border border-border bg-bg-panel window-glow">
          <header className="flex items-center justify-between border-b border-border bg-bg-raised px-2 py-1.5">
            <p className="truncate text-xs uppercase tracking-wide text-muted sm:text-sm">
              {t.shell.filePath[section]}
            </p>
            <div className="flex gap-1" aria-hidden="true">
              <span className="h-3 w-3 border border-muted" />
              <span className="h-3 w-3 border border-muted" />
              <span className="h-3 w-3 border border-gold" />
            </div>
          </header>

          <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-y-auto p-3 md:flex-row md:gap-0 md:overflow-hidden md:p-0">
            <div className="shrink-0 md:p-4">
              <Sidebar />
            </div>
            <div className="min-h-1/2 min-w-0 flex-1 overflow-x-hidden border-2 border-double border-border p-4 md:m-4 md:ml-0 md:min-h-0 md:overflow-y-auto">
              <Outlet />
            </div>
          </div>

          <StatusBar />
        </div>
      </div>
    </div>
  );
}
