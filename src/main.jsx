import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import About from './pages/About.jsx';
import './index.css';
import Vans from './pages/Vans.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/vans" element={<Vans /> }> </Route>
      <Route path="/:catchAll(.*)" element={<p>Not found</p>}></Route>
    </Routes>

  </Router>,
)
