export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number | string;
  tags?: string[];
  dietary?: string[];
  image?: ImageAsset;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "select" | "textarea";
  required: boolean;
  options?: string[];
}

export interface ApiResponse {
  ok: boolean;
  message: string;
  reference?: string;
}
