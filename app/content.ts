import type { AboutCopy } from "@/components/about/copy";
import type { ProjectsCopy } from "@/components/projects/copy";
import type { ShellCopy } from "@/components/shell/copy";
import type { SkillsCopy } from "@/components/skills/copy";

export interface Dictionary {
  shell: ShellCopy;
  about: AboutCopy;
  projects: ProjectsCopy;
  skills: SkillsCopy;
}
