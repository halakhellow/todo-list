import React from "react";
import "./LogOutBtn.css";

const LogOutBtn = () => {
  return (
    <div className="LogOutBtn">
      <a href="http://localhost:5000/api/auth/logout" className="log-out">
        <span>Logout</span>
        <i className="fa fa-sign-out"></i>
      </a>
    </div>
  );
};

export default LogOutBtn;
