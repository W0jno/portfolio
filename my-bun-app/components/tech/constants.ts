import type { Locale } from "@/app/locale";
import type { TechCopy } from "@/components/tech/copy";

export const techItems = [
  "Linux",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Ansible",
  "AWS",
  "Nginx",
  "WireGuard",
  "BGP",
  "Prometheus",
  "Grafana",
  "GitLab CI",
] as const;

export const techCopy: Record<Locale, TechCopy> = {
  pl: {
    label: "SKILLS.DAT",
    hint: "HOVER = PAUSE SCROLL",
  },
  en: {
    label: "SKILLS.DAT",
    hint: "HOVER = PAUSE SCROLL",
  },
};
