import React, { useState } from "react";
import Message from "./Message";
import sampleData from "../data";

const ChatWindow = () => {
  const [messages, setMessages] = useState(sampleData[0].conversation);
  const [input, setInput] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const aiMessage = {
      text: "Sorry, Did not understand your query!",
      sender: "ai",
    };

    setMessages([...messages, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <h1>Chat with AI</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="chat-input">
        <input
          type="text"
          placeholder='Message Bot AI...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ask</button>
      </form>

      <button type="button" className="save-button">Save Chat</button>
    </div>
  );
};

export default ChatWindow;
