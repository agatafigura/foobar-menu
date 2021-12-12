import React, {useEffect, useState} from "react";
import Header from "./Header";
import Menu from "./Menu";
import Order from "./Order";

export default function App() {

  const [order, setOrder] = useState([]);
  console.log(order);

  const [count, setCount] = useState(0);

  function addBeer(selected) {
    if(order.some(product => product.name === selected.name)) {
      console.log("This item is already added");
      setCount(count+1);
    } else {
      setOrder(oldState=>oldState.concat(selected));
      console.log(selected);
      setCount(count+1);
    }
  }
  
  function removeBeer(name) {
    setOrder(oldState=>oldState.filter(item=>item.name!==name));
  }

  const [beers, setBeers] = useState([]);

  const [beersCopy, setBeersCopy] = useState(beers);

  function filterHefeweizen() {
    console.log("filter hefeweizen");
    filterForAll();
    setBeersCopy(() => [...beers].filter((beer) => beer.category.includes("Hefeweizen")));
  }

  function filterIPA() {
    console.log("filter ipa");
    filterForAll();
    setBeersCopy(() => [...beers].filter((beer) => beer.category.includes("IPA")));
  }

  function filterOktoberfest() {
    console.log("filter oktoberfest");
    filterForAll();
    setBeersCopy(() => [...beers].filter((beer) => beer.category.includes("Oktoberfest")));
  }

  function filterLager() {
    console.log("filter european lager");
    filterForAll();
    setBeersCopy(() => [...beers].filter((beer) => beer.category.includes("European")));
  }

  function filterStout() {
    console.log("filter stout");
    filterForAll();
    setBeersCopy(() => [...beers].filter((beer) => beer.category.includes("Stout")));
  }

  function filterBSA() {
    console.log("filter belgian specialty ale");
    filterForAll();
    setBeersCopy(() => [...beers].filter((beer) => beer.category.includes("Belgian")));
  }

  function filterCali() {
    console.log("filter california common");
    filterForAll();
    setBeersCopy(() => [...beers].filter((beer) => beer.category.includes("California")));
  }

  
  function filterForAll() {
    setBeersCopy(() => [...beers]);
    console.log(beersCopy);
    
  }

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
        <Menu order={order} beers={beers} addBeer={addBeer} beersCopy={beersCopy} filterHefeweizen={filterHefeweizen} filterIPA={filterIPA} filterOktoberfest={filterOktoberfest}
        filterLager={filterLager} filterStout={filterStout} filterBSA={filterBSA} filterCali={filterCali} filterForAll={filterForAll}/>
        <Order order={order} removeBeer={removeBeer} setCount={setCount} count={count}/>
        </div>
      </div>
      </>
    );
}