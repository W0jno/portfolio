export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export interface ProjectsCopy {
  label: string;
  openRepo: string;
  items: Project[];
}
