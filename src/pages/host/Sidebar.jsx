import { NavLink } from 'react-router-dom';
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><NavLink to="."
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}
        end> 
        Dashboard </NavLink></li>
        <li><NavLink to="income"
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
        Income</NavLink></li>
        <li><NavLink to="vans"
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
        Vans </NavLink></li>
        <li><NavLink to="reviews"
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
        Reviews</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
