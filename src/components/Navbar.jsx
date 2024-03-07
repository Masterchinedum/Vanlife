import logo from '../assets/vanlife.svg';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <Link to = '/'>
          <img src={logo} alt="Vanlife Logo" className="navbar__logo" />
        </Link>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/host" className="navbar__link">Host</Link>
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
      </nav>
    </header>
  );
};

export default Navbar;
