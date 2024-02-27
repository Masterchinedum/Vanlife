import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate directly

import App from './App.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans.jsx';
import Error404 from './pages/Error404.jsx'; 
import VanDetail from './pages/VanDetail.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

// Conditionally import server logic for development
if (process.env.NODE_ENV === 'development') {
  import('./server');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
      <Route path="/vans/:id" element={<VanDetail />} />
      <Route path="*" element={<Error404 />} /> {/* Render the Error404 component for any unmatched route */}
    </Routes>
    <footer>
      <Footer />
    </footer>
  </BrowserRouter>
);
