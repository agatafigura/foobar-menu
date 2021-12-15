import React from "react";
import Payment from "./Payment";

export default function Order({order, removeBeer, setOrder, addBeer, substractBeer, addTotal, enableDarkMode, disableDarkMode}) {

  function toggleOrder() {
    const openOrderButton = document.querySelector("#open-order");
    const mobileView = window.matchMedia("(max-width: 700px)");
    if (mobileView.matches) {
      if (openOrderButton.classList.contains("order-up")) {
      document.querySelector("#order").style.height = "90vh";
      openOrderButton.classList.remove("order-up");
      openOrderButton.classList.add("order-down");
      document.querySelector("#order").style.justifyContent = "flex-start";
      document.querySelector(".your-products").style.display = "flex";
      document.querySelector(".your-products").style.minHeight = "70vh";
      document.querySelector(".your-products").style.maxHeight = "70vh";
     } else {
      document.querySelector("#order").style.height = "20vh";
      openOrderButton.classList.remove("order-down");
      openOrderButton.classList.add("order-up");
      document.querySelector("#order").style.justifyContent = "center";
      document.querySelector(".your-products").style.display = "none";
      }
    }
}

function openPayment() {
  document.querySelector("#form-wrapper").classList.remove("hidden");
  console.log("open")
}


function hideAlert() {
  document.querySelector("#orderSent").classList.add("hidden");
}

const mapped = order.map((beer) => (<div className={`your-product ${beer.name}`} key={beer.name}>
<div className="product-details">
  <img className="bottle" src={`/img/bottles/${beer.label}`} alt="beer bottle"></img>
  <div className="details">
    <h3>{beer.name}</h3>
    <p>60 dkk</p>
    <div className="amount">
      <button className={`minus ${beer.name}`} onClick={() => substractBeer(beer)}>-</button>
      <p>{beer.amount}</p>
      <button className={`plus ${beer.name}`} onClick={() => addBeer(beer)}>+</button>
    </div>
  </div>
</div>
<div id="close" className="close-lightmode" onClick={() => removeBeer(beer.name)}></div>
</div>))

function sendOrder() {
  if (mapped.length < 1) {
    console.log("order empty");
    orderSent();
  } else {
  console.log("sent");
  setOrder([]);
  orderSent();
  }
}

function orderSent() {
  if (mapped.length > 0 ) {
  document.querySelector("#orderSent").classList.remove("hidden");
  setTimeout(hideAlert, 3000)
  }
}


    return(
      <div id="order">
        <div id="open-order" className="order-up" onClick={toggleOrder}></div>
        <h1 id="order-h1">Your order</h1>
        <div className="your-order">
        <div className="your-products">
          {mapped}
        </div>
        <div className="summary">
        <p className="total"><span>Total: </span>{addTotal()}dkk</p>
        <p id="orderSent" className="hidden">Your order has been sent!</p>
          <div className="order-buttons">
            <button onClick={sendOrder} id="send-order" className="button-lightmode">Send order</button>
            <button onClick={openPayment} id="pay" className="button-lightmode">Pay</button>
          </div>
      </div>
      <Payment enableDarkMode={enableDarkMode} disableDarkMode={disableDarkMode}/>
      </div>
      </div>
    )
  }