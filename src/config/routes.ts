import { MenuItem } from "@/types/menu";

// Centralized route database matching the template structure perfectly
export const APP_ROUTES: MenuItem[] = [
  // --- MAIN LINKS ---
  { id: "home", title: "Home", path: "/", type: "link" },
  { id: "how-to-shop", title: "How to shop", path: "/how-to-shop", type: "link" },
  { id: "products", title: "Products", path: "/products", type: "link" },
  { id: "services", title: "Services", path: "/services", type: "link" },
  { id: "online-goods", title: "Online goods", path: "/shop", type: "link" },

  // --- FEATURES DROPDOWN (Multi-column) ---
  {
    id: "features",
    title: "Features",
    type: "collapse",
    groups: [
      {
        title: "Emerald Dragon",
        items: [
          { id: "homepage-v1", title: "Homepage V1", path: "/" },
          { id: "homepage-v2", title: "Homepage V2", path: "/home-v2" },
          { id: "itemview-versions", title: "Item View Versions", path: "/item-view-versions" },
          { id: "shop-grid-v1", title: "Shop Grid View V1", path: "/products?view=grid-v1" },
          { id: "shop-grid-v2", title: "Shop Grid View V2", path: "/products?view=grid-v2" },
          { id: "shop-list-v1", title: "Shop List View V1", path: "/products?view=list-v1" },
          { id: "shop-list-v2", title: "Shop List View V2", path: "/products?view=list-v2", badge: "hot", badgeTheme: "primary" },
          { id: "profile-page", title: "Profile Page", path: "/profile" },
          { id: "blog-v1", title: "Blog Page V1", path: "/blog-v1" },
          { id: "blog-v2", title: "Blog Page V2", path: "/blog-v2" },
          { id: "open-post", title: "Open Post", path: "/open-post" },
          { id: "forum-board", title: "Forum Board", path: "/forum" },
          { id: "subforum", title: "Subforum", path: "/subforum" },
          { id: "open-topic", title: "Open Topic", path: "/open-topic" },
          { id: "login-register", title: "Login and Register", path: "/login" },
          { id: "menu-dropdowns", title: "Menu and Dropdowns", path: "/menu-dropdowns" },
        ]
      },
      {
        title: "Product Pages",
        items: [
            { id: "item-page-v1", title: "Item Page V1", path: "/item/v1" },
            { id: "item-page-v2", title: "Item Page V2", path: "/item/v2", badge: "new", badgeTheme: "secondary" },
            { id: "product-page", title: "Product Page", path: "/product" },
            { id: "auction-page", title: "Auction Page", path: "/auction" },
            { id: "service-page", title: "Service Page", path: "/service" },
            { id: "favourites-grid", title: "Favourite Products Grid View", path: "/account/favourites" },
            { id: "favourites-list", title: "Favourite Products List View", path: "/account/favourites-list" },
            { id: "alerts-notifications", title: "Alerts & Notifications", path: "/alerts-notifications" },
        ]
      },
      {
        title: "Dashboard",
        items: [
            { id: "dash-settings", title: "Account Settings", path: "/dashboard/settings" },
            { id: "dash-statistics", title: "Statistics Page", path: "/dashboard/statistics" },
            { id: "dash-statement", title: "Sales Statement", path: "/dashboard/statement" },
            { id: "dash-inbox", title: "Inbox Page", path: "/dashboard/inbox" },
            { id: "dash-openmessage", title: "Open Message", path: "/dashboard/message" },
            { id: "dash-upload", title: "Upload Page", path: "/dashboard/upload" },
        ]
      },
      {
        title: "Gamification",
        items: [
            { id: "community-badges", title: "Author Badges Page", path: "/badges/author" },
            { id: "all-badges", title: "All Badges (Big and Small)", path: "/badges/all" },
            { id: "flag-badges", title: "Flag Badges (Big and Small)", path: "/badges/flags" },
            { id: "badge-boxes", title: "Badge Boxes Versions", path: "/badges/boxes" },
            { id: "public-author-badges", title: "Public Author Badges", path: "/badges/public" },
        ]
      }
    ],
  },
];

export function getRouteByPath(pathname: string, routes: MenuItem[] = APP_ROUTES): MenuItem | undefined {
  for (const route of routes) {
    if (route.path === pathname) return route;
    // Check in children
    if (route.children) {
      const child = getRouteByPath(pathname, route.children);
      if (child) return child;
    }
    // Check in groups
    if (route.groups) {
        for (const group of route.groups) {
            const groupItem = getRouteByPath(pathname, group.items);
            if (groupItem) return groupItem;
        }
    }
  }
  return undefined;
}
