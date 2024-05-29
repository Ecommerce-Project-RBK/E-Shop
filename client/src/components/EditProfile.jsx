import React, { useState }  from 'react'
import '../CSS/EditProfile.css'
import axios from 'axios'

const EditProfile = () => {
  const [firstname,setFirstname] = useState("")
  const [lastname,setLastname] = useState("")
  const [email,setEmail] = useState("")
  const [address,setAddress] = useState("")
  const [password,setPassword] = useState("")
  const [newpassword,setNewpassword] = useState("")
  const [confirmpassword,setConfirmpassword] = useState(newpassword)

  return (
    <div>
<div className="breadcrumb">Home / My Account</div> <div className='welcome'>Welcome! Aziz Chinguiti</div>
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
                            <input onChange={(e)=>{
                           setFirstname(e.target.value)

                            }} type="text" />
                        </div>
                        <div className="form-group2">
                            <label>Last Name</label>
                            <input type="text" 
                            onChange={(e)=>{
                              setLastname(e.target.value)
   
                               }} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" value="example@mail.com" 
                            onChange={(e)=>{
                              setEmail(e.target.value)
   
                               }} />
                        </div>
                        <div className="form-group2">
                            <label id='ad'>Address</label>
                            <input type="text"
                            onChange={(e)=>{
                              setAddress(e.target.value)
   
                               }} />
                        </div>
                    </form>
                    <form className="password-form">
                        <div className="form-group">
                            <label>Current Password</label>
                            <input type="password"
                            onChange={(e)=>{
                              setPassword(e.target.value)
   
                               }} />
                        </div>
                        <div className="form-group">
                            <label>New Password</label>
                            <input type="password"
                            onChange={(e)=>{
                              setNewpassword(e.target.value)
   
                               }} />
                        </div>
                        <div className="form-group">
                            <label>Confirm New Password</label>
                            <input type="password"
                            onChange={(e)=>{
                              setConfirmpassword(confirmpassword)
   
                               }} />
                        </div>
                        <div className="form-actions">
                            <button type="button" className="cancelButton">Cancel</button>
                            <button type="button" className="saveButton">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default EditProfile