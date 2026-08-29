import type { Locale } from "@/app/locale";
import type { ProjectsCopy } from "@/components/projects/copy";

export function projectPath(id: string): string {
  return `/projects/${id}`;
}

export const projectsCopy: Record<Locale, ProjectsCopy> = {
  pl: {
    label: "PROJECTS",
    openRepo: "OTWORZ_REPO",
    treeLabel: "PROJECTS/",
    backLabel: "../ WROC DO LISTY",
    tagsLabel: "STACK",
    items: [
      {
        id: "arcade-console",
        title: "ARCADE_CONSOLE",
        description:
          "Konsola arcade do gier retro, zbudowana w kole naukowym Apacz500.",
        details: [
          "Współprojektowanie i budowa konsoli arcade w ramach projektu koła naukowego.",
          "Urządzenie oparte o Raspberry Pi z systemem RetroPie.",
          "Obsługa dwóch bezprzewodowych kontrolerów łączonych przez Bluetooth.",
          "Kontrolery na mikrokontrolerach ESP32, w pełni zintegrowane z systemem gry.",
        ],
        tags: ["ESP32", "C", "Druk 3D", "autoCAD"],
      },
      {
        id: "vuln-scanner",
        title: "VULN_SCANNER",
        description:
          "Aplikacja webowa do skanowania stron pod kątem podatności bezpieczeństwa.",
        details: [
          "Wykrywanie typowych podatności: SQL Injection, XSS, analiza nagłówków, path fuzzing, otwarte porty.",
          "Po skanowaniu aplikacja generuje czytelny raport z opisem znalezionych problemów.",
          "Raport zawiera rekomendacje naprawcze dla każdego wykrytego zagrożenia.",
        ],
        tags: ["Python", "FastAPI", "PostgreSQL", "TypeScript", "React", "Docker"],
        href: "https://github.com/w0jno/OWASP_SCANNER",
      },
      {
        id: "desktop-capybaras",
        title: "DESKTOP_CAPYBARAS",
        description:
          "Animowane kapibary chodzące po pulpicie. Projekt w Unity i Blenderze.",
        details: [
          "Modele i animacje kapibar przygotowane w Blenderze.",
          "Zwierzęta reagują na otwarte okna i foldery na pulpicie.",
          "Kapibarę można złapać kursorem i przenieść w dowolne miejsce ekranu.",
        ],
        tags: ["C#", "Unity", "Blender"],
        href: "https://github.com/w0jno/Desktop-Capybaras",
      },
      {
        id: "cheese-scraper",
        title: "CHEESE_SCRAPER",
        description:
          "Skrypt w JavaScript zbierający dane o serach ze strony cheese.com.",
        details: [
          "Automatyczna ekstrakcja danych z cheese.com.",
          "Playwright odpowiada za nawigację po stronie i obróbkę treści.",
          "Zebrane dane (nazwa, pochodzenie, rodzaj mleka, tekstura, opis) lądują w bazie SQLite.",
        ],
        tags: ["JavaScript", "Playwright", "SQLite"],
        href: "https://github.com/w0jno/cheese-scraper",
      },
    ],
  },
  en: {
    label: "PROJECTS",
    openRepo: "OPEN_REPO",
    treeLabel: "PROJECTS/",
    backLabel: "../ BACK TO LIST",
    tagsLabel: "STACK",
    items: [
      {
        id: "arcade-console",
        title: "ARCADE_CONSOLE",
        description:
          "Arcade console for retro gaming, built in the Apacz500 scientific club.",
        details: [
          "Co-designed and built an arcade console as a student research group project.",
          "Device based on a Raspberry Pi running RetroPie.",
          "Supports two wireless controllers connected over Bluetooth.",
          "Controllers powered by ESP32 microcontrollers, fully integrated with the gaming system.",
        ],
        tags: ["ESP32", "C", "3D print", "autoCAD"],
      },
      {
        id: "vuln-scanner",
        title: "VULN_SCANNER",
        description:
          "Web application that scans websites for security vulnerabilities.",
        details: [
          "Detects common issues: SQL Injection, XSS, header analysis, path fuzzing, open ports.",
          "Generates a clear report describing every detected issue.",
          "Each finding comes with a remediation recommendation.",
        ],
        tags: ["Python", "FastAPI", "PostgreSQL", "TypeScript", "React", "Docker"],
        href: "https://github.com/w0jno/OWASP_SCANNER",
      },
      {
        id: "desktop-capybaras",
        title: "DESKTOP_CAPYBARAS",
        description:
          "Animated capybaras living on your desktop. Unity and Blender project.",
        details: [
          "Capybara models and animations made in Blender.",
          "Animals react to open windows and folders on the desktop.",
          "You can pick a capybara up with the cursor and move it anywhere on screen.",
        ],
        tags: ["C#", "Unity", "Blender"],
        href: "https://github.com/w0jno/Desktop-Capybaras",
      },
      {
        id: "cheese-scraper",
        title: "CHEESE_SCRAPER",
        description:
          "JavaScript script that scrapes cheese data from cheese.com.",
        details: [
          "Automatically extracts data from cheese.com.",
          "Playwright handles site navigation and content manipulation.",
          "Collected data (name, origin, milk type, texture, description) is stored in SQLite.",
        ],
        tags: ["JavaScript", "Playwright", "SQLite"],
        href: "https://github.com/w0jno/cheese-scraper",
      },
    ],
  },
};
