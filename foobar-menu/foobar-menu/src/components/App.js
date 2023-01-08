import React, { useEffect, useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Order from "./Order";

export default function App() {
  const [order, setOrder] = useState([]);
  console.log(order);

  function addBeer(selected) {
    console.log(selected)
    if (order.some((product) => product.name === selected.name)) {
      console.log("This item is already added");
      const nextOrders = order.map((product) => {
        if (product.name === selected.name) {
          product.amount = product.amount + 1;
        }
        return product;
      })
      setOrder(nextOrders);
      
    } else {
      const newObject = {...selected, amount: 1};
      setOrder((oldState) => oldState.concat(newObject));
      console.log(selected);
    }
    addTotal();
  }

  function substractBeer(selected) {
    const nextOrders = order.map((product) => {
      if (product.name === selected.name) {
        return {...product, amount: product.amount-1}
      }
      return product;
    })
    setOrder(nextOrders.filter((item) => item.amount > 0));
  }

  function enableDarkMode() {
    localStorage.setItem("darkMode", "enabled");
    document.querySelector("body").classList.add('darkmode');
    console.log("dark mode enabled")
  }

  function disableDarkMode() {
    localStorage.setItem("darkMode", null);
    document.querySelector("body").classList.remove('darkmode');
    console.log("dark mode disabled")
  }

  function removeBeer(name) {
    setOrder((oldState) => oldState.filter((item) => item.name !== name));
  }

  const [beers, setBeers] = useState([]);

  const [beersCopy, setBeersCopy] = useState(beers);

  function addTotal() {
    let counter = 0;
    order.map(beer => counter += beer.amount);
    console.log(counter);
    let totalAmount = counter * 60;
    console.log(totalAmount);
    return totalAmount;
  }

  function filterHefeweizen() {
    console.log("filter hefeweizen");
    filterForAll();
    setBeersCopy(() =>
      [...beers].filter((beer) => beer.category.includes("Hefeweizen"))
    );
  }

  function filterIPA() {
    console.log("filter ipa");
    filterForAll();
    setBeersCopy(() =>
      [...beers].filter((beer) => beer.category.includes("IPA"))
    );
  }

  function filterOktoberfest() {
    console.log("filter oktoberfest");
    filterForAll();
    setBeersCopy(() =>
      [...beers].filter((beer) => beer.category.includes("Oktoberfest"))
    );
  }

  function filterLager() {
    console.log("filter european lager");
    filterForAll();
    setBeersCopy(() =>
      [...beers].filter((beer) => beer.category.includes("European"))
    );
  }

  function filterStout() {
    console.log("filter stout");
    filterForAll();
    setBeersCopy(() =>
      [...beers].filter((beer) => beer.category.includes("Stout"))
    );
  }

  function filterBSA() {
    console.log("filter belgian specialty ale");
    filterForAll();
    setBeersCopy(() =>
      [...beers].filter((beer) => beer.category.includes("Belgian"))
    );
  }

  function filterCali() {
    console.log("filter california common");
    filterForAll();
    setBeersCopy(() =>
      [...beers].filter((beer) => beer.category.includes("California"))
    );
  }

  function filterForAll() {
    setBeersCopy(() => [...beers]);
    console.log(beersCopy);
  }

  useEffect(() => {
    fetch("https://foobar-menu.herokuapp.com/beertypes", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((e) => e.json())
      .then((data) => {
        setBeers(data);
        setBeersCopy(() => [...data]);
      });
  }, []);

  return (
    <>
      <div className="App">
        <Header enableDarkMode={enableDarkMode} disableDarkMode={disableDarkMode}/>
        <div className="main">
          <Menu
            order={order}
            beers={beers}
            addBeer={addBeer}
            beersCopy={beersCopy}
            filterHefeweizen={filterHefeweizen}
            filterIPA={filterIPA}
            filterOktoberfest={filterOktoberfest}
            filterLager={filterLager}
            filterStout={filterStout}
            filterBSA={filterBSA}
            filterCali={filterCali}
            filterForAll={filterForAll}
          />
          <Order
            order={order}
            removeBeer={removeBeer}
            setOrder={setOrder}
            addBeer={addBeer}
            substractBeer={substractBeer}
            addTotal={addTotal}
            enableDarkMode={enableDarkMode}
            disableDarkMode={disableDarkMode}
          />
        </div>
      </div>
    </>
  );
}
