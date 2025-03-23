import React from "react";
import sampleData from "../data";

const HistoryPage = () => {
  return (
    <div className="history-container">
      <h2>Past Conversations</h2>
      {sampleData.map((conv) => (
        <div key={conv.id} className="conversation-card">
          <h3>Conversation {conv.id}</h3>
          {conv.conversation.map((msg, i) => (
            <p key={i}>
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))}
          <p><strong>Rating:</strong> {conv.feedback.rating}/5</p>
          <p><strong>Feedback:</strong> {conv.feedback.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;
