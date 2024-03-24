import { NavLink } from 'react-router-dom';
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><NavLink to="description"
        relative='path'
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}
        end> 
        Details </NavLink></li>
        <li><NavLink to="price"
        relative='path'
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
        Pricing</NavLink></li>
        <li><NavLink to="images"
        relative='path'
        className={({isActive}) => isActive ? "activeLink" : "otherLink"}>
        photos </NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
