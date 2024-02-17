import logo from '../assets/vanlife.svg';
import './Navbar.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src={logo} alt="Vanlife Logo" className="navbar__logo" />
        <ul className="navbar__menu">
          <li className="navbar__item"><a Link="./" className="navbar__link">Home</a></li>
          <li className="navbar__item"><a Link="./about" className="navbar__link">About</a></li>
          <li className="navbar__item"><a href="#" className="navbar__link">Services</a></li>
          <li className="navbar__item"><a href="#" className="navbar__link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
