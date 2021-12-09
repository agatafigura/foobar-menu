import React, {useState} from "react";
import Categories from "./Categories";
import Product from "./Product";

export default function Menu(props) {

  const mapped = props.beers.map((beer) => <Product addBeer={props.addBeer} addtoBasket={props.addtoBasket} key={beer.name} {...beer}/>);


    return(
      <div className="menu">
        <Categories/>
        <ul id="beer-types-elements" className="hidden">
            <li>Hefeweizen</li>
            <li>IPA</li>
            <li >Oktoberfest</li>
            <li>European Lager</li>
            <li>Stout</li>
            <li>Belgian Specialty Ale</li>
            <li>California Common</li>
      </ul>
       <div id="products">
         {mapped}
       </div>
      </div>
    )
  }