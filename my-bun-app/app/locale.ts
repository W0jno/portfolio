export type Locale = "pl" | "en";
export type Section = "about" | "projects" | "tech";

export function sectionFromPath(pathname: string): Section {
  const value = pathname.replace(/\/$/, "") || "/";
  if (value === "/projects") {
    return "projects";
  }
  if (value === "/tech") {
    return "tech";
  }
  return "about";
}
