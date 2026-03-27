"use client";
import Link from "next/link";
import "@/styles/sass/product-sideshow.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../features/product/ProductCard";
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
                <SwiperSlide key={index}>
                  <ProductCard product={{ id: `home-prod-${index + 1}` }} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
