"use client";

import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeAlertBox } from "@/store/slices/uiSlice";
import "@/styles/sass/alert-boxes.scss";

export default function AlertBox() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.alertBox.isOpen);

  if (!isOpen) return null;

  return (
    <div
      className="survey xmalert alert-box"
      style={{
        visibility: "visible",
        opacity: 1,
        position: "relative",
        transition: "0.3s ease-in-out",
        margin: "0"
      }}
    >
      <figure className="survey-img">
        <img src="/images/dashboard/alert-logo.png" alt="survey-img" />
      </figure>
      <p className="text-header">Alerts &amp; Notifications</p>
      <p className="info">
        We added alerts &amp; notifications to the template!. Try our previewer
        and code generator and use them in your page!
      </p>
      <p className="timestamp"></p>
      <Link href="/alerts-notifications" className="button mid dark">
        Check it <span className="primary">out!</span>
      </Link>
      <img
        className="close-btn"
        src="/images/dashboard/notif-close-icon.png"
        alt="close-icon"
        onClick={() => dispatch(closeAlertBox())}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
