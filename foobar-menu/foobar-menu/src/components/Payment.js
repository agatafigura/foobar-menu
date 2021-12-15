import React from "react";
import Header from "./Header";
import Thankyou from "./Thankyou";

export default function Payment(props) {

 function cardNumberFormat(e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, "").replace(/(.{4})/g, "$1 ").trim();
  }

  function expiryMonthFormat() {
    const monthInput = document.querySelector("#expirymonth");
    if (monthInput.value > 1 && monthInput.value.length == 1) {
      monthInput.value = `0${monthInput.value}`;
      document.getElementById("expiryyear").focus();
    } else if (monthInput.value.length == 2 && monthInput.value[1] <= 2) {
      document.getElementById("expiryyear").focus();
      console.log(monthInput.value[1]);
    } else if (monthInput.value[1] > 2) {
    document.querySelector(".monthErrMessage").classList.add("animateMessage");
    }
  }

  function expiryYearFormat() {
  const yearInput = document.querySelector("#expiryyear");
    if (yearInput.value.length == 2) {
      document.querySelector("#securitycode").focus();
    }
  }

  function showThankYou() {
    const validity = document.querySelector("form").checkValidity();
    if (validity === true) {
    document.querySelector("#thank-you").classList.remove("hidden");
    }
  }

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

  const url = "https://testdatabase-6dea.restdb.io/rest/foobar"
  const apikey = "606f49abf592f7113340eda2"

    function handleSubmit(e) {
      e.preventDefault();

      const cardNumberInput = document.querySelector("#cardnumber");
      if (cardNumberInput.value.length < 19) {
        e.preventDefault();
        console.log("invalid card");
        document.querySelector(".cardNumberErrMessage").classList.add("animateMessage");
      }
      const form = document.querySelector("form");
      const payload = {
        nameoncard: form.nameoncard.value,
        cardnumber: form.cardnumber.value,
        expirymonth: form.expirymonth.value,
        expiryyear: form.expiryyear.value,
        securitycode: form.securitycode.value
      }

      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-apikey": apikey,
          "cache-control": "no-cache",
        },
        body: JSON.stringify(payload)
      })
      .then((res) => res.json())
      .then((data) => {
        form.elements.nameoncard.value = "";
        form.elements.cardnumber.value = "";
        form.elements.expirymonth.value = "";
        form.elements.expiryyear.value = "";
        form.elements.securitycode.value = "";
        document.querySelectorAll(".errorMessage").forEach(message => {
          message.classList.add("hidden");
        })
        console.log(data);
      });
    }

    return(
      <>
        <div id="form-wrapper" className="hidden">
        <Header {...props}/>
            <div id="wrapper">
        <div className="paymentHeader">
            <div className="paymentLogo light-logo"></div>
            <div className="paymentSwitch light-mode" onClick={switchMode}></div>
      </div>
        <form name="payment" className="payment-form" onSubmit={handleSubmit}>
        <label className="cardName">
          Card Holder Name
          <input
            id="nameoncard"
            name="nameoncard"
            type="text"
            required
            autoFocus
            placeholder="Ex. John Doe"
            autoComplete="name"
            required
          />
        </label>
        <div className="cardNumberDiv">
          <label className="cardNumber">
            Card Number
            <input
              id="cardnumber"
              name="cardnumber"
              type="text"
              inputMode="numeric"
              minLength="19"
              maxLength="19"
              placeholder="1234 5678 9012 3456"
              required
              onChange={cardNumberFormat}
            />
          </label>
          <p className="errorMessage cardNumberErrMessage">Invalid card number</p>
        </div>
        <div className="expiry-security">
          <div className="expiryDateContainer">
            <label className="expiryDate" htmlFor="expiryMonth">Expiry Date</label>
            <div className="expiryInputs">
              <div className="expiryMonthDiv">
                <input
                  type="number"
                  name="expirymonth"
                  id="expirymonth"
                  min="1"
                  max="12"
                  placeholder="MM"
                  required
                  onChange={expiryMonthFormat}
                />
                <p className="monthErrMessage errorMessage">
                  The month is not valid
                </p>
              </div>
              <span>/</span>
              <input
                type="number"
                id="expiryyear"
                name="expiryyear"
                maxLength="2"
                placeholder="YY"
                required
                onChange={expiryYearFormat}
              />
            </div>
          </div>
          <label className="securityCode">
            Security Code
            <input
              id="securitycode"
              type="text"
              name="securitycode"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="3"
              placeholder="123"
              required
            />
          </label>
        </div>
        <p id="total-repeat"><span>Total:</span> {props.addTotal()}dkk</p>
        <button type="submit" className="payButton" onClick={showThankYou}>Complete order</button>
      </form>
      </div>
      </div>
      <Thankyou enableDarkMode={props.enableDarkMode} disableDarkMode={props.disableDarkMode} setOrder={props.setOrder}/>
      </>
    )
  }