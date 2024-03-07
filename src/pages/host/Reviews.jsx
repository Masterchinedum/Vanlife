// Reviews.jsx

import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    { id: 1, author: 'John Doe', date: 'March 1, 2023', content: 'Great product, highly recommended!' },
    { id: 2, author: 'Jane Smith', date: 'April 15, 2023', content: 'Excellent service and quality.' },
    { id: 3, author: 'Alice Johnson', date: 'May 20, 2023', content: 'Very satisfied with my purchase.' },
    // Add more dummy data as needed
  ];

  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-header">
              <div className="author">{review.author}</div>
              <div className="date">{review.date}</div>
            </div>
            <div className="content">{review.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
