import React from "react";

export default function Header() {

  function switchMode () {
    const switchButton = document.querySelector("#switch");
    const logo = document.querySelector("#logo");
    const mobileView = window.matchMedia('(min-width: 768px')

      if (switchButton.classList.contains("light-mode") && mobileView.matches) {
        switchButton.classList.remove("light-mode");
        switchButton.classList.add("dark-mode");
        logo.classList.remove("light-logo");
        logo.classList.add("dark-logo");
        document.querySelector("body").style.backgroundColor = "var(--dark-grey)";
        document.querySelector("#beer-types h2").style.color = "var(--background-light)";
        document.querySelector("#alc-level h2").style.color = "var(--background-light)"
        document.querySelector("#order").style.backgroundColor = "var(--light-grey)";
        document.querySelector("#order h1").style.color = "var(--background-light)";
        var buttons = document.querySelectorAll('.buttons button');
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('button-lightmode');
          buttons[i].classList.add('button-darkmode');
        }
        document.querySelector(".total").style.color = "var(--background-light)";
        document.querySelector("#send-order").classList.remove("button-lightmode");
        document.querySelector("#pay").classList.remove("button-lightmode");  
        document.querySelector("#send-order").classList.add("button-darkmode");   
        document.querySelector("#pay").classList.add("button-darkmode");
        document.querySelector("#arrow").classList.remove("down");
        document.querySelector("#arrow").classList.remove("up");
        document.querySelector("#arrow").classList.add("down-darkmode");
        document.querySelector("#arrow2").classList.remove("down2");
        document.querySelector("#arrow2").classList.remove("up2");
        document.querySelector("#arrow2").classList.add("down2-darkmode");
        document.querySelector(".name-price h1").style.color = "var(--background-light)";
        document.querySelector(".name-price h2").style.color = "var(--background-light)";
        document.querySelector(".beer-bg hr").style.color = "var(--background-light)";
        document.querySelector("#bottle-icon").classList.remove("bottle-icon-lightmode");
        document.querySelector("#bottle-icon").classList.add("bottle-icon-darkmode");
        document.querySelector("#circle-icon").classList.remove("circle-icon-lightmode");
        document.querySelector("#circle-icon").classList.add("circle-icon-darkmode");
        document.querySelector("#size").style.color = "var(--background-light)";
        document.querySelector("#alcohol").style.color = "var(--background-light)";
        document.querySelector("#category").style.color = "var(--background-light)";
        document.querySelector("#overall-impression h2").style.color = "var(--background-light)";
        document.querySelector("#overall-impression p").style.color = "var(--background-light)";
        document.querySelector("#pop-up").style.backgroundColor = "var(--dark-grey)";
        document.querySelector("#aroma h2").style.color = "var(--background-light)";
        document.querySelector("#aroma p").style.color = "var(--background-light)";
        document.querySelector("#mouthfeel h2").style.color = "var(--background-light)";
        document.querySelector("#mouthfeel p").style.color = "var(--background-light)";
        document.querySelector("#close-popup").classList.remove("close-lightmode");
        document.querySelector("#close-popup").classList.add("close-darkmode");
      } else {
        switchButton.classList.remove("dark-mode");
        switchButton.classList.add("light-mode");
        logo.classList.remove("dark-logo");
        logo.classList.add("light-logo");
        document.querySelector("body").style.backgroundColor = "var(--background-light)";
        document.querySelector("#beer-types h2").style.color = "var(--dark-grey)";
        document.querySelector("#alc-level h2").style.color = "var(--dark-grey)";
        document.querySelector("#order").style.backgroundColor = "var(--section-background)";
        document.querySelector("#order h1").style.color = "var(--dark-grey)";
        var buttons = document.querySelectorAll('.buttons button');
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('button-darkmode');
          buttons[i].classList.add('button-lightmode');
        }
        document.querySelector(".total").style.color = "var(--dark-grey)";   
        document.querySelector("#send-order").classList.remove("button-darkmode");
        document.querySelector("#pay").classList.remove("button-darkmode");  
        document.querySelector("#send-order").classList.add("button-lightmode");   
        document.querySelector("#pay").classList.add("button-lightmode");
        document.querySelector("#arrow").classList.remove("down-darkmode");
        document.querySelector("#arrow").classList.remove("up-darkmode");
        document.querySelector("#arrow").classList.add("down");
        document.querySelector("#arrow2").classList.remove("down2-darkmode");
        document.querySelector("#arrow2").classList.remove("up2-darkmode");
        document.querySelector("#arrow2").classList.add("down2");
        document.querySelector(".name-price h1").style.color = "var(--dark-grey)";
        document.querySelector(".name-price h2").style.color = "var(--dark-grey)";
        document.querySelector(".beer-bg hr").style.color = "var(--dark-grey)";
        document.querySelector("#bottle-icon").classList.remove("bottle-icon-darkmode");
        document.querySelector("#bottle-icon").classList.add("bottle-icon-lightmode");
        document.querySelector("#circle-icon").classList.remove("circle-icon-darkmode");
        document.querySelector("#circle-icon").classList.add("circle-icon-lightmode");
        document.querySelector("#size").style.color = "var(--dark-grey)";
        document.querySelector("#alcohol").style.color = "var(--dark-grey)";
        document.querySelector("#category").style.color = "var(--dark-grey)";
        document.querySelector("#overall-impression h2").style.color = "var(--dark-grey)";
        document.querySelector("#overall-impression p").style.color = "var(--dark-grey)";
        document.querySelector("#pop-up").style.backgroundColor = "var(--section-background)";
        document.querySelector("#aroma h2").style.color = "var(--dark-grey)";
        document.querySelector("#aroma p").style.color = "var(--dark-grey)";
        document.querySelector("#mouthfeel h2").style.color = "var(--dark-grey)";
        document.querySelector("#mouthfeel p").style.color = "var(--dark-grey)";
        document.querySelector("#close-popup").classList.remove("close-darkmode");
        document.querySelector("#close-popup").classList.add("close-lightmode");
    }
  }
    return (
      <div className="header">
        <div id="logo" className="light-logo"></div>
        <div id="switch" className="light-mode" onClick={switchMode}></div>
      </div>
    )
  }