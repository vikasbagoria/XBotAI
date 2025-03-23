import React, { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

const ChatWindow = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setMessages(savedMessages);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    if (!input.trim()) return;

    const foundAnswer = data.find((item) => item.question.toLowerCase() === input.toLowerCase());
    const aiResponse = foundAnswer ? foundAnswer.answer : "Sorry, Did not understand your query!";

    const newMessages = [...messages, { text: input, sender: "user" }, { text: aiResponse, sender: "ai" }];
    setMessages(newMessages);
    localStorage.setItem("chatHistory", JSON.stringify(newMessages));
    setInput("");
  };

  const handleNewChat = () => {
    setMessages([]);
    localStorage.removeItem("chatHistory");
  };

  return (
    <div>
      <header>
        <h1>Bot AI</h1> 
      </header>

      <nav>
      <a href="/" onClick={handleNewChat}>New Chat</a>
        <Link to="/history">Past Conversations</Link>
      </nav>

      <div className="chat-container">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === "ai" ? "ai-response" : "user-message"}>
            {msg.sender === "ai" && <span>Soul AI</span>} {msg.text}
          </p>
        ))}
      </div>

      {/* ✅ Wrap input and button inside a form */}
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Message Bot AI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ask</button> {/* ✅ Ensures form submission works */}
      </form>
    </div>
  );
};

export default ChatWindow;
