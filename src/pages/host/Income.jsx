import "./income.css";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const incomeData = [
  { month: 'Feb 2023', income: 8000 },
  { month: 'Mar 2023', income: 9500 },
  { month: 'Apr 2023', income: 11000 },
  { month: 'May 2023', income: 12200 },
  { month: 'Jun 2023', income: 10800 },
  { month: 'Jul 2023', income: 11500 },
  { month: 'Aug 2023', income: 13000 },
  { month: 'Sep 2023', income: 14200 },
  { month: 'Oct 2023', income: 13800 },
  { month: 'Nov 2023', income: 12500 },
  { month: 'Dec 2023', income: 11000 },
  { month: 'Jan 2024', income: 9800 },
  { month: 'Feb 2024', income: 10500 },
];

const Income = () => {
  return (
    <div className="income-container">
      <h2>Income Overview</h2>
      <div className="income-chart">
        <LineChart width={600} height={250} data={incomeData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="income" stroke="#4CAF50" />
        </LineChart>
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
