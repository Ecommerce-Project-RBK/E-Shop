import React, { useState } from 'react';
import '../CSS/EditProfile.css';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
// import { useLocation } from "react-router-dom";

const EditProfile = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [refresh, setrefresh] = useState(false);
  const [welcome, setwelcome] = useState("");
  // const location=useLocation()
  // console.log(location)
  //   const name=location.state.name || "user"
 

  const confirmpass = () => {
    if (newpassword !== confirmpassword) {
      setErrorMessage("New password and confirm password do not match."); // Set error message
      return;
    }

    axios.put('http://localhost:8080/api/Buyer/profile/update',{
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address,
        password: password,
        newPassword: newpassword
    })
      .then(response => {
        console.log(response.data);
        // alert("Profile updated successfully!");
        setrefresh(!refresh)
        setwelcome(response.data.firstname)
        console.log(welcome)
        console.log(response)

      })
      .catch(error => {
        console.error(error);
        alert("An error occurred while updating the profile.");
      });
  };

  return (
    <div>
      <Navbar/>
      <div className="breadcrumb">Home / My Account</div>
      <div className='welcome'>Welcome ! </div>
      <div className="container">
        <div className="sidebar">
          <div className="sidebar-section">
            <h4>Manage My Account</h4>
            <ul>
              <li className="active">My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>
          <div className="sidebar-section">
            <h4>My Orders</h4>
            <ul>
              <li>My Returns</li>
              <li>My Cancellations</li>
            </ul>
          </div>
          <div className="sidebar-section">
            <h4>My Wishlist</h4>
          </div>
        </div>
        <div className="main-content">
          <h2 className='title-edit'>Edit Your Profile</h2>
          <form className="edit-profile-form">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="form-group2">
              <label>Last Name</label>
              <input
                type="text"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group2">
              <label id='ad'>Address</label>
              <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </form>
          <form className="password-form">
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                onChange={(e) => setNewpassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                onChange={(e) => setConfirmpassword(e.target.value)}
              />
              {errorMessage && <p className="error-message">{errorMessage} <img src="https://www.freeiconspng.com/uploads/error-icon-4.png" alt="" width={17}/></p>} 
            </div>
            <div className="form-actions">
              <button type="button" className="cancelButton">Cancel</button>
              <button type="button" className="saveButton" onClick={() => confirmpass()}>Save Changes</button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default EditProfile;