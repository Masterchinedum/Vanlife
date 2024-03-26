//main.jsx

import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; // Import Navigate directly

import App from './App.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans.jsx';
import Error404 from './pages/Error404.jsx'; 
import VanDetail from './pages/VanDetail.jsx';
import DashLayout from "./pages/host/DashLayout.jsx";
import './index.css';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/host/Dashboard.jsx';
import Income from './pages/host/Income.jsx';
import Reviews from './pages/host/Reviews.jsx';
import DashVans from './pages/host/DashVans.jsx';
import DashVandet from './pages/host/DashVan/DashVandet.jsx';
import DvDetail from './pages/host/DashVan/DvDetail.jsx';
import DvDPrice from './pages/host/DashVan/DvDPrice.jsx';
import DVDImage from './pages/host/DashVan/DVDImage.jsx';

import('./server');


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Layout />} >
        <Route index element={<App />} />
        <Route path="host" element={<DashLayout /> }>
          <Route index element={<Dashboard /> } />
          <Route path="income" element={<Income />} />
          <Route path='vans' element = {<DashVans />} />
          <Route path='vans/:vanId' element = {<DashVandet />} >
            <Route index element = {<DvDetail />} />
            <Route path='price' element = {<DvDPrice />} />
            <Route path = "images" element = {<DVDImage />} />
          </Route>
          <Route path="reviews" element = {<Reviews />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:vanId" element={<VanDetail />} />
        <Route path="*" element={<Error404 />} /> {/* Render the Error404 component for any unmatched route */}
      </Route>
    </Routes>
  </BrowserRouter>
);
