import React from 'react'
import '../CSS/EditProfile.css'

const EditProfile = () => {
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
                            <input type="text" />
                        </div>
                        <div className="form-group2">
                            <label>Last Name</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" value="rimel111@gmail.com"  />
                        </div>
                        <div className="form-group2">
                            <label id='ad'>Address</label>
                            <input type="text" />
                        </div>
                    </form>
                    <form className="password-form">
                        <div className="form-group">
                            <label>Current Password</label>
                            <input type="password" />
                        </div>
                        <div className="form-group">
                            <label>New Password</label>
                            <input type="password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm New Password</label>
                            <input type="password" />
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