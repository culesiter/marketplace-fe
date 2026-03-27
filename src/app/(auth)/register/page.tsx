"use client";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import "@/styles/sass/popups.scss";

export default function RegisterPage() {
  const breadcrumbs = [
    { title: "Home", path: "/" },
    { title: "Register", path: "/register" },
  ];

  return (
    <>
      <SectionHeader title="Register Account" breadcrumbs={breadcrumbs} />
      <div className="section-wrap">
        <div className="section">
          <div className="form-popup">
            <div className="form-popup-content">
              <h4 className="popup-title">Register Account</h4>
              <hr className="line-separator" />
              <form id="register-form">
                <label htmlFor="email_address" className="rl-label required">Email Address</label>
                <input type="email" id="email_address" name="email_address" placeholder="Enter your email address here..." />
                
                <label htmlFor="username" className="rl-label">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username here..." />
                
                <label htmlFor="password" id="password" className="rl-label required">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password here..." />
                
                <label htmlFor="repeat_password" id="repeat_password" className="rl-label required">Repeat Password</label>
                <input type="password" id="repeat_password" name="repeat_password" placeholder="Repeat your password here..." />
                
                <p>Already have an account? <Link href="/login" className="primary">Login here!</Link></p>

                <button className="button mid dark">Register <span className="primary">Now!</span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
