import React, {useEffect, useState} from "react";
import Header from "./Header";
import Menu from "./Menu";
import Order from "./Order";

export default function App() {
  const [added, setAdded] = useState(false);
  const [order, setOrder] = useState();
  
  function addBeer(selected) {
    setAdded(true);
    setOrder(selected);
  }
  const array = [];
  array.push(order);
  console.log(array);  


  const [beers, setBeers] = useState([]);
  console.log(beers);

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
        <Menu beers={beers} addBeer={addBeer}/>
        <Order order={order} added={added} setAdded={setAdded}/>
        </div>
      </div>
      </>
    );
  }
  