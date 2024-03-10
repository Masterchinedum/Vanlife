import logo from '../assets/vanlife.svg';
import './Navbar.css'; // Import your CSS file for styling
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <Link to = '/'>
          <img src={logo} alt="Vanlife Logo" className="navbar__logo" />
        </Link>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <NavLink to="/" 
            className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
              Home</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/host" 
            className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
              Host</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/about" 
            className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
              About</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/vans" 
            className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
              Vans</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contact" 
            className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
              Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
