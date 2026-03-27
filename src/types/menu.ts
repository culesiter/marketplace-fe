import { ReactNode } from "react";
import { UserRole } from "./user";

export type MenuType = "link" | "group" | "divider" | "collapse";

export interface MenuItem {
  id: string;
  title: string;
  path?: string;
  icon?: string | ReactNode;
  roles?: UserRole[];
  children?: MenuItem[];
  activePattern?: string | RegExp;
  hidden?: boolean;
  type?: MenuType;
  badge?: string | number;
  badgeTheme?: "primary" | "secondary";
  groups?: MenuGroup[]; // Support for multiple blocks/columns in menu
  metadata?: Record<string, any>;
}

export interface MenuGroup {
    title: string;
    items: MenuItem[];
}

export interface BreadcrumbItem {
  title: string;
  path: string;
}
