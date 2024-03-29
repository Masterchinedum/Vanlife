import { NavLink } from 'react-router-dom';
import "./DVDmenu.css";


const DVDmenu = () => {
  return (
    <div className="DVDmenucontainer">
      <ul className='dvdMenu'>
        <li><NavLink to="."
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

export default DVDmenu;
