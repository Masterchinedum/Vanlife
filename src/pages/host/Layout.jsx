import { Outlet } from 'react-router-dom';
import "./Dashboard.css";
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
