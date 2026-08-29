import type { Section } from "@/app/locale";

export interface SystemInfo {
  userKey: string;
  user: string;
  roleKey: string;
  role: string;
  statusKey: string;
  status: string;
  uptimeKey: string;
  uptime: string;
  langKey: string;
}

export interface QuickLinks {
  github: string;
  linkedin: string;
  resume: string;
  githubHref: string;
  linkedinHref: string;
  resumeHref: string;
}

export interface StatusBarCopy {
  uptime: string;
  user: string;
  net: string;
  version: string;
}

export interface ShellCopy {
  metaTitle: string;
  windowUser: string;
  filePath: Record<Section, string>;
  nav: Record<Section, string>;
  navLabel: string;
  systemLabel: string;
  system: SystemInfo;
  linksLabel: string;
  links: QuickLinks;
  statusBar: StatusBarCopy;
}
