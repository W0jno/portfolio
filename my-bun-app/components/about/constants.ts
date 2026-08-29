import type { Locale } from "@/app/locale";
import type { AboutCopy } from "@/components/about/copy";

export const aboutCopy: Record<Locale, AboutCopy> = {
  pl: {
    nameKey: "NAME",
    name: "Filip Wojno",
    locKey: "LOC",
    loc: "Szczecin, Poland",
    roleKey: "ROLE",
    role: "DEVOPS / SOFTWARE ENGINEER",
    bioLabel: "ABOUT ME",
    bio: "Pasjonat automatyzacji, homelabowania, programowania oraz wspinaczki. Zwolennik open-source, self-hostingu i dobrych gier.",
    educationLabel: "EDUCATION",
    education: [
      {
        id: "edu-1",
        school: "",
        period: "2018 — 2022",
        description: "Placeholder dyplomu. Wstaw wydzial, tytul, tez.",
      },
      {
        id: "edu-2",
        school: "UCZELNIA / KIERUNEK",
        period: "2018 — 2022",
        description: "Placeholder dyplomu. Wstaw wydzial, tytul, tez.",
      }
    ],
    workLabel: "WORK EXPERIENCE",
    workRoleLabel: "STANOWISKO",
    workPeriodLabel: "OKRES",
    workDescriptionLabel: "OPIS",
    workSkillsLabel: "SKILLE",
    work: [
      {
        id: "job-1",
        role: "DEVOPS ENGINEER",
        period: "2023 — PRESENT",
        description: "Placeholder: zakres obowiazkow, stack, co dowiozles.",
        skills: ["Linux", "Docker", "Terraform"],
      },
      {
        id: "job-2",
        role: "JUNIOR SYSADMIN",
        period: "2021 — 2023",
        description: "Placeholder: poprzednia rola.",
        skills: ["Nginx", "Ansible"],
      },
    ],
    eof: "EOF_ REACHED. WAITING FOR INPUT...",
  },
  en: {
    nameKey: "NAME",
    name: "Filip Wojno",
    locKey: "LOC",
    loc: "Szczecin, Poland",
    roleKey: "ROLE",
    role: "DEVOPS / SOFTWARE ENGINEER",
    bioLabel: "ABOUT ME",
    bio: "Placeholder: short bio. Who you are, what you do, why DevOps and networks.",
    educationLabel: "EDUCATION",
    education: [
      {
        id: "edu-1",
        school: "UNIVERSITY / PROGRAM",
        period: "2018 — 2022",
        description: "Diploma placeholder. Faculty, degree, thesis.",
      },
    ],
    workLabel: "WORK EXPERIENCE",
    workRoleLabel: "ROLE",
    workPeriodLabel: "PERIOD",
    workDescriptionLabel: "DESCRIPTION",
    workSkillsLabel: "SKILLS",
    work: [
      {
        id: "job-1",
        role: "DEVOPS ENGINEER",
        period: "2023 — PRESENT",
        description: "Placeholder: responsibilities, stack, what you shipped.",
        skills: ["Linux", "Docker", "Terraform"],
      },
      {
        id: "job-2",
        role: "JUNIOR SYSADMIN",
        period: "2021 — 2023",
        description: "Placeholder: previous role.",
        skills: ["Nginx", "Ansible"],
      },
    ],
    eof: "EOF_ REACHED. WAITING FOR INPUT...",
  },
};
