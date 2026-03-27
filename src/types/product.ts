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
    rating?: number;
    reviewsCount?: number;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    icon?: string;
    count?: number;
}
