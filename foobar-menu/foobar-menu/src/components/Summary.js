import React from "react";

export default function Summary() {
    return(
      <div className="summary">
        <p className="total"><span>Total: </span>120dkk</p>
          <div className="order-buttons">
            <button id="send-order" className="button-lightmode">Send order</button>
            <button id="pay" className="button-lightmode">Pay</button>
          </div>
      </div>
    )
  }