// Application constants (routes, config values, etc.)

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PRODUCTS: "/products",
  PRODUCT: (slug: string) => `/products/${slug}`,
  CART: "/cart",
  SELLER_DASHBOARD: "/seller",
  ADMIN: "/admin",
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
} as const;
