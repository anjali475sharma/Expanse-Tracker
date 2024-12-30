import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="body">
      <div className="login">
        <h1>Login</h1>
      
        </div>
      <div className="outer-section">
        <div className="inner-section">
          {/* <div>
            <input className="input" type="text" placeholder="Name..."/>
          </div> */}
          <div>
            <input className="input" type="text" placeholder="Email..." />
          </div>
          <div>
            <input className="input" type="text" placeholder="Password"></input>
          </div>
        </div>
        <button className="button">Login</button>
        <div className="fg-btn">Forgot Password </div>
      </div>
      <div className="welcome-section"> 
        WElCOME
      </div>
      <div className="back-section"> 
        BACK
      </div>
    </div>
  );
}

export default Login;
