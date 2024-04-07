import React from 'react';
import { Link } from 'react-router-dom';
import Error404Image from '../assets/error404.png';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">Oops! Lost in the Metaverse?</h1>
        <p className="error-description">
          The page you're looking for seems to have gotten misplaced in the vast digital landscape. Don't worry, though, we can help you get back on track.
        </p>
        <div className="error-actions">
          <Link to="/" className="error-btn error-btn-primary">
            Go Home
          </Link>
          <Link to="/about" className="error-btn error-btn-secondary">
            Learn More About Us
          </Link>
        </div>
      </div>
      <div className="error-image-container">
        <img src={Error404Image} alt="404 Error" className="error-image" />
      </div>
    </div>
  );
};

export default Error404;