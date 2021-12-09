import React, {useEffect, useState} from "react";
import Header from "./Header";
import Menu from "./Menu";
import Order from "./Order";

export default function App() {

  const [order, setOrder] = useState([]);
  console.log(order);

  function addBeer(selected) {
    setOrder(oldState=>oldState.concat(selected));
    console.log(selected);
  }
  
  
  function removeBeer(name) {
    setOrder(oldState=>oldState.filter(item=>item.name!==name));
  }


  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://foobarpm.herokuapp.com/beertypes", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    .then((e) => e.json())
    .then((data) => setBeers(data));
  }, []);
  
    return (
      <>
      <div className="App">
        <Header/>
        <div className="main">
        <Menu order={order} beers={beers} addBeer={addBeer}/>
        <Order order={order} removeBeer={removeBeer}/>
        </div>
      </div>
      </>
    );
  }
  