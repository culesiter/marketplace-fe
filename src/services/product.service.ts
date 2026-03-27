// Product service - handles all product-related API calls
import { apiClient } from "@/lib/api-client";
import type { Product } from "@/types";

export const productService = {
  getAll: () => apiClient<Product[]>("/products"),
  getBySlug: (slug: string) => apiClient<Product>(`/products/${slug}`),
  create: (data: Partial<Product>) =>
    apiClient<Product>("/products", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
