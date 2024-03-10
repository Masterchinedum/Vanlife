import { NavLink } from 'react-router-dom';
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><NavLink to="/host"
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}
        end> 
        Dashboard </NavLink></li>
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
