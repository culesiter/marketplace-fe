"use client";
import SectionHeader from "@/components/layout/SectionHeader";
import SidebarLayout from "@/components/layout/SidebarLayout";
import Link from "next/link";
import "@/styles/sass/shop.scss";

export default function CartPage() {
  const breadcrumbs = [
    { title: "Home", path: "/" },
    { title: "Shopping Cart", path: "/cart" },
  ];

  const sidebarContent = (
    <>
      <div className="sidebar-item">
        <h4>Redeem Code</h4>
        <hr className="line-separator" />
        <form id="coupon-code-form">
          <input type="text" name="coupon_code" placeholder="Enter your coupon code..." />
          <button className="button mid dark-light">Apply Coupon Code</button>
        </form>
      </div>

      <div className="sidebar-item">
        <h4>Calculate Shipping</h4>
        <hr className="line-separator" />
        <form id="shipping-form">
          <label htmlFor="country" className="select-block">
            <select name="country" id="country" defaultValue="0">
              <option value="0">Select your Country...</option>
              <option value="1">United States</option>
              <option value="2">Vietnam</option>
            </select>
            <svg className="svg-arrow">
              <use xlinkHref="#svg-arrow"></use>
            </svg>
          </label>
          <label htmlFor="state_city" className="select-block">
            <select name="state_city" id="state_city" defaultValue="0">
              <option value="0">Select your State/City...</option>
              <option value="1">Hanoi</option>
              <option value="2">TP.HCM</option>
            </select>
            <svg className="svg-arrow">
              <use xlinkHref="#svg-arrow"></use>
            </svg>
          </label>
          <input type="text" name="zip_code" placeholder="Enter your Zip Code..." />
          <button className="button mid dark-light">Update Shipping Total</button>
        </form>
      </div>
    </>
  );

  const mainContent = (
    <div className="cart">
        <div className="cart-header headline primary">
          <div className="cart-header-product">
               <p className="text-header small">Product Details</p>
          </div>
          <div className="cart-header-category">
               <p className="text-header small">Category</p>
          </div>
          <div className="cart-header-price">
               <p className="text-header small">Price</p>
          </div>
          <div className="cart-header-actions">
               <p className="text-header small">Actions</p>
          </div>
        </div>
        
        {/* Cart Item */}
        <div className="cart-item">
           <div className="cart-item-product">
              <div className="item-preview">
                   <figure className="product-preview-image tiny">
                       <img src="/images/items/pixel_s.jpg" alt="product" />
                   </figure>
                   <p className="text-header tiny">Pixel Diamond Gaming Shop</p>
                   <p className="description">Lorem ipsum dolor sit urarde adipisicing elit dem...</p>
              </div>
           </div>
           <div className="cart-item-category">
               <p className="category tiny primary">Shopify</p>
           </div>
           <div className="cart-item-price">
              <p className="price"><span>$</span>86.00</p>
           </div>
           <div className="cart-item-actions">
               <div className="button secondary rmv">
                   <svg className="svg-plus">
                       <use xlinkHref="#svg-plus"></use>
                   </svg>
               </div>
           </div>
        </div>
        
        {/* Total Area */}
        <div className="cart-total">
           <p className="price"><span>$</span>86.00</p>
           <p className="text-header subtotal">Cart Subtotal</p>
        </div>
        
        <div className="cart-total total">
           <p className="price medium"><span>$</span>108.00</p>
           <p className="text-header total">Cart Total</p>
        </div>

        <div className="cart-actions">
           <Link href="/checkout" className="button mid primary">Proceed to Checkout</Link>
           <Link href="/products" className="button mid secondary spaced">Continue Browsing</Link>
        </div>
     </div>
  );

  return (
    <>
      <SectionHeader title="Shopping Cart" breadcrumbs={breadcrumbs} />
      <SidebarLayout 
        sidebarContent={sidebarContent}
        mainContent={mainContent}
        sidebarPosition="left"
      />
    </>
  );
}
