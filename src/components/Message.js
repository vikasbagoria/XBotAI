import React, { useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const Message = ({ message }) => {
  const [feedback, setFeedback] = useState(null);
  const isAI = message.sender === "ai";

  return (
    <div className={`message ${isAI ? "ai-message" : "user-message"}`}>
      <p>
        {isAI && <span>Soul AI</span>} {message.text}
      </p>

      {isAI && (
        <div className="feedback-icons">
          <FaRegThumbsUp
            onClick={() => setFeedback("like")}
            className={feedback === "like" ? "selected" : ""}
          />
          <FaRegThumbsDown
            onClick={() => setFeedback("dislike")}
            className={feedback === "dislike" ? "selected" : ""}
          />
        </div>
      )}
    </div>
  );
};

export default Message;
