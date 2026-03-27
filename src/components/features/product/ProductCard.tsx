"use client";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product?: Partial<Product>;
  variant?: "grid" | "list";
}

export default function ProductCard({ product, variant = "grid" }: ProductCardProps) {
  // Mock data if no product is provided
  const displayProduct = {
    name: product?.name || "Professional Corporate Logos",
    description: product?.description || "Lorem ipsum dolor sit urarde...",
    price: product?.price || 260,
    imageUrl: product?.imageUrl || "/images/items/logos_m.jpg",
    category: product?.category || "Graphic Design",
    slug: product?.slug || "product",
    ...product,
  };

  if (variant === "list") {
    return (
      <div className="product-item list">
         {/* List variant implementation if needed */}
         <div className="product-preview-actions">
          <figure className="product-preview-image">
            <img src={displayProduct.imageUrl} alt={displayProduct.name} />
          </figure>
        </div>
        <div className="product-info">
          <Link href={`/product/${displayProduct.slug}`}>
            <p className="text-header">{displayProduct.name}</p>
          </Link>
          <p className="product-description">{displayProduct.description}</p>
          <Link href="/products">
            <p className="category secondary">{displayProduct.category}</p>
          </Link>
          <p className="price">
            <span>$</span>{displayProduct.price}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-item column">
      <div className="product-preview-actions">
        <figure className="product-preview-image">
          <img src={displayProduct.imageUrl} alt={displayProduct.name} />
        </figure>

        <div className="preview-actions">
          <div className="preview-action">
            <Link href={`/product/${displayProduct.slug}`}>
              <div className="circle tiny primary">
                <span className="icon-tag"></span>
              </div>
            </Link>
            <Link href={`/product/${displayProduct.slug}`}>
              <p>Go to Item</p>
            </Link>
          </div>

          <div className="preview-action">
            <Link href="#">
              <div className="circle tiny secondary">
                <span className="icon-heart"></span>
              </div>
            </Link>
            <Link href="#">
              <p>Favourites +</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="product-info">
        <Link href={`/product/${displayProduct.slug}`}>
          <p className="text-header">{displayProduct.name}</p>
        </Link>
        <p className="product-description">{displayProduct.description}</p>
        <Link href="/products">
          <p className="category secondary">{displayProduct.category}</p>
        </Link>
        <p className="price">
          <span>$</span>{displayProduct.price}
        </p>
      </div>

      <hr className="line-separator" />

      <div className="user-rating">
        <Link href="/profile">
          <figure className="user-avatar small">
            <img src="/images/avatars/avatar_14.jpg" alt="user-avatar" />
          </figure>
        </Link>
        <Link href="/profile">
          <p className="text-header tiny">Jenny_Block</p>
        </Link>
        <ul className="rating tooltip" title="Author's Reputation">
          <li className="rating-item">
            <svg className="svg-star">
              <use xlinkHref="#svg-star"></use>
            </svg>
          </li>
          <li className="rating-item">
            <svg className="svg-star">
              <use xlinkHref="#svg-star"></use>
            </svg>
          </li>
          <li className="rating-item">
            <svg className="svg-star">
              <use xlinkHref="#svg-star"></use>
            </svg>
          </li>
          <li className="rating-item">
            <svg className="svg-star">
              <use xlinkHref="#svg-star"></use>
            </svg>
          </li>
          <li className="rating-item empty">
            <svg className="svg-star">
              <use xlinkHref="#svg-star"></use>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}
