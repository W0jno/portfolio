export interface EducationEntry {
  id: string;
  school: string;
  period: string;
  description: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

export interface AboutCopy {
  nameKey: string;
  name: string;
  locKey: string;
  loc: string;
  roleKey: string;
  role: string;
  bioLabel: string;
  bio: string;
  educationLabel: string;
  education: EducationEntry[];
  workLabel: string;
  workRoleLabel: string;
  workPeriodLabel: string;
  workDescriptionLabel: string;
  workSkillsLabel: string;
  work: WorkExperience[];
  eof: string;
}
