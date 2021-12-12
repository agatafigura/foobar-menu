import React from "react";

export default function Categories(props) {

 function toggleList() {
    const arrow = document.querySelector("#arrow");
    const beerList = document.querySelector("#beer-types-elements");
    const beerTypesTitle = document.querySelector("#beer-types");
    const mode = document.querySelector(".switch");

  if (mode.classList.contains("light-mode")) {
    if (arrow.classList.contains("down")) {
      beerList.classList.remove("hidden");
      arrow.classList.remove("down");
      arrow.classList.add("up");
    } else {
      beerList.classList.add("hidden");
      arrow.classList.remove("up");
      arrow.classList.add("down");
    }
  } else {
    if (arrow.classList.contains("down-darkmode")) {
      beerList.classList.remove("hidden");
      beerList.style.color = "var(--background-light)";
      arrow.classList.remove("down-darkmode");
      arrow.classList.add("up-darkmode");
    } else {
      beerList.classList.add("hidden");
      arrow.classList.remove("up-darkmode");
      arrow.classList.add("down-darkmode");
      beerList.style.color = "var(--dark-grey)"
  }
  }

    const mobileView = window.matchMedia('(max-width: 767px')

    if (mobileView.matches) {
    if (arrow.classList.contains("up")) {
      beerTypesTitle.style.backgroundColor = "var(--section-background)"
    } else {
      beerTypesTitle.style.backgroundColor = "transparent"
    }
  }
  }

  function sort() {
    const arrow2 = document.querySelector("#arrow2");
    const mode = document.querySelector("#switch");
    if (mode.classList.contains("light-mode")) {
      if (arrow2.classList.contains("down2")) {
        arrow2.classList.remove("down2");
        arrow2.classList.add("up2");
      } else {
        arrow2.classList.remove("up2");
        arrow2.classList.add("down2");
      }
    } else {
      if (arrow2.classList.contains("down2-darkmode")) {
        arrow2.classList.remove("down2-darkmode");
        arrow2.classList.add("up2-darkmode");
      } else {
        arrow2.classList.remove("up2-darkmode");
        arrow2.classList.add("down2-darkmode");
    }
  }
}

    return(
    <div className="categories">
        <div id="beer-types" className="category">
          <h2>Beer Types</h2>
          <div id="arrow" className="down" onClick={toggleList}></div>
        </div>
        <div id="alc-level" className="category" onClick={sort}>
          <h2>Alc. level</h2>
          <div id="arrow2" className="down2"></div>
        </div>
      </div>
    )
  
}