import React from "react";

export default function Categories(props) {


 function toggleList() {
    const arrow = document.querySelector("#arrow");
    const beerList = document.querySelector("#beer-types-elements");
    const mobileView = window.matchMedia('(max-width: 767px');
    const beerTypesTitle = document.querySelector("#beer-types");

    if (document.querySelector("body").classList.contains("darkmode") && arrow.classList.contains("up")) {
      arrow.classList.remove("up");
      arrow.classList.add("darkmode-up");
      beerList.classList.add("hidden");
    } else if (document.querySelector("body").classList.contains("darkmode") && arrow.classList.contains("down")) {
      arrow.classList.remove("down");
      arrow.classList.add("darkmode-down");
      beerList.classList.remove("hidden");
    } else if (arrow.classList.contains("down")) {
      arrow.classList.remove("down");
      arrow.classList.add("up");
      beerList.classList.remove("hidden");
    } else {
      arrow.classList.remove("up");
      arrow.classList.add("down");
      beerList.classList.add("hidden");
    }
    if (mobileView.matches) {
      if (arrow.classList.contains("up")) {
        beerTypesTitle.style.backgroundColor = "var(--section-background)";
        beerTypesTitle.style.borderTop = "1px solid var(--light-grey)";
        beerTypesTitle.style.borderLeft = "1px solid var(--light-grey)";
        beerTypesTitle.style.borderRight = "1px solid var(--light-grey)";
      } else {
        beerTypesTitle.style.backgroundColor = "transparent";
        beerTypesTitle.style.borderTop = "none";
        beerTypesTitle.style.borderLeft = "none";
        beerTypesTitle.style.borderRight = "none";
      }
    }
  }

    return(
    <div className="categories">
        <div id="beer-types" className="category">
          <h2>Filter by beer types</h2>
          <div id="arrow" className="down" onClick={toggleList}></div>
        </div>
      </div>
    )
  
}