import { Link, NavLink } from 'react-router-dom';
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Dashboard</h3>
      <ul>
        <li><Link to="/host"> Me </Link></li>
        <li><NavLink to="/host/income"
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
        Income</NavLink></li>
        <li><NavLink to="/host/reviews"
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
        Reviews</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
