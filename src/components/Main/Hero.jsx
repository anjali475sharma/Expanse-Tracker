import React from "react";
import "./Style.css";

function Hero() {
  return (
    <div className="body">
      <div className="inner-section">
        <div className="head-section">
          <h1>Expanse Tracker</h1>
          <button className="logout">
            Logout
          </button>
        </div>
        <div className="outter-layer">
          <div className="wallet-section">
            <p>
              Wallet Balance: <span>$3000</span>
            </p>
            <button className="add-btn">Add Income</button>
          </div>
          <div className="expanse-section">
            <p>
              Expenses: <span>$5500</span>
            </p>

            <button className="add-btn">Add expanse</button>
          </div>
          {/* <div className="chart-section">
          <div></div>
        </div> */}
        </div>
        <div className="transactions">
          <h1 className="t-heading">Recent Transactions</h1>
          <div className="transactions-list">
              <div className="expanse">
                <div className="purchase">
                  <h1>Samosa</h1>
                  <p>March,21,2024</p> 
                </div>
                <div className="price">
                  <span>$15</span>
                  <span>Edit</span>
                  <span>Delete</span>
                </div>
              </div>
              <div className="expanse">
                <div className="purchase">
                  <h1>Samosa</h1>
                  <p>March,21,2024</p> 
                </div>
                <div className="price">
                  <span>$15</span>
                  <span>Edit</span>
                  <span>Delete</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
