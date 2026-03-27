"use client";
import { ReactNode } from "react";

interface SidebarLayoutProps {
  sidebarContent: ReactNode;
  mainContent: ReactNode;
  sidebarPosition?: "left" | "right";
  sidebarClassName?: string;
  isOverflowable?: boolean;
}

export default function SidebarLayout({
  sidebarContent,
  mainContent,
  sidebarPosition = "left",
  sidebarClassName = "",
  isOverflowable = false,
}: SidebarLayoutProps) {
  // Sidebar FIRST in HTML for standard float clearance
  return (
    <div className="section-wrap">
      <div className={`section ${isOverflowable ? "overflowable" : ""}`}>
        <aside className={`sidebar ${sidebarPosition} ${sidebarClassName}`}>
          {sidebarContent}
        </aside>
        <div className={`content ${sidebarPosition === "left" ? "right" : "left"}`}>
          {mainContent}
        </div>
      </div>
    </div>
  );
}
