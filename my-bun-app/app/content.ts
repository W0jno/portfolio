import type { AboutCopy } from "@/components/about/copy";
import type { ProjectsCopy } from "@/components/projects/copy";
import type { ShellCopy } from "@/components/shell/copy";
import type { TechCopy } from "@/components/tech/copy";

export interface Dictionary {
  shell: ShellCopy;
  about: AboutCopy;
  projects: ProjectsCopy;
  tech: TechCopy;
}
