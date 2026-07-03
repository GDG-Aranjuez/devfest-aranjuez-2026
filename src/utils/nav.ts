import { withBase } from "@/utils/path";

export function isActive(pathname: string, href: string): boolean {
  const current = pathname.replace(/\/$/, "") || "/";
  const target = withBase(href).replace(/\/$/, "") || "/";

  if (href === "/") {
    return current === target;
  }

  return current === target || current.startsWith(`${target}/`);
}

export function navLinkClass(active: boolean, base: string): string {
  return active
    ? `${base} text-gdg-text`
    : `${base} text-gdg-text-secondary hover:text-gdg-text`;
}
