import React from "react";
import bottle from "../img/bottles/elhefe.png";
import close from '../img/icons/close.svg';

export default function YourProduct() {
  
    return(
    <div className="your-product">
      <div className="product-details">
          <img className="bottle" src={bottle} alt="beer bottle"></img>
          <div className="details">
            <h3>El Hefe</h3>
            <p>60 dkk</p>
            <div className="amount">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
      </div>
      <img className="close" src={close} alt="close button"></img>
    </div>
    )
  }