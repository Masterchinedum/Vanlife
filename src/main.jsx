import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/:catchAll(.*)" element={<p>Not found</p>}></Route>
    </Routes>

  </Router>,
)
