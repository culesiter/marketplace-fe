"use client";
import "@/styles/sass/menu.scss";
import Link from 'next/link';
import { useState } from 'react';
import { APP_ROUTES } from '@/config/routes';
import { MenuItem } from '@/types/menu';

export default function Menu() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const mainNavItems = APP_ROUTES.filter(route => !route.roles || route.roles.length === 0);

  return (
    <div className="main-menu-wrap">
      <div className="menu-bar">
        <nav>
          <ul className="main-menu">
            {mainNavItems.map((item) => (
              <li 
                key={item.id} 
                className={`menu-item ${item.groups || item.children ? 'sub' : ''}`}
                onMouseEnter={() => (item.groups || item.children) && setActiveDropdown(item.id)}
                onMouseLeave={() => (item.groups || item.children) && setActiveDropdown(null)}
              >
                <Link href={item.path || '#'}>
                  {item.title}
                  {(item.groups || item.children) && (
                    <svg className="svg-arrow">
                      <use xlinkHref="#svg-arrow"></use>
                    </svg>
                  )}
                  {item.badge && <span className={`pin ${item.badgeTheme || 'secondary'}`}>{item.badge}</span>}
                </Link>

                {item.groups && (
                  <div className={`content-dropdown ${activeDropdown === item.id ? 'open' : 'closed'}`}>
                    {item.groups.map((group, gIndex) => (
                        <div key={gIndex} className="feature-list-block">
                            <h6 className="feature-list-title">{group.title}</h6>
                            <hr className="line-separator" />
                            <ul className="feature-list">
                                {group.items.map((child) => (
                                    <li key={child.id} className="feature-list-item">
                                        <Link href={child.path || '#'}>
                                            {child.title}
                                            {child.badge && <span className={`pin ${child.badgeTheme || 'primary'}`}>{child.badge}</span>}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                  </div>
                )}

                {!item.groups && item.children && (
                   <ul className={`dropdown ${activeDropdown === item.id ? 'open' : 'closed'}`}>
                      {item.children.map(child => (
                         <li key={child.id} className="dropdown-item">
                            <Link href={child.path || '#'}>{child.title}</Link>
                         </li>
                      ))}
                   </ul>
                )}
              </li>
            ))}
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
  );
}
