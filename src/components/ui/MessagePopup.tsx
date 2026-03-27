"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeChatBox } from "@/store/slices/uiSlice";
import "@/styles/sass/message-popup.scss";

export default function MessagePopup() {
  const dispatch = useAppDispatch();
  const { isOpen, recipient } = useAppSelector((state) => state.ui.chatBox);
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSend = () => {
    setIsSent(true);
  };

  const messages = [
    {
      id: 1,
      sender: "Johnny Fisher",
      avatar: "/images/avatars/avatar_01.jpg",
      text: "Hello, I have a question about your item. Is it still available?",
      time: "2:30 PM",
      isMe: true
    },
    {
      id: 2,
      sender: recipient || "Odin_Design",
      avatar: "/images/avatars/avatar_09.jpg",
      text: "Hi Johnny! Yes, it is still available for purchase.",
      time: "2:31 PM",
      isMe: false
    },
    {
      id: 3,
      sender: "Johnny Fisher",
      avatar: "/images/avatars/avatar_01.jpg",
      text: "Great! Does it include the source files for the flyer?",
      time: "2:32 PM",
      isMe: true
    },
    {
      id: 4,
      sender: recipient || "Odin_Design",
      avatar: "/images/avatars/avatar_09.jpg",
      text: "Yes, it includes high-resolution PSD and AI files.",
      time: "2:35 PM",
      isMe: false
    }
  ];

  return (
    <div className="message-popup">
      <div className="message-popup-content">
        <header className="message-popup-header">
          <h4 className="popup-title">{isSent ? `${recipient || 'Author'}` : "Send a Private Message"}</h4>
          <img
            src="/images/dashboard/notif-close-icon.png"
            alt="close"
            className="close-btn"
            onClick={() => {
              dispatch(closeChatBox());
              setIsSent(false);
            }}
          />
        </header>
        
        {!isSent ? (
          <form className="message-popup-form">
            <div className="input-container">
              <label htmlFor="mailto" className="rl-label b-label required">To:</label>
              <input 
                  type="text" 
                  id="mailto" 
                  name="mailto" 
                  defaultValue={recipient || "Select an author..."} 
                  disabled 
              />
            </div>

            <div className="input-container">
              <label htmlFor="subject" className="rl-label b-label">Subject:</label>
              <input type="text" id="subject" name="subject" placeholder="Enter your subject here..." />
            </div>

            <div className="input-container">
              <label htmlFor="message" className="rl-label b-label required">Your Message:</label>
              <textarea id="message" name="message" placeholder="Write your message here..." style={{ height: "120px" }}></textarea>
            </div>

            <div className="form-actions">
              <button className="button mid dark" type="button" onClick={handleSend}>
                Send <span className="primary">Message</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="chat-history-wrapper">
            <div className="chat-history">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-bubble-row ${msg.isMe ? 'me' : 'not-me'}`}>
                  {!msg.isMe && (
                    <figure className="user-avatar small">
                      <img src={msg.avatar} alt={msg.sender} />
                    </figure>
                  )}
                  <div className="chat-bubble">
                    {msg.text}
                    <div className="timestamp">
                       {msg.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="chat-input-row">
               <div className="chat-input-container">
                  <textarea 
                    name="reply" 
                    placeholder="Type your message..." 
                  ></textarea>
                  <button className="button secondary">
                    Send
                  </button>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
