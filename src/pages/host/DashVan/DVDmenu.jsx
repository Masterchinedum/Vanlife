import { NavLink } from 'react-router-dom';
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><NavLink to="."
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}
        end> 
        Details </NavLink></li>
        <li><NavLink to="income"
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
        Pricing</NavLink></li>
        <li><NavLink to="vans"
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
        photos </NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
