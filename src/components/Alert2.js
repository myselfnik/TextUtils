import React from "react";

function Alert(props) {
 const classes = `alert alert-${props.alertType} alert-dismissible fade show`;
  return (
    <div>
        <div className={classes} role="alert">
        <strong>{props.alertMsg}</strong> 
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default Alert;
