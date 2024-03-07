import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/host" className="sidebar-link">
        Dashboard
      </Link>
      <Link to="/host/reviews" className="sidebar-link">
        Reviews
      </Link>
      <Link to="/host/income" className="sidebar-link">
        Income
      </Link>
    </div>
  );
};

export default Sidebar;
