import "@/styles/sass/product-sideshow.scss";
import Link from 'next/link';

export default function CategoryNavWrap() {
  return (
    <>
      <div className="category-nav-wrap">
        <div className="category-nav primary">
          <div className="category-tabs">
            <div className="category-tab">
              <p>Trending</p>
            </div>

            <div className="category-tab">
              <p>New Products</p>
            </div>

            <div className="category-tab">
              <p>Following</p>
            </div>
          </div>

          <div className="slide-control-wrap primary">
            <div className="slide-control left">
              <svg className="svg-arrow">
                <use xlinkHref="#svg-arrow"></use>
              </svg>
            </div>

            <div className="slide-control right">
              <svg className="svg-arrow">
                <use xlinkHref="#svg-arrow"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
