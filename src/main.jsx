import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const listener = (error) => {
      setHasError(true);
      console.error('Error during rendering:', error);
    };

    window.addEventListener('error', listener);
    return () => window.removeEventListener('error', listener);
  }, []);

  return hasError ? (
    <div>
      <h1>Something went wrong!</h1>
      <p>Our developers are working on resolving this issue.</p>
    </div>
  ) : (
    children
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/:catchAll(.*)" element={<p>Not found</p>}></Route>
      </Routes>
    </ErrorBoundary>
  </Router>,
);
