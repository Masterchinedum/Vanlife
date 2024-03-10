import { Outlet } from 'react-router-dom';
import "./Dashboard.css";
import Sidebar from './Sidebar';

const Layout  = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout
