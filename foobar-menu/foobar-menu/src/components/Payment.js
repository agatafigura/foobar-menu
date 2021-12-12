import React from "react";

export default function Payment() {

    function switchMode() {
        const switchButton = document.querySelector(".paymentSwitch");
        const logo = document.querySelector(".paymentLogo");
        const mobileView = window.matchMedia('(min-width: 768px');

      if (switchButton.classList.contains("light-mode") && mobileView.matches) {
        switchButton.classList.remove("light-mode");
        switchButton.classList.add("dark-mode");
        logo.classList.remove("light-logo");
        logo.classList.add("dark-logo");
        document.querySelector("#form-wrapper").style.backgroundColor = "var(--dark-grey)";
        document.querySelector(".cardName").style.color = "var(--background-light)";
        document.querySelector(".cardNumber").style.color = "var(--background-light)";
        document.querySelector(".expiryDate").style.color = "var(--background-light)";
        document.querySelector(".securityCode").style.color = "var(--background-light)";
        document.querySelector(".payButton").style.color = "var(--background-light)";
        document.querySelector(".payButton").style.borderColor = "var(--background-light)";
        document.querySelector(".payment-form span").style.color = "var(--background-light)";
        } else {
            switchButton.classList.remove("dark-mode");
            switchButton.classList.add("light-mode");
            logo.classList.remove("dark-logo");
            logo.classList.add("light-logo");
            document.querySelector("#form-wrapper").style.backgroundColor = "var(--background-light)";
            document.querySelector(".cardName").style.color = "var(--dark-grey)";
            document.querySelector(".cardNumber").style.color = "var(--dark-grey)";
            document.querySelector(".expiryDate").style.color = "var(--dark-grey)";
            document.querySelector(".securityCode").style.color = "var(--dark-grey)";
            document.querySelector(".payButton").style.color = "var(--dark-grey)";
            document.querySelector(".payButton").style.borderColor = "var(--dark-grey)";
            document.querySelector(".payment-form span").style.color = "var(--dark-grey)";
        }
    }

    return(
        <div id="form-wrapper" className="hidden">
            <div id="wrapper">
        <div className="paymentHeader">
            <div className="paymentLogo light-logo"></div>
            <div className="paymentSwitch light-mode" onClick={switchMode}></div>
      </div>
        <form name="payment" className="payment-form" action="">
        <label className="cardName">
          Card Holder Name
          <input
            name="nameOnCard"
            type="text"
            required
            autofocus
            placeholder="Ex. John Doe"
            autocomplete="name"
            required
          />
        </label>
        <div className="cardNumberDiv">
          <label className="cardNumber">
            Card Number
            <input
              id="cardNumber"
              name="cardNumber"
              type="text"
              inputmode="numeric"
              minlength="19"
              maxlength="19"
              placeholder="1234 5678 9012 3456"
              required
            />
          </label>
          <p className="errorMessage cardNumberErrMessage">Invalid card number</p>
        </div>
        <div className="expiry-security">
          <div className="expiryDateContainer">
            <label className="expiryDate" for="expiryMonth"> Expiry Date</label>
            <div className="expiryInputs">
              <div className="expiryMonthDiv">
                <input
                  type="number"
                  name="expiryMonth"
                  id="expiryMonth"
                  min="1"
                  max="12"
                  placeholder="MM"
                  required
                />
                <p className="monthErrMessage errorMessage">
                  The month is not valid
                </p>
              </div>
              <span>/</span>
              <input
                type="number"
                id="expiryYear"
                name="expiryYear"
                maxlength="2"
                placeholder="YY"
                required
              />
            </div>
          </div>
          <label className="securityCode">
            Security Code
            <input
              id="securityCode"
              type="text"
              name="securityCode"
              pattern="[0-9]*"
              inputmode="numeric"
              maxlength="3"
              placeholder="123"
              required
            />
          </label>
        </div>
        <button className="payButton">Complete order</button>
      </form>
      </div>
      </div>
    )
}