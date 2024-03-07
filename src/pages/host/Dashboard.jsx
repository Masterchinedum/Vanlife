import { Outlet } from 'react-router-dom';
import "./Dashboard.css";
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div>
        <div>
            <Sidebar />
        </div>
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard