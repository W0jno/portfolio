export type Locale = "pl" | "en";
export type Section = "about" | "projects" | "skills";

export function sectionFromPath(pathname: string): Section {
  const value = pathname.replace(/\/$/, "") || "/";
  if (value === "/projects" || value.startsWith("/projects/")) {
    return "projects";
  }
  if (value === "/skills") {
    return "skills";
  }
  return "about";
}
