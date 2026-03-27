import Newsletter from "./Newsletter";
import Link from 'next/link';
import "@/styles/sass/footer.scss";

export default function Footer() {
  return (
    <>
      <Newsletter />
      <footer>
        <div id="footer-top-wrap">
          <div id="footer-top">
            <div className="company-info">
              <figure className="logo small">
                <img src="/images/logo_small.png" alt="logo-small" />
              </figure>
              <p>
                Lorem ipsum dolor sit amet, consectetur isicing elit, sed do
                eiusmod tempor incididunt ut labo dolore magna ua.
              </p>
              <ul className="company-info-list">
                <li className="company-info-item">
                  <span className="icon-present"></span>
                  <p>
                    <span>850.296</span> Products
                  </p>
                </li>
                <li className="company-info-item">
                  <span className="icon-energy"></span>
                  <p>
                    <span>1.207.300</span> Members
                  </p>
                </li>
                <li className="company-info-item">
                  <span className="icon-user"></span>
                  <p>
                    <span>74.059</span> Sellers
                  </p>
                </li>
              </ul>
              <ul className="social-links">
                <li className="social-link fb">
                  <Link href="#"></Link>
                </li>
                <li className="social-link twt">
                  <Link href="#"></Link>
                </li>
                <li className="social-link db">
                  <Link href="#"></Link>
                </li>
                <li className="social-link rss">
                  <Link href="#"></Link>
                </li>
              </ul>
            </div>

            <div className="link-info">
              <p className="footer-title">Our Community</p>
              <ul className="link-list">
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">How to Join us</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">Buying and Selling</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="forum.html">Emerald Forum</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="blog-v1.html">Emerald Blog</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">Free Goods</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">Job Oportunities</Link>
                </li>
              </ul>
            </div>

            <div className="link-info">
              <p className="footer-title">Member Links</p>
              <ul className="link-list">
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">Partner Program</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">Starting a Shop</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">Purchase Credits</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">Withdrawals</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">World Meetings</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">How to Auction</Link>
                </li>
              </ul>
            </div>

            <div className="link-info">
              <p className="footer-title">Help and FAQs</p>
              <ul className="link-list">
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">Help Center</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">FAQs</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">Terms and Conditions</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">Products Licenses</Link>
                </li>
                <li className="link-item">
                  <div className="bullet"></div>
                  <Link href="#">Security Information</Link>
                </li>
              </ul>
            </div>

            <div className="twitter-feed">
              <p className="footer-title">Twitter Feed</p>
              <ul className="tweets"></ul>
            </div>
          </div>
        </div>

        <div id="footer-bottom-wrap">
          <div id="footer-bottom">
            <p>
              <span>&copy;</span>
              <Link href="index.html">Emerald Dragon</Link> Template - All Rights
              Reserved 2015
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
