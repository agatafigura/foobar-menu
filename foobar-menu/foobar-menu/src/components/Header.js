import React from "react";


export default function Header(props) {

    let darkMode = localStorage.getItem("darkMode");
    console.log(darkMode);

    function updateDarkMode() {
      darkMode = localStorage.getItem("darkMode");
      if (darkMode !== "enabled") {
        props.enableDarkMode();
      } else {
        props.disableDarkMode();
      }
    }

    if (darkMode === "enabled") {
      props.enableDarkMode();
    }

    return (
      <div className="header">
        <div id="logo" className="light-logo"></div>
        <div id="switch" className="light-mode" onClick={updateDarkMode} ></div>
      </div>
    )
  }