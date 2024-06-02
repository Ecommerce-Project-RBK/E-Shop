import React, { useState } from "react";
import ConfirmationWindow from "./ConfirmationWindow";

// this component takes in props: customers (list of all customers)
//filter (current filter value)
//setFilter (function to set filter)
// searchEmail (current search email value)
// setSearchEmail (function to set search email)
// deleteCustomer (function to delete a customer)
// switchUserRole (function to switch a customer's role)
const CustomersView = ({
  customers,
  filter,
  setFilter,
  searchEmail,
  setSearchEmail,
  deleteCustomer,
  switchUserRole,
}) => {
  const [modalShow, setModalShow] = useState(false); // a state to control modal visibility
  const [modalTitle, setModalTitle] = useState(""); // a state to manage modal title
  const [modalMessage, setModalMessage] = useState(""); // a state to manage modal message
  const [confirmAction, setConfirmAction] = useState(null); // a state to manage confirmation action
// we create a function that display the data that the admin selected ( for example if the admin selected 
  // the role sellers we will fetch only the sellers table )

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // this function will allow the admin to search a certain customer with his email 
  const handleSearchChange = (event) => {
    setSearchEmail(event.target.value);
  };

 // this function will display the list of the customers based on two options , either from the drop down menu
 // that we created we can choose to fetch all / buyers / sellers , or with the seach bar that will filre 
 // the list of customers email based on the admin input 
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

  const displayedCustomers = filteredCustomers(); // we retrieve the filtered customers list that we created

 /// this function handles the customer deleting
  const handleDeleteClick = (email) => {
    setModalTitle("Confirmation Window");
    setModalMessage("Are you sure you want to delete this customer?");
    setConfirmAction(() => () => {
      deleteCustomer(email);
      setModalShow(false);
    });
    setModalShow(true);
  };

  // this function handles switching roles
  const handleSwitchClick = (email, newRole) => {
    setModalTitle("Confirmation Window");
    setModalMessage(
      `Are you sure you want to switch this customer to ${newRole}?`
    );
    setConfirmAction(() => () => {
      switchUserRole(email, newRole);
      setModalShow(false);
    });
    setModalShow(true);
  };

  return (
    <section className="admin-customers-section">
      <h2>Customers</h2> 
      <div className="admin-filters">
        {" "}
        
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
        {" "}
        
        <thead>
          <tr>
            <th style={{ width: "200px" }}>Action</th>
            <th>Role</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {displayedCustomers.sellers.map((seller) => (
            <tr key={seller.email}>
              <td className="action-buttons">
                <button onClick={() => handleDeleteClick(seller.email)}>
                  Delete
                </button>
                <button
                  className="switch-role"
                  onClick={() => handleSwitchClick(seller.email, "buyer")}
                >
                  Switch
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
              <td className="action-buttons">
                <button onClick={() => handleDeleteClick(buyer.email)}>
                  Delete
                </button>
                <button
                  className="switch-role"
                  onClick={() => handleSwitchClick(buyer.email, "seller")}
                >
                  Switch
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
      <ConfirmationWindow
        show={modalShow}
        handleClose={() => setModalShow(false)}
        handleConfirm={confirmAction}
        title={modalTitle}
        message={modalMessage}
      />{" "}
    </section>
  );
};

export default CustomersView; 
