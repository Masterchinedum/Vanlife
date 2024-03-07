import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/dashboard/reviews" className="sidebar-link">
        Reviews
      </Link>
      <Link to="/dashboard/income" className="sidebar-link">
        Income
      </Link>
    </div>
  );
};

export default Sidebar;
