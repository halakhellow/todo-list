import React from "react";
import "./GoogleSignInBtn.css";

const GoogleSignInBtn = (props) => {
  return (
    <button className="google-btn" {...props}>
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
