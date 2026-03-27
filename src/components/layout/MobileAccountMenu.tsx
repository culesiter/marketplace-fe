"use client";
import Link from "next/link";
import { APP_ROUTES } from "@/config/routes";

interface MobileAccountMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileAccountMenu({ isOpen, onClose }: MobileAccountMenuProps) {
  const dashboardItems = APP_ROUTES.find(r => r.id === 'dashboard')?.children || [];

  return (
    <div id="account-options-menu" className={`side-menu right ${isOpen ? "open" : "closed"}`}>
      <svg className="svg-plus" onClick={onClose}>
        <use xlinkHref="#svg-plus"></use>
      </svg>

      <div className="side-menu-header">
        <div className="user-quickview">
          <Link href="/profile" onClick={onClose}>
            <div className="outer-ring">
              <div className="inner-ring"></div>
              <figure className="user-avatar">
                <img src="/images/avatars/avatar_01.jpg" alt="avatar" />
              </figure>
            </div>
          </Link>
          <p className="user-name">Johnny Fisher</p>
          <p className="user-money">$745.00</p>
        </div>
      </div>

      <p className="side-menu-title">Your Account</p>
      <ul className="dropdown dark hover-effect">
         {/* Standard account links */}
         <li className="dropdown-item">
            <Link href="/account/notifications" onClick={onClose}>Notifications</Link>
         </li>
         <li className="dropdown-item">
            <Link href="/dashboard/inbox" onClick={onClose}>Messages</Link>
         </li>
         <li className="dropdown-item">
            <Link href="/cart" onClick={onClose}>Your Cart</Link>
         </li>
      </ul>

      <p className="side-menu-title">Dashboard</p>
      <ul className="dropdown dark hover-effect">
        {dashboardItems.map(item => (
          <li key={item.id} className="dropdown-item">
            <Link href={item.path || '#'} onClick={onClose}>{item.title}</Link>
          </li>
        ))}
      </ul>
      
      <Link href="/logout" className="button medium secondary" onClick={onClose}>Logout</Link>
      <Link href="/sell" className="button medium primary" onClick={onClose}>Become a Seller</Link>
    </div>
  );
}
