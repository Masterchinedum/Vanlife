import "./income.css";

const Income = () => {
  const incomeData = [
    { month: 'January', income: '$10,000' },
    { month: 'February', income: '$12,500' },
    { month: 'March', income: '$15,200' },
  ];

  return (
    <div className="income-container">
      <h2>Income Overview</h2>
      <div className="income-chart">
        {/* Replace with your preferred charting library */}
        <p>Chart will be displayed here</p>
      </div>
      <ul className="income-list">
        {incomeData.map((item) => (
          <li key={item.month}>
            <span className="month">{item.month}</span>
            <span className="amount">{item.income}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Income;
