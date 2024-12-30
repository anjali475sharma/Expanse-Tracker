import React from "react";
import "./Signup.css";
function Signup() {
  return (
    <div className="body">
      <div className="Signup">
        <h1>Signup</h1>
      
        </div>
      <div className="outer-section">
        <div className="inner-section">
          <div>
            <input className="input" type="text" placeholder="Name..."/>
          </div>
          <div>
            <input className="input" type="text" placeholder="Email..." />
          </div>
          <div>
            <input className="input" type="text" placeholder="Password"></input>
          </div>
        </div>
        <button className="button">Signup</button>
       
      </div>
      <div className="new-section"> 
        Lets Go
      </div>
    </div>
  );
}

export default Signup;
