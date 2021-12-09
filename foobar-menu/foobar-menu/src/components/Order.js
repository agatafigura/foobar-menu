import React from "react";

export default function Order({order, added}) {

  function removeBeer() {
    order.setAdded(false);
}

  function toggleOrder() {
    const openOrderButton = document.querySelector("#open-order");
    const mobileView = window.matchMedia("(max-width: 700px)");
    if (mobileView.matches) {
      if (openOrderButton.classList.contains("order-up")) {
      document.querySelector("#order").style.height = "90vh";
      openOrderButton.classList.remove("order-up");
      openOrderButton.classList.add("order-down");
     } else {
      document.querySelector("#order").style.height = "20vh";
      openOrderButton.classList.remove("order-down");
      openOrderButton.classList.add("order-up");
      }
    }
}

    return(
      <div id="order">
        <div id="open-order" class="order-up" onClick={toggleOrder}></div>
        <h1>Your order</h1>
        <div className="your-order">
        <div className="your-products">
          {added && <div className={`your-product ${order.name}`}>
          <div className="product-details">
            <img className="bottle" src={`/img/bottles/${order.label}`} alt="beer bottle"></img>
            <div className="details">
              <h3>{order.name}</h3>
              <p>60 dkk</p>
              <div className="amount">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
        </div>
      <img className="close" onClick={removeBeer} src={"/img/icons/close.svg"} alt="close button"></img>
    </div>}
    
        </div>
        <div className="summary">
        <p className="total"><span>Total: </span> dkk</p>
          <div className="order-buttons">
            <button id="send-order" className="button-lightmode">Send order</button>
            <button id="pay" className="button-lightmode">Pay</button>
          </div>
      </div>
      </div>
      </div>
    )
  }