import React from "react";
import Categories from "./Categories";
import List from "./List";
import ProductList from "./ProductList";

export default function Menu() {
    return(
      <div className="menu">
        <Categories/>
        <List/>
        <ProductList/>
      </div>
    )
  }