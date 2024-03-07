import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Dashboard</h3>
      <ul>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/dashboard/income">Income</Link></li>
        <li><Link to="/dashboard/reviews">Reviews</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
