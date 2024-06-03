import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

// this component takes in props: 
// customers (list of customers)
// products (list of products)
// numberOfProducts (total number of products)
// orders (list of orders)
// handleViewChange (function to change the current view)

const DashboardView = ({ customers, products, numberOfProducts, orders, handleViewChange }) => {
  const totalCustomers = customers.buyers.length + customers.sellers.length; // we calculate total number of customers in the two tables
  const totalOrders = orders.length; // we calculate total number of orders
  const pieData = [
    { name: "Buyers", value: customers.buyers.length },
    { name: "Sellers", value: customers.sellers.length },
  ]; // we give the data to the pie chart in order to represent buyers and sellers
  const COLORS = ["#0088FE", "#FF8042"]; // we choose colors for the pie chart slices

  // we create a function to display only the top 5 products who have the biggest stock sorted 
  const topProductsByStock = products
    .sort((a, b) => b.stock - a.stock)
    .slice(0, 5);

  return (
    <>
      <header className="admin-header-dashboard">
        <h1 className="admin-main-title">Dashboard</h1> 
        <div className="admin-stats"> 
          <div className="admin-stat-container">
            <h3>{totalCustomers}</h3> 
            <p>Customers</p>
          </div>
          <div className="admin-stat-container">
            <h3>{numberOfProducts}</h3> 
            <p>Products</p>
          </div>
          <div className="admin-stat-container">
            <h3>{totalOrders}</h3> 
            <p>Orders</p>
          </div>
        </div>
      </header>
      <section className="admin-main-section">
        <div className="admin-top-stock"> 
          <div className="admin-top-stock-header"> 
            <h2 className="admin-red-title">Stock Leaders</h2>
            <button
              className="admin-see-more-button"
              onClick={() => handleViewChange("products")}
              style={{ marginLeft: 'auto' }} 
            >
              See More 
            </button>
          </div>
          <table> 
            <thead>
              <tr>
                <th>Product</th>
                <th>ID</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {topProductsByStock.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.id}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <section className="admin-role-stats-chart"> 
          <div className="admin-role-stats-header"> 
            <h3 className="admin-red-title">Role Stats</h3>
            <button
              className="admin-see-more-button admin-edge"
              onClick={() => handleViewChange("customers")}
            >
              See More 
            </button>
          </div>
          <PieChart width={200} height={200}> 
            <Pie
              data={pieData}
              cx={100}
              cy={100}
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))} 
            </Pie>
            <Tooltip /> 
          </PieChart>
        </section>
      </section>
    </>
  );
};

export default DashboardView;
