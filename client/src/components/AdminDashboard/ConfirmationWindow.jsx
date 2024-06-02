import React from "react";
import "../../CSS/adminDashboard.css"; 


// this component renders a modal window to confirm our actions ( deleting or switchin roles)
// it takes in props: 
// show (boolean to control the visibility of the modal )
// handleClose (function to handle closing the modal after confirming the action)
// handleConfirm (function to handle the confirmation action)
// title (the modal title ) 
// message (the modal message)
const ConfirmationWindow = ({ show, handleClose, handleConfirm, title, message }) => {
  if (!show) return null; // if show is false dont render anything

  return (
    <div className="confirmation-overlay"> 
      <div className="confirmation-content"> 
        <h2>{title}</h2> 
        <p>{message}</p> 
        <div className="confirmation-actions"> 
          <button className="confirmation-button" onClick={handleClose}>
            Cancel 
          </button>
          <button className="confirmation-button" onClick={handleConfirm}>
            Confirm 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationWindow;
