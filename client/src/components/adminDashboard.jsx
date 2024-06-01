import React, { useState, useEffect } from "react";
import "../CSS/adminDashboard.css";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const AdminDashboard = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [customers, setCustomers] = useState({ buyers: [], sellers: [] });
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchProductId, setSearchProductId] = useState("");
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  const COLORS = ["#0088FE", "#FF8042"];

  const handleViewChange = (view) => {
    setCurrentView(view);
    if (view === "customers") {
      fetchCustomers();
    } else if (view === "products") {
      fetchProducts();
    }
  };

  const fetchCustomers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users/getAll", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error("Couldn't retrieve customers list", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/products/get", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setProducts(data);
      setNumberOfProducts(data.length); 
    } catch (error) {
      console.error("Couldn't retrieve products list", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
    fetchProducts(); 
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchEmail(event.target.value);
  };

  const handleProductIdSearchChange = (event) => {
    setSearchProductId(event.target.value);
  };

  const deleteCustomer = async (email) => {
    try {
      await fetch(`http://localhost:8080/api/users/delete/${email}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      fetchCustomers();
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/products/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const filteredCustomers = () => {
    const filteredSellers = customers.sellers.filter((seller) =>
      seller.email.toLowerCase().includes(searchEmail.toLowerCase())
    );
    const filteredBuyers = customers.buyers.filter((buyer) =>
      buyer.email.toLowerCase().includes(searchEmail.toLowerCase())
    );

    switch (filter) {
      case "sellers":
        return { buyers: [], sellers: filteredSellers };
      case "buyers":
        return { buyers: filteredBuyers, sellers: [] };
      default:
        return { buyers: filteredBuyers, sellers: filteredSellers };
    }
  };

  // const filteredProducts = products.filter((product) =>
  //   product.id.toString().includes(searchProductId)
  // );

  const displayedCustomers = filteredCustomers();
  const totalCustomers = customers.buyers.length + customers.sellers.length;
  const pieData = [
    { name: "Buyers", value: customers.buyers.length },
    { name: "Sellers", value: customers.sellers.length },
  ];
  console.log(pieData);

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar-dashboard">
        <h2>
          <span className="admin-ex">Ex</span>
          <span className="admin-clusive">clusive</span>
        </h2>
        <nav>
          <ul>
            <li onClick={() => handleViewChange("dashboard")}>Dashboard</li>
            <li onClick={() => handleViewChange("customers")}>Customers</li>
            <li onClick={() => handleViewChange("products")}>Products</li>
            <li onClick={() => handleViewChange("orders")}>Orders</li>
          </ul>
        </nav>
      </aside>
      <main className="admin-main-content">
        {currentView === "dashboard" && (
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
                  <h3>NUMBER</h3>
                  <p>Orders</p>
                </div>
              </div>
            </header>
            <section className="admin-main-section">
              <div className="admin-top-selling">
                <div className="admin-top-selling-header">
                  <h2 className="admin-red-title">Top Selling Products</h2>
                  <button className="admin-see-more-button">See More</button>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Seller</th>
                      <th>Email</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Product Name</td>
                      <td>Seller Name</td>
                      <td>Seller Email</td>
                      <td>Address</td>
                    </tr>
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
          </>
        )}
        {currentView === "customers" && (
          <section className="admin-customers-section">
            <h2>Customers</h2>
            <div className="admin-filters">
              <select value={filter} onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="sellers">Sellers</option>
                <option value="buyers">Buyers</option>
              </select>
              <input
                type="text"
                placeholder="Search by email"
                value={searchEmail}
                onChange={handleSearchChange}
              />
            </div>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Role</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {displayedCustomers.sellers.map((seller) => (
                  <tr key={seller.email}>
                    <td>
                      <button onClick={() => deleteCustomer(seller.email)}>
                        Delete
                      </button>
                    </td>
                    <td>Seller</td>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <td>{seller.address}</td>
                  </tr>
                ))}
                {displayedCustomers.buyers.map((buyer) => (
                  <tr key={buyer.email}>
                    <td>
                      <button onClick={() => deleteCustomer(buyer.email)}>
                        Delete
                      </button>
                    </td>
                    <td>Buyer</td>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td>{buyer.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
        {currentView === "products" && (
          <section className="admin-products-section">
            <h2>Products</h2>
            <div className="admin-filters">
              <input
                type="text"
                placeholder="Search by product ID"
                value={searchProductId}
                onChange={handleProductIdSearchChange}
              />
            </div>
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <button onClick={() => deleteProduct(product.id)}>
                        Delete
                      </button>
                    </td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
