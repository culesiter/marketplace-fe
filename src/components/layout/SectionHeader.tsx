"use client";
import Link from "next/link";
import { BreadcrumbItem } from "@/types/menu";

interface SectionHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  variant?: 'v1' | 'v2' | 'v3';
}

export default function SectionHeader({ title, breadcrumbs, variant }: SectionHeaderProps) {
  return (
    <div className={`section-headline-wrap ${variant ? variant : ''}`}>
      <div className="section-headline">
        <h2>{title}</h2>
        <p>
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const key = `${item.path}-${index}`;
            return isLast ? (
              <span key={key} className="current-section">{item.title}</span>
            ) : (
              <span key={key}><Link href={item.path} style={{ color: 'inherit' }}>{item.title}</Link><span className="separator">/</span></span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
