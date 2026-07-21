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
  return active ? `${base} text-link` : `${base} text-heading hover:text-link`;
}
