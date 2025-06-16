import React from 'react';
import RevenueCard from './RevenueCard';
import NewUsersCard from './NewUsersCard';
import SubscriptionsCard from './SubscriptionsCard';
import RecentActivityTable from './RecentActivityTable';
import ChartsPlaceholder from './ChartsPlaceholder';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <RevenueCard />
        <NewUsersCard />
        <SubscriptionsCard />
      </div>
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        <RecentActivityTable />
        <ChartsPlaceholder />
      </div>
    </div>
  );
};

export default Dashboard;

// RevenueCard.js
import React from 'react';
import { barChartData } from './chartData';
import { BarChart } from 'react-chartjs-2';

const RevenueCard = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-2xl font-bold text-gray-800">Revenue</h2>
      <BarChart data={barChartData} />
    </div>
  );
};

export default RevenueCard;

// NewUsersCard.js
import React from 'react';
import { lineChartData } from './chartData';
import { LineChart } from 'react-chartjs-2';

const NewUsersCard = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-2xl font-bold text-gray-800">New Users</h2>
      <LineChart data={lineChartData} />
    </div>
  );
};

export default NewUsersCard;

// SubscriptionsCard.js
import React from 'react';
import { doughnutChartData } from './chartData';
import { DoughnutChart } from 'react-chartjs-2';

const SubscriptionsCard = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-2xl font-bold text-gray-800">Active Subscriptions</h2>
      <DoughnutChart data={doughnutChartData} />
    </div>
  );
};

export default SubscriptionsCard;

// RecentActivityTable.js
import React from 'react';

const RecentActivityTable = () => {
  const data = [
    {
      id: 1,
      user: 'John Doe',
      activity: 'Created a new account',
      date: '2022-01-01',
    },
    {
      id: 2,
      user: 'Jane Smith',
      activity: 'Subscribed to Pro Plan',
      date: '2022-01-02',
    },
    // Add more data as needed
  ];

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-2xl font-bold text-gray-800">Recent Activity</h2>
      <table className="w-full table-auto border-collapse text-left text-sm">
        <thead>
          <tr>
            <th className="p-2 border border-gray-300">User</th>
            <th className="p-2 border border-gray-300">Activity</th>
            <th className="p-2 border border-gray-300">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="p-2 border border-gray-300">{item.user}</td>
              <td className="p-2 border border-gray-300">{item.activity}</td>
              <td className="p-2 border border-gray-300">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivityTable;

// ChartsPlaceholder.js
import React from 'react';

const ChartsPlaceholder = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-2xl font-bold text-gray-800">Charts Placeholder</h2>
      <div className="h-48 bg-gray-300" />
      <div className="h-48 bg-gray-300" />
      <div className="h-48 bg-gray-300" />
    </div>
  );
};

export default ChartsPlaceholder;

// chartData.js
export const barChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [120, 190, 300, 500, 200, 100, 400, 250, 350, 600, 700, 900],
      backgroundColor: '#4caf50',
    },
  ],
};

export const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'New Users',
      data: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      borderColor: '#4caf50',
      borderWidth: 2,
    },
  ],
};

export const doughnutChartData = {
  labels: ['Pro', 'Basic', 'Free'],
  datasets: [
    {
      label: 'Active Subscriptions',
      data: [150, 200, 300],
      backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
    },
  ],
};