import type { Locale } from "@/app/locale";
import type { SkillGroup, SkillsCopy } from "@/components/skills/copy";

const languages = ["Python", "TypeScript", "JavaScript", "C"];
const backend = ["Flask", "FastAPI", "Node.js", "Swagger"];
const frontend = ["React", "Next.js", "TailwindCSS"];
const devops = [
  "Linux",
  "Docker",
  "Jenkins",
  "Ansible",
  "Terraform",
  "Prometheus",
  "Grafana",
  "GitHub Actions",
  "Proxmox",
];
const databases = [ "MongoDB", "Redis", "ClickHouse", "SQLite"];
const tools = ["Git", "Gerrit", "GitLab", "Playwright", "Selenium", "Puppeteer", "Postman", "Jira"];

function groups(labels: Record<string, string>): SkillGroup[] {
  return [
    { id: "languages", label: labels.languages, items: languages },
    { id: "backend", label: labels.backend, items: backend },
    { id: "frontend", label: labels.frontend, items: frontend },
    { id: "devops", label: labels.devops, items: devops },
    { id: "databases", label: labels.databases, items: databases },
    { id: "tools", label: labels.tools, items: tools },
  ];
}

export const skillItems = [
  ...languages,
  ...backend,
  ...frontend,
  ...devops,
  ...databases,
  ...tools,
];

export const skillsCopy: Record<Locale, SkillsCopy> = {
  pl: {
    label: "SKILLS.DAT",
    hint: "HOVER = PAUSE SCROLL",
    groups: groups({
      languages: "JĘZYKI PROGRAMOWANIA",
      backend: "BACKEND",
      frontend: "FRONTEND",
      devops: "DEVOPS / INFRA",
      databases: "BAZY DANYCH",
      tools: "NARZĘDZIA",
    }),
  },
  en: {
    label: "SKILLS.DAT",
    hint: "HOVER = PAUSE SCROLL",
    groups: groups({
      languages: "LANGUAGES",
      backend: "BACKEND",
      frontend: "FRONTEND",
      devops: "DEVOPS / INFRA",
      databases: "DATABASES",
      tools: "TOOLS",
    }),
  },
};
