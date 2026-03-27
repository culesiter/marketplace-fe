"use client";
import ProductCard from "@/components/features/product/ProductCard";

export default function AuthorItemsPage() {
  return (
    <div className="author-items-page">
      <div className="headline primary">
        <h4>103 Author's Items</h4>
        <div className="view-selectors">
          <a href="#" className="view-selector grid active"></a>
          <a href="#" className="view-selector list"></a>
        </div>
        <form id="shop_filter_form" className="shop-filter-form">
          <label htmlFor="price_filter" className="select-block">
            <select name="price_filter" id="price_filter" defaultValue="0">
              <option value="0">Price (High to Low)</option>
              <option value="1">Price (Low to High)</option>
            </select>
            <svg className="svg-arrow"><use xlinkHref="#svg-arrow"></use></svg>
          </label>
          <label htmlFor="itemspp_filter" className="select-block">
            <select name="itemspp_filter" id="itemspp_filter" defaultValue="0">
              <option value="0">12 Items Per Page</option>
              <option value="1">6 Items Per Page</option>
            </select>
            <svg className="svg-arrow"><use xlinkHref="#svg-arrow"></use></svg>
          </label>
        </form>
        <div className="clearfix"></div>
      </div>
      
      <div className="product-list grid column3-4-wrap">
        {Array.from({ length: 12 }).map((_, i) => (
          <ProductCard key={i} product={{ id: `author-item-${i + 1}` }} />
        ))}
      </div>
    </div>
  );
}
