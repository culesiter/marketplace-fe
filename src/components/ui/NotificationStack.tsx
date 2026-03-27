"use client";

import AlertBox from "./AlertBox";
import MessagePopup from "./MessagePopup";

export default function NotificationStack() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 100000,
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "flex-end",
        gap: "20px",
        pointerEvents: "none",
      }}
    >
      <div style={{ pointerEvents: "auto" }}>
        <MessagePopup />
      </div>
      <div style={{ pointerEvents: "auto" }}>
        <AlertBox />
      </div>
    </div>
  );
}
