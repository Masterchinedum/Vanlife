import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Dashboard</h3>
      <ul>
        <li><Link to="/host">Me</Link></li>
        <li><Link to="/host/income">Income</Link></li>
        <li><Link to="/host/reviews">Reviews</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
