import React, { useState } from "react";
import "../CSS/adminDashboard.css";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const AdminDashboard = () => {
  const [cutomerRole, setcutomerRole] = useState("All");

  const chooseCustomerRole = (event) => {
    setcutomerRole(event.target.value);
  };

  const data = [
    { name: "Buyers", value: 60 },
    { name: "Sellers", value: 40 },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>
          <span className="ex">Ex</span>
          <span className="clusive">clusive</span>
        </h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>
              Customers
              <select value={cutomerRole} onChange={chooseCustomerRole}>
                <option value="All">All</option>
                <option value="Sellers">Sellers</option>
                <option value="Buyers">Buyers</option>
              </select>
            </li>
            <li>Products</li>
            <li>Orders</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h1 className="main-title">Dashboard</h1>
          <div className="stats">
            <div className="stat-container">
              <h3>NUMBER</h3>
              <p>Customers</p>
            </div>
            <div className="stat-container">
              <h3>NUMBER</h3>
              <p>Products</p>
            </div>
            <div className="stat-container">
              <h3>NUMBER</h3>
              <p>Orders</p>
            </div>
          </div>
        </header>
        <section className="main-section">
          <div className="top-selling">
            <div className="top-selling-header">
              <h2 className="red-title">Top Selling Products</h2>
              <button className="see-more-button">See More</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Seller</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>seller name </td>
                  <td>seller email</td>
                  <td>666</td>
                </tr>
              </tbody>
            </table>
          </div>
          <section className="role-stats-chart">
            <div className="role-stats-header">
              <h3 className="red-title">Role Stats</h3>
              <button className="see-more-button edge">See More</button>
            </div>
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={50}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </section>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
