import React from "react";

export default function Buttons() {

  function openPopUp() {
    document.querySelector("#pop-up").classList.remove("hidden");
    document.querySelector(".App").classList.add("dark");
  }
    return(
      <div className="buttons">
        <button className="read-more" onClick={openPopUp}>Read more</button>
        <button className="add">Add</button>
      </div>
    )
  }