import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar"; 
import DashboardView from "./DashboardView"; 
import CustomersView from "./CustomersView"; 
import ProductsView from "./ProductsView"; 
import OrdersView from "./OrdersView"; 
import ConfirmationWindow from "./ConfirmationWindow"; 
import "../../CSS/adminDashboard.css"; 

const AdminDashboard = () => {
  // we declare a state that allows us to manage our current view between dashboard , customers, products, and orders
  // we give it dashboard as the default value 'cause that's the first component that we want to see 
  const [currentView, setCurrentView] = useState("dashboard"); 

  const [customers, setCustomers] = useState({ buyers: [], sellers: [] }); 
  const [products, setProducts] = useState([]); 
  const [orders, setOrders] = useState([]); // add state for orders
  const [filter, setFilter] = useState("all"); 
  const [searchEmail, setSearchEmail] = useState(""); 
  const [searchProductId, setSearchProductId] = useState(""); 
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [modalShow, setModalShow] = useState(false); 
  const [modalTitle, setModalTitle] = useState(""); 
  const [modalMessage, setModalMessage] = useState(""); 
  const [confirmAction, setConfirmAction] = useState(null); 

  // this function allows us to change the view based on our selection from the side bar 
  const handleViewChange = (view) => {
    setCurrentView(view); // we set the current view based on our selection
    if (view === "customers") {
      fetchCustomers(); // if we selected customers from the side bar we fetch customers 
    } else if (view === "products") {
      fetchProducts(); // if we selected products we fetch the products 
    } else if (view === "orders") {
      fetchOrders(); // if we selected orders we fetch the orders
    }
  };

  // we create a function to display all the users list (buyers and sellers) from our db
  const fetchCustomers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users/getAll", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"), 
        },
      });
      const data = await response.json();
      setCustomers(data); // we set the customers data
    } catch (error) {
      console.error("couldn't retrieve customers list", error); 
    }
  };

  // we do the same thing to fetch the list of products 
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/products/getAll", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"), 
        },
      });
      const data = await response.json();
      setProducts(data); // we set the products data
      setNumberOfProducts(data.length); // we set the number of products 
    } catch (error) {
      console.error("couldn't retrieve products list", error); 
    }
  };

  // we create a function to fetch the list of orders
  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cart/orders", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setOrders(data); // we set the orders data
    } catch (error) {
      console.error("couldn't retrieve orders list", error);
    }
  };

  // we use the useEffect hook to fetch customers, products, and orders when the component that we selected loads
  useEffect(() => {
    fetchCustomers(); // to fetch the list of customers 
    fetchProducts(); // to fetch the list of products 
    fetchOrders(); // to fetch the list of orders
  }, []);

  // now we create the function that delete users
  const deleteCustomer = async (email) => {
    try {
      await fetch(`http://localhost:8080/api/users/delete/${email}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"), 
        },
      });
      fetchCustomers(); // we refetch the list of customers (refresh after deleting)
    } catch (error) {
      console.error("Error deleting customer:", error); 
    }
  };

  // we create the function that allows us to delete a product 
  const deleteProduct = async (name) => {
    try {
      await fetch(`http://localhost:8080/api/products/del/${name}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"), 
        },
      });
      fetchProducts(); // as we did before we refetch the list of products after deleting 
    } catch (error) {
      console.error("Error deleting product:", error); 
    }
  };

  // we create a function to switch user role between buyer and seller
  const switchUserRole = async (email, newRole) => {
    try {
      await fetch("http://localhost:8080/api/users/change-role", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", 
          Authorization: "Bearer " + localStorage.getItem("token"), 
        },
        body: JSON.stringify({ email, newRole }), // the body should contain email and the new role
      });
      fetchCustomers(); // we refetch the list of customers as usual 
    } catch (error) {
      console.error("Error switching user role:", error); 
    }
  };

  // this function handles the delete click to prevent the admin from accidentally deleting a user
  const handleDeleteClick = (email) => {
    // a modal is that small window that pop up when we click on delete to confirm the action
    setModalTitle("Confirmation Window"); // we set the title of our modal 
    setModalMessage("Are you sure you want to delete this customer?"); // we set its message
    setConfirmAction(() => () => {
      deleteCustomer(email); // we set the action that we cant to confirm which is deleting a customer with his email as parametre
      setModalShow(false); // we need to hide the modal after chosing one of the two options 
    });
    setModalShow(true); // show the modal
  };

  // we do the same thing here to prevent the admin from accidentally changing / switching user's role 
  const handleSwitchClick = (email, newRole) => {
    setModalTitle("Confirmation Window"); // we set modal title
    setModalMessage(`Are you sure you want to switch this customer to ${newRole}?`); // we set modal message
    setConfirmAction(() => () => {
      switchUserRole(email, newRole); // we set  the confirmation action to switch user role
      setModalShow(false); // hide modal after choosing one of the two options 
    });
    setModalShow(true); // display the modal
  };

  // same thing here to prevent the admin from deleting a product 
  const handleDeleteProductClick = (name) => {
    setModalTitle("Confirmation Window"); // we set the modal title
    setModalMessage("Are you sure you want to delete this product?"); // we set the modal message
    setConfirmAction(() => () => {
      deleteProduct(name); // we set confirmation action to delete product with its name
      setModalShow(false); // hide the modal after deleting
    });
    setModalShow(true); // show the modal
  };

  return (
    <div className="admin-dashboard">
      <Sidebar handleViewChange={handleViewChange} /> {/* we render the sidebar component */}
      <main className="admin-main-content">
        {currentView === "dashboard" && (
          <DashboardView
            customers={customers}
            products={products}
            numberOfProducts={numberOfProducts}
            orders={orders} 
            handleViewChange={handleViewChange}
          /> 
        )}
        {currentView === "customers" && (
          <CustomersView
            customers={customers}
            filter={filter}
            setFilter={setFilter}
            searchEmail={searchEmail}
            setSearchEmail={setSearchEmail}
            deleteCustomer={handleDeleteClick}
            switchUserRole={handleSwitchClick}
          /> 
        )}
        {currentView === "products" && (
          <ProductsView
            products={products}
            searchProductId={searchProductId}
            setSearchProductId={setSearchProductId}
            deleteProduct={handleDeleteProductClick}
          /> 
        )}
        {currentView === "orders" && (
          <OrdersView
            orders={orders}
          /> 
        )}
      </main>
      <ConfirmationWindow
        show={modalShow}
        handleClose={() => setModalShow(false)}
        handleConfirm={confirmAction}
        title={modalTitle}
        message={modalMessage}
      /> {/* render the confirmation window */}
    </div>
  );
};

export default AdminDashboard;
