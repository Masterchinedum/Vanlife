import { Outlet } from 'react-router-dom';
import "./Dashboard.css";
import Sidebar from './Sidebar';

const DashLayout  = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashLayout
