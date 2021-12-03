import React from "react";
import bottle from '../img/bottles/elhefe.png';

export default function Square() {
    return(
      <div className="square">
        <div className="square-content">
          <div id="text">
            <h3>El Hefe</h3>
            <p>60 dkk</p>
          </div>
          <img src={bottle} alt="beer bottle"></img>
        </div>
      </div>
    )
  }