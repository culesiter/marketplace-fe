"use client";
import SidebarLayout from "@/components/layout/SidebarLayout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { openChatBox } from "@/store/slices/uiSlice";
import "@/styles/sass/author-profile.scss";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const breadcrumbs = [
    { title: "Home", path: "/" },
    { title: "Author's Profile", path: "/profile" },
  ];

  const sidebarContent = (
    <>
      <div className="sidebar-item author-bio">
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
        
        <a href="#" className="button mid dark spaced">Add to <span className="primary">Followers</span></a>
        <button 
            className="button mid dark-light" 
            onClick={() => dispatch(openChatBox("Odin_Design"))}
            style={{ width: "100%", border: "none" }}
        >
            Send a Private Message
        </button>
      </div>

      <ul className="dropdown hover-effect">
        <li className={`dropdown-item ${pathname === "/profile" ? "active" : ""}`}>
          <Link href="/profile">Profile Page</Link>
        </li>
        <li className={`dropdown-item ${pathname === "/profile/items" ? "active" : ""}`}>
          <Link href="/profile/items">Author's Items (103)</Link>
        </li>
        <li className={`dropdown-item ${pathname === "/profile/messages" ? "active" : ""}`}>
          <Link href="/profile/messages">Message Board</Link>
        </li>
        <li className={`dropdown-item ${pathname === "/profile/reviews" ? "active" : ""}`}>
          <Link href="/profile/reviews">Customer Reviews (42)</Link>
        </li>
        <li className={`dropdown-item ${pathname === "/profile/followers" ? "active" : ""}`}>
          <Link href="/profile/followers">Followers (5)</Link>
        </li>
        <li className={`dropdown-item ${pathname === "/profile/following" ? "active" : ""}`}>
          <Link href="/profile/following">Following (2)</Link>
        </li>
        <li className={`dropdown-item ${pathname === "/profile/badges" ? "active" : ""}`}>
          <Link href="/profile/badges">Author Badges (16)</Link>
        </li>
      </ul>

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
        <a href="#" className="button mid dark-light">Read all the reviews</a>
      </div>
    </>
  );

  return (
    <>
      <SectionHeader title="Author's Profile" breadcrumbs={breadcrumbs} />
      
      <div className="author-profile-banner"></div>

      <div className="author-profile-meta-wrap">
        <div className="author-profile-meta">
          <div className="author-profile-info">
            <div className="author-profile-info-item">
              <p className="text-header">Member Since:</p>
              <p>December 26th, 2013</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Total Sales:</p>
              <p>820</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Freelance Work:</p>
              <p>Available</p>
            </div>
            <div className="author-profile-info-item">
              <p className="text-header">Website:</p>
              <p><a href="#" className="primary">www.odindesign.com</a></p>
            </div>
          </div>
        </div>
      </div>

      <SidebarLayout 
        sidebarContent={sidebarContent} 
        mainContent={children} 
        sidebarPosition="left" 
        isOverflowable={true}
        sidebarClassName="author-profile"
      />
      <div className="clearfix"></div>
    </>
  );
}
