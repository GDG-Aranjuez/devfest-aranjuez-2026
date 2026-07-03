export interface StructuredData {
  [key: string]: unknown;
}

export interface SeoProps {
  title?: string;
  description?: string;
  /** Absolute or root-relative path to override the default social image */
  image?: string;
  noindex?: boolean;
  ogType?: "website" | "article" | "event";
  structuredData?: StructuredData | StructuredData[];
}
