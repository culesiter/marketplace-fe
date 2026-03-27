import { MenuItem } from "@/types/menu";

// Central database of routes for the application
// Paths for navigation, permissions, and layout configuration
export const APP_ROUTES: MenuItem[] = [
  // --- PUBLIC ROUTES ---
  {
    id: "home",
    title: "Trang chủ",
    path: "/",
    icon: "home", // or LucideIcon/ImgPath
    type: "link",
  },
  {
    id: "products",
    title: "Sản phẩm",
    path: "/products",
    icon: "box",
    type: "link",
  },
  {
    id: "categories",
    title: "Danh mục",
    path: "/categories",
    icon: "layers",
    type: "collapse",
    children: [
      { id: "clothing", title: "Quần áo", path: "/categories/clothing" },
      { id: "electronics", title: "Điện tử", path: "/categories/electronics" },
      { id: "furniture", title: "Nội thất", path: "/categories/furniture" },
    ],
  },

  // --- BUYER / USER AUTHENTICATED ---
  {
    id: "buyer-section",
    title: "Tài khoản của tôi",
    type: "group",
    roles: ["buyer"],
    children: [
      {
        id: "profile",
        title: "Hồ sơ cá nhân",
        path: "/account/profile",
        icon: "user",
      },
      {
        id: "orders",
        title: "Đơn hàng",
        path: "/account/orders",
        icon: "shopping-bag",
      },
      {
        id: "wishlist",
        title: "Yêu thích",
        path: "/account/wishlist",
        icon: "heart",
      },
    ],
  },

  // --- SELLER SECTION ---
  {
    id: "seller-dashboard",
    title: "Kênh Người Bán",
    type: "group",
    roles: ["seller"],
    children: [
      {
        id: "seller-overview",
        title: "Tổng quan",
        path: "/seller/dashboard",
        icon: "layout-dashboard",
      },
      {
        id: "seller-products",
        title: "Quản lý sản phẩm",
        path: "/seller/products",
        icon: "package",
       children: [
          { id: "product-list", title: "Tất cả sản phẩm", path: "/seller/products/list" },
          { id: "product-add", title: "Thêm sản phẩm", path: "/seller/products/add" },
       ]
      },
      {
        id: "seller-orders",
        title: "Quản lý đơn hàng",
        path: "/seller/orders",
        icon: "clipboard-list",
      },
      {
        id: "seller-finance",
        title: "Tài chính",
        path: "/seller/finance",
        icon: "wallet",
      },
    ],
  },

  // --- ADMIN PANEL ---
  {
    id: "admin-panel",
    title: "Quản trị hệ thống",
    type: "group",
    roles: ["admin"],
    children: [
      {
        id: "admin-analytics",
        title: "Thống kê",
        path: "/admin/analytics",
        icon: "bar-chart-3",
      },
      {
        id: "admin-users",
        title: "Quản lý thành viên",
        path: "/admin/users",
        icon: "users-2",
      },
      {
        id: "admin-settings",
        title: "Cài đặt hệ thống",
        path: "/admin/settings",
        icon: "settings",
      },
    ],
  },
];

// Helper to get active route by pathname
export function getRouteByPath(pathname: string, routes: MenuItem[] = APP_ROUTES): MenuItem | undefined {
  for (const route of routes) {
    if (route.path === pathname) return route;
    if (route.children) {
      const child = getRouteByPath(pathname, route.children);
      if (child) return child;
    }
  }
  return undefined;
}
