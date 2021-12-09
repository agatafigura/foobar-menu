import React, {useState} from "react";

export default function Order({order, removeBeer}) {

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

const [count, setCount] = useState(1);


const mapped = order.map((beer) => (<div className={`your-product ${beer.name}`} key={beer.name}>
<div className="product-details">
  <img className="bottle" src={`/img/bottles/${beer.label}`} alt="beer bottle"></img>
  <div className="details">
    <h3>{beer.name}</h3>
    <p>60 dkk</p>
    <div className="amount">
      <button onClick={count > 1 ? () => setCount(count-1) : () => setCount(count)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>+</button>
    </div>
  </div>
</div>
<img className="close" onClick={() => removeBeer(beer.name)} src={"/img/icons/close.svg"} alt="close button"></img>
</div>))

    return(
      <div id="order">
        <div id="open-order" className="order-up" onClick={toggleOrder}></div>
        <h1>Your order</h1>
        <div className="your-order">
        <div className="your-products">
          {mapped}
        </div>
        <div className="summary">
        <p className="total"><span>Total: </span>{count * 60}dkk</p>
          <div className="order-buttons">
            <button id="send-order" className="button-lightmode">Send order</button>
            <button id="pay" className="button-lightmode">Pay</button>
          </div>
      </div>
      </div>
      </div>
    )
  }