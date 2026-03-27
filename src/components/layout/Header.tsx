"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import "@/styles/sass/header.scss";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const cartRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
      if (
        messageRef.current &&
        !messageRef.current.contains(event.target as Node)
      ) {
        setIsMessageOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="header-wrap">
        <header>
          <Link href="/">
            <figure className="logo">
              <img src="/images/logo.png" alt="logo" />
            </figure>
          </Link>

          <div className="mobile-menu-handler left primary">
            <img src="/images/pull-icon.png" alt="pull-icon" />
          </div>

          <Link href="/">
            <figure className="logo-mobile">
              <img src="/images/logo_mobile.png" alt="logo-mobile" />
            </figure>
          </Link>

          <div className="mobile-account-options-handler right secondary">
            <span className="icon-user"></span>
          </div>

          <div className="user-board">
            <div
              className="user-quickview"
              onMouseEnter={() => setIsProfileOpen(true)}
              onMouseLeave={() => setIsProfileOpen(false)}
            >
              <Link href="/profile">
                <div className="outer-ring">
                  <div className="inner-ring"></div>
                  <figure className="user-avatar">
                    <img src="/images/avatars/avatar_01.jpg" alt="avatar" />
                  </figure>
                </div>
              </Link>

              <p className="user-name">Johnny Fisher</p>
              <svg className="svg-arrow">
                <use xlinkHref="#svg-arrow"></use>
              </svg>
              <p className="user-money">$745.00</p>

              <ul
                className={`dropdown small hover-effect profile-dropdown ${isProfileOpen ? "open" : "closed"}`}
              >
                <li className="dropdown-item">
                  <div className="dropdown-triangle"></div>
                  <Link href="/profile">Profile Page</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/dashboard/settings">Account Settings</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/dashboard/purchases">Your Purchases</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/dashboard/statement">Sales Statement</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/dashboard/credits">Buy Credits</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/dashboard/withdrawals">Withdrawals</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/dashboard/upload">Upload Item</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/dashboard/items">Manage Items</Link>
                </li>
              </ul>
            </div>

            <div className="account-information">
              <Link href="/favourites">
                <div className="account-wishlist-quickview">
                  <span className="icon-heart"></span>
                </div>
              </Link>

              <div
                className={`account-cart-quickview ${isCartOpen ? "active" : ""}`}
                ref={cartRef}
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <span className="icon-present">
                  <svg className="svg-arrow">
                    <use xlinkHref="#svg-arrow"></use>
                  </svg>
                </span>
                <span className="pin soft-edged secondary">7</span>

                <ul
                  className={`dropdown cart ${isCartOpen ? "open" : "closed"}`}
                >
                  <li className="dropdown-item">
                    <Link href="/item" className="link-to"></Link>
                    <svg className="svg-plus">
                      <use xlinkHref="#svg-plus"></use>
                    </svg>
                    <div className="dropdown-triangle"></div>
                    <figure className="product-preview-image tiny">
                      <img src="/images/items/pixel_s.jpg" alt="" />
                    </figure>
                    <p className="text-header tiny">
                      Pixel Diamond Gaming Shop
                    </p>
                    <p className="category tiny primary">Shopify</p>
                    <p className="price tiny">
                      <span>$</span>86
                    </p>
                  </li>

                  <li className="dropdown-item">
                    <Link href="/item" className="link-to"></Link>
                    <svg className="svg-plus">
                      <use xlinkHref="#svg-plus"></use>
                    </svg>
                    <figure className="product-preview-image tiny">
                      <img src="/images/items/monsters_s.jpg" alt="" />
                    </figure>
                    <p className="text-header tiny">
                      Little Monsters - 40 Pack Button Badge Maker
                    </p>
                    <p className="category tiny primary">Graphics</p>
                    <p className="price tiny">
                      <span>$</span>10
                    </p>
                  </li>

                  <li className="dropdown-item">
                    <Link href="/item" className="link-to"></Link>
                    <svg className="svg-plus">
                      <use xlinkHref="#svg-plus"></use>
                    </svg>
                    <figure className="product-preview-image tiny">
                      <img src="/images/items/flat_s.jpg" alt="" />
                    </figure>
                    <p className="text-header tiny">
                      Flatland - Hero Image Composer
                    </p>
                    <p className="category tiny primary">Shopify</p>
                    <p className="price tiny">
                      <span>$</span>12
                    </p>
                  </li>

                  <li className="dropdown-item">
                    <p className="text-header tiny">Total</p>
                    <p className="price">
                      <span>$</span>108.00
                    </p>
                    <Link href="/cart" className="button primary half">
                      Go to Cart
                    </Link>
                    <Link href="/checkout" className="button secondary half">
                      Go to Checkout
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className={`account-email-quickview ${isMessageOpen ? "active" : ""}`}
                ref={messageRef}
                onClick={() => setIsMessageOpen(!isMessageOpen)}
              >
                <span className="icon-envelope">
                  <svg className="svg-arrow">
                    <use xlinkHref="#svg-arrow"></use>
                  </svg>
                </span>
                <span className="pin soft-edged secondary">!</span>

                <ul
                  className={`dropdown notifications ${isMessageOpen ? "open" : "closed"}`}
                >
                  <li className="dropdown-item">
                    <div className="dropdown-triangle"></div>
                    <Link href="/dashboard/message" className="link-to"></Link>
                    <figure className="user-avatar">
                      <img src="/images/avatars/avatar_06.jpg" alt="" />
                    </figure>
                    <p className="text-header tiny">
                      <span>Sarah-Imaginarium</span>
                    </p>
                    <p className="subject">Product Question</p>
                    <p className="timestamp">May 18th, 2014</p>
                    <span className="notification-type secondary-new icon-envelope"></span>
                  </li>

                  <li className="dropdown-item">
                    <Link href="/dashboard/message" className="link-to"></Link>
                    <figure className="user-avatar">
                      <img src="/images/avatars/avatar_04.jpg" alt="" />
                    </figure>
                    <p className="text-header tiny">
                      <span>Red Thunder Graphics</span>
                    </p>
                    <p className="subject">Support Inquiry</p>
                    <p className="timestamp">May 5th, 2014</p>
                    <span className="notification-type icon-envelope-open"></span>
                  </li>

                  <li className="dropdown-item">
                    <Link href="/dashboard/message" className="link-to"></Link>
                    <figure className="user-avatar">
                      <img src="/images/avatars/avatar_07.jpg" alt="" />
                    </figure>
                    <p className="text-header tiny">
                      <span>Twisted Themes</span>
                    </p>
                    <p className="subject">Collaboration</p>
                    <p className="timestamp">Feb 24th, 2014</p>
                    <span className="notification-type secondary-new icon-envelope"></span>
                  </li>

                  <li className="dropdown-item">
                    <Link href="/dashboard/message" className="link-to"></Link>
                    <figure className="user-avatar">
                      <img src="/images/avatars/avatar_08.jpg" alt="" />
                    </figure>
                    <p className="text-header tiny">
                      <span>GregSpiegel1820</span>
                    </p>
                    <p className="subject">How to Install the Theme...</p>
                    <p className="timestamp">Jan 3rd, 2014</p>
                    <span className="notification-type icon-action-undo"></span>
                    <Link href="/dashboard/inbox" className="button secondary">
                      View all Messages
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className={`account-settings-quickview ${isNotificationOpen ? "active" : ""}`}
                ref={notificationRef}
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              >
                <span className="icon-settings">
                  <svg className="svg-arrow">
                    <use xlinkHref="#svg-arrow"></use>
                  </svg>
                </span>
                <span className="pin soft-edged primary">49</span>

                <ul
                  className={`dropdown notifications no-hover ${isNotificationOpen ? "open" : "closed"}`}
                >
                  <li className="dropdown-item">
                    <div className="dropdown-triangle"></div>
                    <Link href="/profile">
                      <figure className="user-avatar">
                        <img src="/images/avatars/avatar_02.jpg" alt="" />
                      </figure>
                    </Link>
                    <p className="title">
                      <Link href="/profile">
                        <span>MeganV.</span>
                      </Link>{" "}
                      added{" "}
                      <Link href="/item">
                        <span>Pixel Diamond Gaming Shop</span>
                      </Link>{" "}
                      to favourites
                    </p>
                    <p className="timestamp">2 Hours ago</p>
                    <span className="notification-type primary-new icon-heart"></span>
                  </li>

                  <li className="dropdown-item">
                    <Link href="/profile">
                      <figure className="user-avatar">
                        <img src="/images/avatars/avatar_03.jpg" alt="" />
                      </figure>
                    </Link>
                    <p className="title">
                      <Link href="/profile">
                        <span>Thomas_Ket</span>
                      </Link>{" "}
                      wrote you an{" "}
                      <Link href="/reputation">
                        <span>Author&apos;s Reputation</span>
                      </Link>
                    </p>
                    <p className="timestamp">17 Hours ago</p>
                    <span className="notification-type icon-star"></span>
                  </li>

                  <li className="dropdown-item">
                    <Link href="/profile">
                      <figure className="user-avatar">
                        <img src="/images/avatars/avatar_04.jpg" alt="" />
                      </figure>
                    </Link>
                    <p className="title">
                      <Link href="/profile">
                        <span>Red Thunder Graphics</span>
                      </Link>{" "}
                      commented on{" "}
                      <Link href="/item">
                        <span>3D Layers - Web Mockup</span>
                      </Link>
                    </p>
                    <p className="timestamp">8 Days Ago</p>
                    <span className="notification-type primary-new icon-bubble"></span>
                  </li>

                  <li className="dropdown-item">
                    <Link href="/profile">
                      <figure className="user-avatar">
                        <img src="/images/avatars/avatar_05.jpg" alt="" />
                      </figure>
                    </Link>
                    <p className="title">
                      <Link href="/profile">
                        <span>DaBebop</span>
                      </Link>{" "}
                      purchased{" "}
                      <Link href="/item">
                        <span>Miniverse - Hero Image Composer</span>
                      </Link>
                    </p>
                    <p className="timestamp">1 Week ago</p>
                    <span className="notification-type icon-tag"></span>
                    <Link
                      href="/dashboard/notifications"
                      className="button primary"
                    >
                      View all Notifications
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="account-actions">
              <Link href="/sell" className="button primary">
                Become a Seller
              </Link>
              <Link href="/logout" className="button secondary">
                Logout
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
