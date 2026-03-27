"use client";
import Link from "next/link";
import "@/styles/sass/promo-banner.scss";
interface PromoBannerProps {
  title: string;
  description: string;
  buttonText: React.ReactNode;
  buttonHref?: string;
  theme: "primary" | "secondary" | "dark";
  position: "left" | "right";
  buttonTheme: "primary" | "secondary" | "dark";
}
export default function PromoBanner({
  title = "Start Selling",
  description = "Make money instantly!",
  buttonText = "Open Your Shop!",
  buttonHref = "#",
  theme = "dark",
  buttonTheme = "primary",
  position = "left",
}: PromoBannerProps) {
  return (
    <div className={`promo-banner ${theme} ${position}`}>
      <span className="icon-wallet"></span>
      <h5>{description}</h5>
      <h1>{title}</h1>
      <Link href={buttonHref} className={`button medium ${buttonTheme}`}>
        {buttonText}
      </Link>
    </div>
  );
}
