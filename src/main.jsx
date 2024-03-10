import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; // Import Navigate directly

import App from './App.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans.jsx';
import Error404 from './pages/Error404.jsx'; 
import VanDetail from './pages/VanDetail.jsx';

import './index.css';
import Layout from './components/Layout.jsx';
import {Layout as dLayout} from "./pages/host/Layout"
import Dashboard from './pages/host/Dashboard.jsx';
import Income from './pages/host/Income.jsx';
import Reviews from './pages/host/Reviews.jsx';

import('./server');


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Layout />} >
        <Route index element={<App />} />
        <Route path="host" element={<dLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element = {<Reviews />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />
        <Route path="*" element={<Error404 />} /> {/* Render the Error404 component for any unmatched route */}
      </Route>
    </Routes>
  </BrowserRouter>
);
