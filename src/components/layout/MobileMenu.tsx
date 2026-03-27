"use client";
import Link from "next/link";
import { APP_ROUTES } from "@/config/routes";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const mainNavItems = APP_ROUTES.filter(route => !route.roles || route.roles.length === 0);

  return (
    <div id="mobile-menu" className={`side-menu left ${isOpen ? "open" : "closed"}`}>
      <svg className="svg-plus" onClick={onClose}>
        <use xlinkHref="#svg-plus"></use>
      </svg>

      <div className="side-menu-header">
        <figure className="logo small">
          <img src="/images/logo.png" alt="logo" />
        </figure>
      </div>

      <p className="side-menu-title">Main Links</p>

      <ul className="dropdown dark hover-effect interactive">
        {mainNavItems.map((item) => (
          <li key={item.id} className="dropdown-item">
            <Link href={item.path || "#"} onClick={onClose}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
