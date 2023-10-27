import React, { useState } from "react";
import "./App.css";

const ChatApp = () => {
  const [customerMessage, setCustomerMessage] = useState("");
  const [botMessage, setBotMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleCustomerSend = () => {
    if (customerMessage.trim() === "") return;
    const newChat = [...chat, { text: customerMessage, sender: "customer" }];
    setChat(newChat);
    setCustomerMessage("");
  };

  const handleBotSend = () => {
    if (botMessage.trim() === "") return;
    const newChat = [...chat, { text: botMessage, sender: "bot" }];
    setChat(newChat);
    setBotMessage("");
  };

  return (
    <div className="chat-app">
      <div className="iphone-frame">
        <div className="chat-window">
          {chat.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <img
                src={
                  message.sender === "customer"
                    ? "customer-icon.png"
                    : "bot-icon.jpg"
                }
                alt={message.sender}
              />
              <p>{message.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-box">
        <input
          type="text"
          placeholder="Type a message..."
          value={customerMessage}
          onChange={(e) => setCustomerMessage(e.target.value)}
        />
        <button onClick={handleCustomerSend}>Send as customer</button>
      </div>
      <div className="text-box">
        <input
          type="text"
          placeholder="Type a message..."
          value={botMessage}
          onChange={(e) => setBotMessage(e.target.value)}
        />
        <button onClick={handleBotSend}>Send as bot</button>
      </div>
    </div>
  );
};

export default ChatApp;
