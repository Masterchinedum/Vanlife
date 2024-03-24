import "./Dashboard.css";

const Dashboard = () => {
  return (
        <div className="main-content">
          <div className="header">
            <h1>Welcome to Your Dashboard</h1>
            <p>Manage your tasks, view statistics, and more.</p>
          </div>
          <div className="content">
            <div className="task-list">
              <h2>Tasks</h2>
              <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
              </ul>
            </div>
            <div className="statistics">
              <h2>Statistics</h2>
              <p>Total Users: 100</p>
              <p>Active Users: 80</p>
              <p>Inactive Users: 20</p>
            </div>
          </div>
        </div>
  );
};

export default Dashboard;
