import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg"></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </div>
            <div className="col-6">
              {" "}
              <li>Stock & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Government</li>
            </div>
          </div>
          <img src="media\images\pressLogos.png" style={{width:"90%"}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
