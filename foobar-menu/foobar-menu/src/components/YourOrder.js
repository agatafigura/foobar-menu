import React from "react";
import YourProduct from "./YourProduct";
import Summary from "./Summary";

export default function YourOrder() {
    return(
      <div className="your-order">
        <div className="your-products">
          <YourProduct/>
          <YourProduct/>
          <YourProduct/>
        </div>
        <Summary/>
      </div>
      
    )
}