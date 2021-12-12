import React from "react";

export default function Header() {

  function switchMode() {
    console.log("switch mode")
    const switchButton = document.querySelector(".switch");
    const logo = document.querySelector(".logo");
    const mobileView = window.matchMedia('(min-width: 768px');
    var buttons = document.querySelectorAll('.buttons button');

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
        document.querySelector("#wrapper").classList.add("dark-wrapper");
        document.querySelector("#form-wrapper").style.backgroundColor = "var(--dark-grey)";
        document.querySelector(".cardName").style.color = "var(--background-light)";
        document.querySelector(".cardNumber").style.color = "var(--background-light)";
        document.querySelector(".expiryDate").style.color = "var(--background-light)";
        document.querySelector(".securityCode").style.color = "var(--background-light)";
        document.querySelector(".payButton").style.color = "var(--background-light)";
        document.querySelector(".payButton").style.borderColor = "var(--background-light)";
        document.querySelector(".payment-form span").style.color = "var(--background-light)";
        document.querySelector(".paymentSwitch").classList.remove("light-mode");
        document.querySelector(".paymentSwitch").classList.add("dark-mode");
        document.querySelector(".paymentLogo").classList.remove("light-logo");
        document.querySelector(".paymentLogo").classList.add("dark-logo");
        // document.querySelector(".beer-name").style.color = "var(--background-light)";
        // document.querySelector(".beer-price").style.color = "var(--background-light)";
        // document.querySelector(".beer-bg hr").style.color = "var(--background-light)";
        // document.querySelector("#bottle-icon").classList.remove("bottle-icon-lightmode");
        // document.querySelector("#bottle-icon").classList.add("bottle-icon-darkmode");
        // document.querySelector("#circle-icon").classList.remove("circle-icon-lightmode");
        // document.querySelector("#circle-icon").classList.add("circle-icon-darkmode");
        // document.querySelector("#size").style.color = "var(--background-light)";
        // document.querySelector("#alcohol").style.color = "var(--background-light)";
        // document.querySelector("#category").style.color = "var(--background-light)";
        // document.querySelector("#overall-impression h2").style.color = "var(--background-light)";
        // document.querySelector("#overall-impression p").style.color = "var(--background-light)";
        // document.querySelector(".pop-up").style.backgroundColor = "var(--dark-grey)";
        // document.querySelector("#aroma h2").style.color = "var(--background-light)";
        // document.querySelector("#aroma p").style.color = "var(--background-light)";
        // document.querySelector("#mouthfeel h2").style.color = "var(--background-light)";
        // document.querySelector("#mouthfeel p").style.color = "var(--background-light)";
        // document.querySelector("#close-popup").classList.remove("close-lightmode");
        // document.querySelector("#close-popup").classList.add("close-darkmode");
        // document.querySelector("#circle-text").style.color = "var(--dark-grey)";
        // document.querySelector("#bottle-text").style.color = "var(--dark-grey)";
        // document.querySelector(".pop-up").style.filter = "drop-shadow(2px 2px 2px var(--light-grey))"
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
        for (var o = 0; o < buttons.length; o++) {
          buttons[o].classList.remove('button-darkmode');
          buttons[o].classList.add('button-lightmode');
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
        document.querySelector("#wrapper").classList.add("light-wrapper");
        // document.querySelector(".beer-name").style.color = "var(--dark-grey)";
        // document.querySelector(".beer-price").style.color = "var(--dark-grey)";
        // document.querySelector(".beer-bg hr").style.color = "var(--dark-grey)";
        // document.querySelector("#bottle-icon").classList.remove("bottle-icon-darkmode");
        // document.querySelector("#bottle-icon").classList.add("bottle-icon-lightmode");
        // document.querySelector("#circle-icon").classList.remove("circle-icon-darkmode");
        // document.querySelector("#circle-icon").classList.add("circle-icon-lightmode");
        // document.querySelector("#size").style.color = "var(--dark-grey)";
        // document.querySelector("#alcohol").style.color = "var(--dark-grey)";
        // document.querySelector("#category").style.color = "var(--dark-grey)";
        // document.querySelector("#overall-impression h2").style.color = "var(--dark-grey)";
        // document.querySelector("#overall-impression p").style.color = "var(--dark-grey)";
        // document.querySelector(".pop-up").style.backgroundColor = "var(--section-background)";
        // document.querySelector("#aroma h2").style.color = "var(--dark-grey)";
        // document.querySelector("#aroma p").style.color = "var(--dark-grey)";
        // document.querySelector("#mouthfeel h2").style.color = "var(--dark-grey)";
        // document.querySelector("#mouthfeel p").style.color = "var(--dark-grey)";
        // document.querySelector("#close-popup").classList.remove("close-darkmode");
        // document.querySelector("#close-popup").classList.add("close-lightmode");
        // document.querySelector("#circle-text").style.color = "var(--section-background)";
        // document.querySelector("#bottle-text").style.color = "var(--section-background)";
        // document.querySelector(".pop-up").style.filter = "drop-shadow(2px 2px 2px var(--dark-grey))"
    }
  }
    return (
      <div className="header">
        <div className="logo light-logo"></div>
        <div className="switch light-mode" onClick={switchMode}></div>
      </div>
    )
  }