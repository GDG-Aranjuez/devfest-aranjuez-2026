export interface FooterLink {
  href: string;
  label: string;
  /** Override label on mobile footer list only */
  mobileLabel?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
