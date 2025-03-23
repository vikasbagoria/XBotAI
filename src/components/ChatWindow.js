import React, { useState } from "react";
import data from "../data.json"; // Import the JSON file

const ChatWindow = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Find matching response from JSON
    const foundAnswer = data.find((item) => item.question.toLowerCase() === input.toLowerCase());

    // Use default message if no answer is found
    const aiResponse = foundAnswer ? foundAnswer.answer : "Sorry, Did not understand your query!";

    // Update chat messages
    setMessages([...messages, { text: input, sender: "user" }, { text: aiResponse, sender: "ai" }]);
    
    setInput(""); // Clear input field
  };

  return (
    <div>
      <div className="chat-container">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === "ai" ? "ai-response" : "user-message"}>
            {msg.sender === "ai" && <span>Soul AI</span>} {msg.text}
          </p>
        ))}
      </div>

      <input
        type="text"
        placeholder="Message Bot AI..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" onClick={handleSendMessage}>Ask</button>
    </div>
  );
};

export default ChatWindow;
