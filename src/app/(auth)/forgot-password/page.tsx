"use client";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import "@/styles/sass/popups.scss";

export default function ForgotPasswordPage() {
  const breadcrumbs = [
    { title: "Home", path: "/" },
    { title: "Restore Password", path: "/forgot-password" },
  ];

  return (
    <>
      <SectionHeader title="Restore your Password" breadcrumbs={breadcrumbs} />
      <div className="section-wrap">
        <div className="section">
          <div className="form-popup">
            <div className="form-popup-content">
              <h4 className="popup-title">Restore your Password</h4>
              <hr className="line-separator short" />
              <p className="spaced">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
              
              <form id="restore-pwd-form">
                <label htmlFor="email_address" className="rl-label">Email Address</label>
                <input type="email" id="email_address" name="email_address" placeholder="Enter your email address..." />
                
                <input type="checkbox" id="generate_pwd" name="generate_pwd" defaultChecked />
                <label htmlFor="generate_pwd" className="label-check">
                  <span className="checkbox primary"><span></span></span>
                  Generate new password
                </label>
                
                <p style={{marginBottom: "20px"}}>Remembered your password? <Link href="/login" className="primary">Login here!</Link></p>

                <button className="button mid dark no-space">Restore your <span className="primary">Password</span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
