// TypeScript types and interfaces for domain models
// Example: Product, User, Order, Cart

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  sellerId: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: "buyer" | "seller" | "admin";
  avatarUrl?: string;
}

export interface Order {
  id: string;
  buyerId: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}
