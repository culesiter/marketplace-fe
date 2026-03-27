"use client";
import SectionHeader from "@/components/layout/SectionHeader";
import ProductCard from "@/components/features/product/ProductCard";
import SidebarLayout from "@/components/layout/SidebarLayout";
import PriceRangeSlider from "@/components/features/search/PriceRangeSlider";
import { useState } from "react";
import "@/styles/sass/shop.scss";
import "@/styles/vendor/jquery.range.css";

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const breadcrumbs = [
    { title: "Home", path: "/" },
    { title: "Shop V1", path: "/products" },
    { title: "Illustration", path: "/products" },
  ];

  const sidebarContent = (
    <>
      <ul className="dropdown hover-effect primary">
        <li className="dropdown-item">
          <a href="#">Digital Graphics</a>
        </li>
        <li className="dropdown-item active">
          <a href="#">Illustration</a>
        </li>
        <li className="dropdown-item">
          <a href="#">Web Design</a>
        </li>
        <li className="dropdown-item">
          <a href="#">Stock Photography</a>
        </li>
        <li className="dropdown-item">
          <a href="#">Code and Plugins</a>
        </li>
      </ul>

      <div className="sidebar-item">
        <h4>Filter Products</h4>
        <hr className="line-separator" />
        <form id="shop_search_form">
          <input type="checkbox" id="filter1" name="filter1" defaultChecked />
          <label htmlFor="filter1">
            <span className="checkbox primary"><span></span></span>
            Cartoon Characters
            <span className="quantity">350</span>
          </label>

          <input type="checkbox" id="filter2" name="filter2" defaultChecked />
          <label htmlFor="filter2">
            <span className="checkbox primary"><span></span></span>
            Flat Vector
            <span className="quantity">68</span>
          </label>

          <input type="checkbox" id="filter3" name="filter3" defaultChecked />
          <label htmlFor="filter3">
            <span className="checkbox primary"><span></span></span>
            People
            <span className="quantity">350</span>
          </label>

          <input type="checkbox" id="filter4" name="filter4" />
          <label htmlFor="filter4">
            <span className="checkbox primary"><span></span></span>
            Animals
            <span className="quantity">64</span>
          </label>
        </form>
      </div>

      <div className="sidebar-item">
        <h4>File Types</h4>
        <hr className="line-separator" />
        <form>
          <input type="checkbox" id="ft1" name="ft1" />
          <label htmlFor="ft1">
            <span className="checkbox primary"><span></span></span>
            Photoshop PSD
            <span className="quantity">72</span>
          </label>

          <input type="checkbox" id="ft2" name="ft2" defaultChecked />
          <label htmlFor="ft2">
            <span className="checkbox primary"><span></span></span>
            Illustrator AI
            <span className="quantity">254</span>
          </label>

          <input type="checkbox" id="ft3" name="ft3" defaultChecked />
          <label htmlFor="ft3">
            <span className="checkbox primary"><span></span></span>
            EPS
            <span className="quantity">138</span>
          </label>
        </form>
      </div>

      <PriceRangeSlider />
    </>
  );

  const mainContent = (
    <>
      <div className="headline primary">
        <h4>12.580 Products Found</h4>
        <div className="view-selectors">
          <div 
            className={`view-selector grid ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          ></div>
          <div 
            className={`view-selector list ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          ></div>
        </div>
        
        <form id="shop_filter_form">
          <label htmlFor="price_filter" className="select-block">
            <select name="price_filter" id="price_filter" defaultValue="0">
              <option value="0">Price (High to Low)</option>
              <option value="1">Price (Low to High)</option>
            </select>
            <svg className="svg-arrow">
              <use xlinkHref="#svg-arrow"></use>
            </svg>
          </label>
          <label htmlFor="itemspp_filter" className="select-block">
            <select name="itemspp_filter" id="itemspp_filter" defaultValue="0">
              <option value="0">12 Items Per Page</option>
              <option value="1">6 Items Per Page</option>
            </select>
            <svg className="svg-arrow">
              <use xlinkHref="#svg-arrow"></use>
            </svg>
          </label>
        </form>
      </div>

      <div className="product-showcase">
        <div className={`product-list ${viewMode === "grid" ? "grid column3-4-wrap" : "list"}`}>
          {Array.from({ length: 9 }).map((_, i) => (
            <ProductCard 
              key={i} 
              product={{ id: `prod-${i + 1}` }} 
              variant={viewMode} 
            />
          ))}
        </div>
      </div>

      <div className="pager primary">
        <div className="pager-item"><p>1</p></div>
        <div className="pager-item active"><p>2</p></div>
        <div className="pager-item"><p>3</p></div>
        <div className="pager-item"><p>...</p></div>
        <div className="pager-item"><p>17</p></div>
      </div>
    </>
  );

  return (
    <>
      <SectionHeader 
        title="Shop Version 01" 
        breadcrumbs={breadcrumbs} 
        variant="v1"
      />
      <SidebarLayout 
        sidebarContent={sidebarContent}
        mainContent={mainContent}
        sidebarPosition="left"
      />
    </>
  );
}
