import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
import App from './App.jsx';
import About from './pages/About.jsx';
import Vans from './pages/Vans.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/vans" element={<Vans /> }> </Route>
      {/* <Route path="*" element={<Navigate replace to="/404" />} /> */}
    </Routes>

  </Router>,
)
