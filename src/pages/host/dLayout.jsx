import { Outlet } from 'react-router-dom';
import "./Dashboard.css";
import Sidebar from './Sidebar';

const dLayout  = () => {
  return (
    <div className="dashboard-container">
      <h3>Dashboard</h3>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default dLayout
