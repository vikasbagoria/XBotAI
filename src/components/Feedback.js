import React, { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="feedback-section">
      <h3>Rate Your Experience</h3>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} onClick={() => setRating(star)}>
            {star <= rating ? "★" : "☆"}
          </span>
        ))}
      </div>
      <textarea
        placeholder="Leave your feedback..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="button">Submit Feedback</button>
    </div>
  );
};

export default Feedback;
