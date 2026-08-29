"use client";

import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { content } from "@/app/constants";
import { viewRoutes } from "@/components/constants";
import { TerminalWindow } from "@/components/shell/TerminalWindow";
import { useLocale } from "@/components/LocaleProvider";

function KeyboardShortcuts() {
  const { locale } = useLocale();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.target instanceof HTMLInputElement) {
        return;
      }
      const key = event.key.toLowerCase();
      const links = content[locale].shell.links;
      if (key === "g") {
        window.open(links.githubHref, "_blank");
      }
      if (key === "l") {
        window.open(links.linkedinHref, "_blank");
      }
      if (key === "r") {
        window.open(links.resumeHref, "_blank");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [locale]);

  return null;
}

function RouterTree() {
  return (
    <BrowserRouter>
      <KeyboardShortcuts />
      <Routes>
        <Route element={<TerminalWindow />}>
          <Route path="/" element={<Navigate to="/about" replace />} />
          {viewRoutes.map(({ path, View }) => (
            <Route key={path} path={path} element={<View />} />
          ))}
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <div className="h-full flex-1 bg-bg" />;
  }

  return <RouterTree />;
}
