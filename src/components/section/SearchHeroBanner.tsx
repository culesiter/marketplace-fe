import Link from 'next/link';
export default function BannerV2() {
  return (
    <>
      <div className="banner-wrap">
        <section className="banner banner-v2">
          <h5>Register now and start</h5>
          <h1>
            <span>Buying and Selling</span>
          </h1>

          <form className="search-widget-form">
            <input
              type="text"
              name="category_name"
              placeholder="Search goods or services here..."
            />
            <label htmlFor="categories" className="select-block">
              <select name="categories" id="categories">
                <option value="0">All Categories</option>
                <option value="1">PSD Templates</option>
                <option value="2">Hero Images</option>
                <option value="3">Shopify</option>
                <option value="4">Icon Packs</option>
                <option value="5">Graphics</option>
                <option value="6">Flyers</option>
                <option value="7">Backgrounds</option>
                <option value="8">Social Covers</option>
              </select>
              <svg className="svg-arrow">
                <use xlinkHref="#svg-arrow"></use>
              </svg>
            </label>
            <button className="button medium primary">Search Now!</button>
          </form>
        </section>
      </div>
    </>
  );
}
