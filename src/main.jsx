import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate directly

import App from './App.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans.jsx';
import Error404 from './pages/Error404.jsx'; 
import VanDetail from './pages/VanDetail.jsx';

import './index.css';
import Layout from './components/Layout.jsx';

import('./server');


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route  element={<Layout />} >
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
        <Route path="*" element={<Error404 />} /> {/* Render the Error404 component for any unmatched route */}
      </Route>
    </Routes>
  </BrowserRouter>
);
