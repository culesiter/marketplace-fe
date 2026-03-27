"use client";
import Link from "next/link";
import "@/styles/sass/product-sideshow.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
interface ProductShowcaseProps {
  theme?: "primary" | "secondary" | "";
  title?: string;
  sliderKey?: string;
}

export default function ProductShowcase({
  theme = "",
  title = "Trending Services",
  sliderKey = "default",
}: ProductShowcaseProps) {
  return (
    <>
      <div id="product-sideshow-wrap">
        <div id="product-sideshow">
          <div className="product-showcase">
            <div className={`headline ${theme}`}>
              <h4>{title}</h4>

              <div className="slide-control-wrap">
                <div className={`slide-control left prev-btn ${sliderKey}`}>
                  <svg className="svg-arrow">
                    <use xlinkHref="#svg-arrow"></use>
                  </svg>
                </div>

                <div className={`slide-control right next-btn ${sliderKey}`}>
                  <svg className="svg-arrow">
                    <use xlinkHref="#svg-arrow"></use>
                  </svg>
                </div>
              </div>
            </div>

            <Swiper
              id="pl-4"
              className={`product-list grid column4-wrap owl-carousel ${sliderKey}`}
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={4}
              navigation={{
                prevEl: ".prev-btn" + `.${sliderKey}`,
                nextEl: ".next-btn" + `.${sliderKey}`,
              }}
              onBeforeInit={(swiper: SwiperType) => {
                // @ts-expect-error navigation can be boolean
                swiper.params.navigation.prevEl = ".prev-btn" + `.${sliderKey}`;
                // @ts-expect-error navigation can be boolean
                swiper.params.navigation.nextEl = ".next-btn" + `.${sliderKey}`;
              }}
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <SwiperSlide key={index} className="product-item column">
                  <div className="product-preview-actions">
                    <figure className="product-preview-image">
                      <img src="images/items/logos_m.jpg" alt="product-image" />
                    </figure>

                    <div className="preview-actions">
                      <div className="preview-action">
                        <Link href="service-page.html">
                          <div className="circle tiny primary">
                            <span className="icon-tag"></span>
                          </div>
                        </Link>
                        <Link href="service-page.html">
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
                    <Link href="service-page.html">
                      <p className="text-header">
                        Professional Corporate Logos
                      </p>
                    </Link>
                    <p className="product-description">
                      Lorem ipsum dolor sit urarde...
                    </p>
                    <Link href="services.html">
                      <p className="category secondary">Graphic Design</p>
                    </Link>
                    <p className="price">
                      <span>$</span>260
                    </p>
                  </div>

                  <hr className="line-separator" />

                  <div className="user-rating">
                    <Link href="author-profile.html">
                      <figure className="user-avatar small">
                        <img
                          src="images/avatars/avatar_14.jpg"
                          alt="user-avatar"
                        />
                      </figure>
                    </Link>
                    <Link href="author-profile.html">
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
