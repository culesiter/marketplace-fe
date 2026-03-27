"use client";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import "@/styles/sass/popups.scss";

export default function LoginPage() {
  const breadcrumbs = [
    { title: "Home", path: "/" },
    { title: "Login", path: "/login" },
  ];

  return (
    <>
      <SectionHeader title="Login to your Account" breadcrumbs={breadcrumbs} />
      <div className="section-wrap">
        <div className="section">
          <div className="form-popup">
            <div className="form-popup-content">
              <h4 className="popup-title">Login to your Account</h4>
              <hr className="line-separator" />
              <form id="login-form">
                <label htmlFor="username" className="rl-label">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username here..." />
                
                <label htmlFor="password" id="password" className="rl-label">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password here..." />
                
                <input type="checkbox" id="remember" name="remember" defaultChecked />
                <label htmlFor="remember" className="label-check">
                  <span className="checkbox primary"><span></span></span>
                  Remember username and password
                </label>
                <p >Forgot your password? <Link href="/forgot-password" className="primary">Click here!</Link></p>
                <p style={{marginTop: "10px"}}>Don't have an account? <Link href="/register" className="primary">Register Now!</Link></p>
                <button className="button mid dark">Login <span className="primary">Now!</span></button>
              </form>
              
              <hr className="line-separator double" />
              
              <a href="#" className="button mid fb half">Login with Facebook</a>
              <a href="#" className="button mid twt half">Login with Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
