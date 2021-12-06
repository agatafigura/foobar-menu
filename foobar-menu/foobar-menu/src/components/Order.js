import React from "react";
import YourOrder from "./YourOrder";

export default function Order() {

  function toggleOrder() {
    const openOrderButton = document.querySelector("#open-order");
    const mobileView = window.matchMedia("(max-width: 700px)");
    if (mobileView.matches) {
      if (openOrderButton.classList.contains("order-up")) {
      document.querySelector("#order").style.height = "90vh";
      openOrderButton.classList.remove("order-up");
      openOrderButton.classList.add("order-down");
     } else {
      document.querySelector("#order").style.height = "20vh"
      openOrderButton.classList.remove("order-down");
      openOrderButton.classList.add("order-up");
      }
    }
}

    return(
      <div id="order">
        <div id="open-order" class="order-up" onClick={toggleOrder}></div>
        <h1>Your order</h1>
        <YourOrder/>
      </div>
    )
  }