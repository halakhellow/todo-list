import React from "react";
import "./GoogleSignInBtn.css";

const GoogleSignInBtn = () => {
  const handleClick = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };
  return (
    <button className="google-btn" onClick={handleClick}>
      {" "}
      Sign in with
      <span>G</span>
      <span>o</span>
      <span>o</span>
      <span>g</span>
      <span>l</span>
      <span>e</span>
    </button>
  );
};

export default GoogleSignInBtn;
