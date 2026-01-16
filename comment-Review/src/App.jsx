import React, { useState } from "react";
import "./App.css";


function ReviewApp() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !review) return;

    setReviews([...reviews, { name, review }]);
    setName("");
    setReview("");
  };

  return (
    <div>
      <h2>User Reviews</h2>

      <form onSubmit={handleSubmit}>
        <input className="text"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea className="text"
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>

        <button className="text" type="submit">Submit</button>
      </form>

      {reviews.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>{item.review}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewApp;
