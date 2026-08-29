export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  details?: string[];
}

export interface ProjectsCopy {
  label: string;
  openRepo: string;
  treeLabel: string;
  backLabel: string;
  tagsLabel: string;
  items: Project[];
}
