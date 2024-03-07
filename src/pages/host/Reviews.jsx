import React from 'react';

const reviewsData = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    review:
      "This product is amazing! It's easy to use and has all the features I need. I highly recommend it!",
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    review:
      "I'm generally satisfied with the product. It works well, but it could be improved with a few additional features.",
  },
  {
    id: 3,
    name: 'Michael Brown',
    rating: 3,
    review:
      "The product is okay, but it has some limitations. I might consider a different option next time.",
  },
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>
      <ul className="reviews-list">
        {reviewsData.map((review) => (
          <li key={review.id} className="review-item">
            <div className="reviewer-info">
              <span className="reviewer-name">{review.name}</span>
              <div className="rating">
                {Array(review.rating)
                  .fill(1)
                  .map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
              </div>
            </div>
            <p className="review-text">{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
