import React from "react";

export default function Summary() {
    return(
      <div className="summary">
        <p className="total"><span>Total: </span>120dkk</p>
          <div className="order-buttons">
            <button>Send order</button>
            <button>Pay</button>
          </div>
      </div>
    )
  }