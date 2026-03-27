// src/app/page.tsx
import SearchHeroBanner from "@/components/section/SearchHeroBanner";
import CategoryNavWrap from "@/components/section/CategoryNavWrap";
import ProductSideshowWrap from "@/components/section/ProductSideshowWrap";
import ProductShowcase from "@/components/section/ProductShowcase";
import PromoBanner from "@/components/section/PromoBanner";
import ServicesWrap from "@/components/section/ServicesWrap";

export default function HomePage() {
  return (
    <main>
      <SearchHeroBanner />
      <CategoryNavWrap />
      <ProductSideshowWrap />
      <ProductShowcase />
      <ProductShowcase
        title="Newest Items"
        theme="primary"
        sliderKey="newest-items"
      />
      <div style={{ width: "100%", display: "flex" }}>
        <PromoBanner
          title="Start Selling"
          description="Make money instantly!"
          buttonText="Open Your Shop!"
          buttonHref="/sell"
          theme="dark"
          position="left"
          buttonTheme="primary"
        />
        <PromoBanner
          title="Start Selling"
          description="Make money instantly!"
          buttonText="Open Your Shop!"
          buttonHref="/sell"
          theme="secondary"
          position="right"
          buttonTheme="dark"
        />
      </div>
      <ProductShowcase
        title="Top Rated Items"
        theme="secondary"
        sliderKey="top-rated-items"
      />
      <ServicesWrap />
    </main>
  );
}
