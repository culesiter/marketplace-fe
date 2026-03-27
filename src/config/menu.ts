import { APP_ROUTES } from "./routes";
import { MenuItem } from "@/types/menu";

// Simplified menu items for the frontend main navigation bar
export const MAIN_NAV_ITEMS: MenuItem[] = [
  ...APP_ROUTES.filter((r) => !r.roles || r.roles?.length === 0), // Public paths
];

// Profile navigation (buyer dashboard, etc.)
export const ACCOUNT_MENU_ITEMS: MenuItem[] = [
  ...APP_ROUTES.filter((r) => r.roles?.includes("buyer")),
];

// Sidebar navigation for Seller portal
export const SELLER_SIDEBAR_ITEMS: MenuItem[] = [
  ...APP_ROUTES.filter((r) => r.roles?.includes("seller")),
];

// Sidebar navigation for Admin portal
export const ADMIN_SIDEBAR_ITEMS: MenuItem[] = [
  ...APP_ROUTES.filter((r) => r.roles?.includes("admin")),
];
