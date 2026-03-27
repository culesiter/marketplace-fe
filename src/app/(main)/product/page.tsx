"use client";
import React, { useState } from "react";
import SidebarLayout from "@/components/layout/SidebarLayout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import "@/styles/sass/shop.scss";
import "@/styles/sass/blog.scss";

export default function SingleProductPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [license, setLicense] = useState("regular"); // 'regular' or 'extended'

  const slides = [
    "/images/items/westeroshtml_b01.jpg",
    "/images/items/westeroshtml_b02.jpg",
    "/images/items/westeroshtml_b03.jpg",
    "/images/items/westeroshtml_b04.jpg",
    "/images/items/westeroshtml_b05.jpg",
  ];

  const breadcrumbs = [
    { title: "Home", path: "/" },
    { title: "Web Design", path: "/products" },
    { title: "HTML Templates", path: "/products" },
  ];

  const sidebarContent = (
    <>
      <div className="sidebar-item">
        <p className="price large"><span>$</span>{license === "regular" ? "28.00" : "150.00"}</p>
        <hr className="line-separator" />
        
        <form id="aux_form">
          <input 
            type="radio" 
            id="regular-license" 
            name="license" 
            checked={license === "regular"} 
            onChange={() => setLicense("regular")} 
          />
          <label className="b-label linked-check" htmlFor="regular-license">
            <span className="checkbox primary"><span></span></span>
            Regular License
          </label>
          <p className="license-text" style={{ display: license === "regular" ? "block" : "none" }}>
            Lorem ipsum dolor sit amet, sectetur adipisicing elit, sed do eiusmod tempor cididunt ut labore.
          </p>

          <input 
            type="radio" 
            id="extended-license" 
            name="license" 
            checked={license === "extended"}
            onChange={() => setLicense("extended")} 
          />
          <label className="b-label linked-check" htmlFor="extended-license">
            <span className="checkbox primary"><span></span></span>
            Extended License
          </label>
          <p className="license-text" style={{ display: license === "extended" ? "block" : "none" }}>
            This license is for products that will be sold to multiple users.
          </p>
        </form>

        <a href="#" className="button mid dark spaced"><span className="primary">Purchase Now!</span></a>
        <a href="#" className="button mid primary half">Add to Cart</a>
        <a href="#" className="button mid secondary wicon half"><span className="icon-heart"></span>652</a>
        <div className="clearfix"></div>
      </div>

      <div className="sidebar-item author-bio">
        <h4>Product Author</h4>
        <hr className="line-separator" />
        <Link href="/profile" className="user-avatar-wrap medium">
          <figure className="user-avatar medium">
            <img src="/images/avatars/avatar_09.jpg" alt="author" />
          </figure>
        </Link>
        <p className="text-header">Odin_Design</p>
        <p className="text-oneline">Super Samurai Developers<br />Los Angeles, Usa</p>
        
        <ul className="share-links">
          <li><a href="#" className="fb"></a></li>
          <li><a href="#" className="twt"></a></li>
          <li><a href="#" className="db"></a></li>
        </ul>
        
        <Link href="/profile" className="button mid dark spaced">Go to <span className="primary">Profile Page</span></Link>
        <a href="#" className="button mid dark-light">Send a Private Message</a>
      </div>

      <div className="sidebar-item product-info">
        <h4>Product Information</h4>
        <hr className="line-separator" />
        <div className="information-layout">
          <div className="information-layout-item">
            <p className="text-header">Sales:</p>
            <p>22</p>
          </div>
          <div className="information-layout-item">
            <p className="text-header">Upload Date:</p>
            <p>August 18th, 2015</p>
          </div>
          <div className="information-layout-item">
            <p className="text-header">Files Included:</p>
            <p>PSD, AI, JPEG, PNG</p>
          </div>
          <div className="information-layout-item">
            <p className="text-header">Requirements:</p>
            <p>CS6 or Lower</p>
          </div>
          <div className="information-layout-item">
             <p className="tags primary">
                <a href="#">photoshop</a>, <a href="#">flat</a>, <a href="#">icon</a>, <a href="#">mockup</a>
             </p>
          </div>
        </div>
      </div>

      <div className="sidebar-item author-reputation full">
        <h4>Author's Reputation</h4>
        <hr className="line-separator" />
        <div className="pie-chart pie-chart1">
          <p className="text-header percent">86<span>%</span></p>
          <p className="text-header percent-info">Recommended</p>
          <ul className="rating">
            {Array.from({ length: 4 }).map((_, i) => (
              <li key={i} className="rating-item">
                <svg className="svg-star"><use xlinkHref="#svg-star"></use></svg>
              </li>
            ))}
            <li className="rating-item empty">
              <svg className="svg-star"><use xlinkHref="#svg-star"></use></svg>
            </li>
          </ul>
        </div>
        <a href="#" className="button mid dark-light">Read all reviews</a>
      </div>
    </>
  );

  const mainContent = (
    <>
      <article className="post">
        <div className="post-image">
          <figure className="product-preview-image large">
            <img src={slides[currentSlide]} alt="product-large" />
          </figure>
          
          <div className="slide-control-wrap">
            <div 
              className="slide-control rounded left" 
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            >
              <svg className="svg-arrow"><use xlinkHref="#svg-arrow"></use></svg>
            </div>
            <div 
              className="slide-control rounded right" 
              onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
            >
              <svg className="svg-arrow"><use xlinkHref="#svg-arrow"></use></svg>
            </div>
          </div>
          
          <a href="#" className="button mid primary">Go to Live Demo</a>
        </div>

        <div className="post-image-slides">
           <div className="image-slides-wrap full">
              <div className="image-slides" style={{ display: 'flex', gap: '10px' }}>
                 {slides.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`image-slide ${currentSlide === idx ? 'selected' : ''}`}
                      onClick={() => setCurrentSlide(idx)}
                      style={{ position: 'relative', flexShrink: 0 }}
                    >
                       <div className="overlay"></div>
                       <figure className="product-preview-image thumbnail">
                          <img src={img} alt={`thumb-${idx}`} />
                       </figure>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <hr className="line-separator" />

        <div className="post-content">
          <div className="post-paragraph">
             <h3 className="post-title">The Pack Contains:</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>

          <div className="post-paragraph half">
             <h3 className="post-title small">List Items (Unordered)</h3>
             <ul className="post-item-list">
                <li>
                  <svg className="svg-check bullet-icon"><use xlinkHref="#svg-check"></use></svg>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>
                <li>
                  <svg className="svg-check bullet-icon"><use xlinkHref="#svg-check"></use></svg>
                  <p>Nostrud Exertation</p>
                </li>
             </ul>
          </div>

          <div className="post-paragraph half">
             <h3 className="post-title small">List Items (Ordered)</h3>
             <ul className="post-item-list">
                <li><p className="bullet-icon">1-</p><p>Lorem ipsum dolor sit amet</p></li>
                <li><p className="bullet-icon">2-</p><p>Nostrud Exertation</p></li>
             </ul>
          </div>
          <div className="clearfix"></div>
        </div>

        <hr className="line-separator" />

        <div className="share-links-wrap">
          <p className="text-header small">Share this:</p>
          <ul className="share-links hoverable">
            <li><a href="#" className="fb"></a></li>
            <li><a href="#" className="twt"></a></li>
            <li><a href="#" className="db"></a></li>
            <li><a href="#" className="rss"></a></li>
          </ul>
        </div>
      </article>

      <div className="post-tab">
        <div className="tab-header primary">
           <div className="tab-item selected"><p className="text-header">Comments (35)</p></div>
           <div className="tab-item"><p className="text-header">Buyers Corner</p></div>
           <div className="tab-item"><p className="text-header">Item FAQs</p></div>
        </div>
        <div className="tab-content open" style={{ padding: '30px' }}>
           <p>Mock comment section content... Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );

  return (
    <>
      <SectionHeader title="Westeros Custom Clothing" breadcrumbs={breadcrumbs} />
      <SidebarLayout 
        sidebarContent={sidebarContent} 
        mainContent={mainContent} 
        sidebarPosition="right" 
      />
      <div className="clearfix"></div>
      
    </>
  );
}
