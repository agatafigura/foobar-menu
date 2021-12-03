import React from "react";
import logo from '../img/icons/logo.png';
import switchicon from '../img/icons/switch.png'

export default function Header() {
    return (
      <div className="header">
        <img className="logo" src={logo} alt={"logo"}></img>
        <img className="switch" src={switchicon} alt={"switch"}></img>
      </div>
    )
  }