import logo from '../assets/vanlife.svg';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src={logo} alt="Vanlife Logo" className="navbar__logo" />
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__link">About</Link>
          </li>
          <li className="navbar__item">
            <Link to="/vans" className="navbar__link">Vans</Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact" className="navbar__link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
