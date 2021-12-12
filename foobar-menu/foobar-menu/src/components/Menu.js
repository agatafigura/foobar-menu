import React from "react";
import Categories from "./Categories";
import Product from "./Product";

export default function Menu(props, order) {


  function BeerList(prop) {
    console.log(prop.mapped);
    const mapped = prop.mapped.map((beer) => <Product order={order} addBeer={props.addBeer} beersCopy={props.beersCopy} key={beer.name} {...beer}/>);
    return <div className="products">{mapped}</div>;
  }
  
  console.log(props.beersCopy);
    return(
      <div className="menu">
        <Categories props={props}/>
        <ul id="beer-types-elements" className="hidden">
            <li onClick={() => props.filterHefeweizen()}>Hefeweizen</li>
            <li onClick={() => props.filterIPA()}>IPA</li>
            <li onClick={() => props.filterOktoberfest()}>Oktoberfest</li>
            <li onClick={() => props.filterLager()}>European Lager</li>
            <li onClick={() => props.filterStout()}>Stout</li>
            <li onClick={() => props.filterBSA()}>Belgian Specialty Ale</li>
            <li onClick={() => props.filterCali()}>California Common</li>
            <li onClick={() => props.filterForAll()}>All</li>
      </ul>
         <BeerList mapped={props.beersCopy} />
      </div>
    )
  }