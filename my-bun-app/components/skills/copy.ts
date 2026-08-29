export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface SkillsCopy {
  label: string;
  hint: string;
  groups: SkillGroup[];
}
