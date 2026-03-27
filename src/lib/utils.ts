// Utility/helper functions
// Example: formatPrice, formatDate, slugify

export function formatPrice(amount: number, currency = "VND"): string {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency }).format(
    amount
  );
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("vi-VN");
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
