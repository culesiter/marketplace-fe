import "@/styles/sass/menu.scss";
import Link from 'next/link';

export default function Menu() {
  return (
    <>
      <div className="main-menu-wrap">
        <div className="menu-bar">
          <nav>
            <ul className="main-menu">
              <li className="menu-item">
                <Link href="index.html">Home</Link>
              </li>

              <li className="menu-item">
                <Link href="how-to-shop.html">How to shop</Link>
              </li>

              <li className="menu-item">
                <Link href="products.html">Products</Link>
              </li>

              <li className="menu-item">
                <Link href="services.html">Services</Link>
              </li>

              <li className="menu-item">
                <Link href="shop-gridview-v1.html">Online goods</Link>
              </li>

              <li className="menu-item sub">
                <Link href="#">
                  Features
                  <svg className="svg-arrow">
                    <use xlinkHref="#svg-arrow"></use>
                  </svg>
                </Link>
                <div className="content-dropdown">
                  <div className="feature-list-block">
                    <h6 className="feature-list-title">Emerald Dragon</h6>
                    <hr className="line-separator" />
                    <ul className="feature-list">
                      <li className="feature-list-item">
                        <Link href="index.html">Homepage V1</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="home-v2.html">Homepage V2</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="itemview-versions.html">Item View Versions</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="shop-gridview-v1.html">Shop Grid View V1</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="shop-gridview-v2.html">Shop Grid View V2</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="shop-listview-v1.html">Shop List View V1</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="shop-listview-v2.html">
                          Shop List View V2
                          <span className="pin primary">hot</span>
                        </Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="author-profile.html">Profile Page</Link>
                      </li>
                    </ul>

                    <ul className="feature-list">
                      <li className="feature-list-item">
                        <Link href="blog-v1.html">Blog Page V1</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="blog-v2.html">Blog Page V2</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="open-post.html">Open Post</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="forum.html">Forum Board</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="subforum.html">Subforum</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="open-topic.html">Open Topic</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="login-register.html">Login and Register</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="menu-dropdowns.html">Menu and Dropdowns</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="feature-list-block">
                    <h6 className="feature-list-title">Product Pages</h6>
                    <hr className="line-separator" />
                    <ul className="feature-list">
                      <li className="feature-list-item">
                        <Link href="item-v1.html">Item Page V1</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="item-v2.html">
                          Item Page V2
                          <span className="pin secondary">new</span>
                        </Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="product-page.html">Product Page</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="auction-page.html">Auction Page</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="service-page.html">Service Page</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="favourites.html">
                          Favourite Products Grid View
                        </Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="favourites-listview.html">
                          Favourite Products List View
                        </Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="alerts-notifications.html">
                          Alerts &amp; Notifications
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="feature-list-block">
                    <h6 className="feature-list-title">Dashboard</h6>
                    <hr className="line-separator" />
                    <ul className="feature-list">
                      <li className="feature-list-item">
                        <Link href="dashboard-settings.html">Account Settings</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="dashboard-statistics.html">Statistics Page</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="dashboard-statement.html">Sales Statement</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="dashboard-inbox.html">Inbox Page</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="dashboard-openmessage.html">Open Message</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="dashboard-uploaditem.html">Upload Page</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="feature-list-block">
                    <h6 className="feature-list-title">Gamification</h6>
                    <hr className="line-separator" />
                    <ul className="feature-list">
                      <li className="feature-list-item">
                        <Link href="community-badges.html">Author Badges Page</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="badges.html">All Badges (Big and Small)</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="flag-badges.html">
                          Flag Badges (Big and Small)
                        </Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="badges-boxes.html">Badge Boxes Versions</Link>
                      </li>
                      <li className="feature-list-item">
                        <Link href="author-badges.html">Public Author Badges</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <form className="search-form">
            <input
              type="text"
              className="rounded"
              name="search"
              id="search_products"
              placeholder="Search products here..."
            />
            <input
              type="image"
              src="/images/search-icon.png"
              alt="search-icon"
            />
          </form>
        </div>
      </div>
    </>
  );
}
