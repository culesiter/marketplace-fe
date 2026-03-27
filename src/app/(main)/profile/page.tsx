"use client";
import ProductCard from "@/components/features/product/ProductCard";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="author-profile-main">
      <div className="headline buttons primary">
        <h4>Latest Items</h4>
        <Link href="/products" className="button mid-short dark-light">See all the items</Link>
      </div>
      
      <div className="product-list grid column3-4-wrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCard key={i} product={{ id: `auth-prod-${i + 1}` }} />
        ))}
      </div>
    </div>
  );
}
