import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<p>About</p>}></Route>
      <Route path="/:catchAll(.*)" element={<p>Not found</p>}></Route>
    </Routes>

  </Router>,
)
