import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'; // Import Navigate explicitly

import App from './App.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans.jsx';
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
      <Route path="/vans/:id" element = {<VanDetail />} />
      <Route path="*" element={<Navigate replace to="/404" />} /> 
       // here we use the Navigate component to redirect to a 404 page when any other route is accessed
    </Routes>
    <footer>
      <Footer />
    </footer>
  </BrowserRouter>
);
