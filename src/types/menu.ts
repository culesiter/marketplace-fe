import { ReactNode } from "react";
import { User } from ".";

export type Role = User["role"];

export type MenuType = "link" | "group" | "divider" | "collapse";

export interface MenuItem {
  id: string;
  title: string;
  path?: string;
  icon?: string | ReactNode;
  roles?: Role[];
  children?: MenuItem[];
  activePattern?: string | RegExp;
  hidden?: boolean;
  type?: MenuType;
  badge?: string | number;
  metadata?: Record<string, any>;
}

export interface BreadcrumbItem {
  title: string;
  path: string;
}
