import React, {useState} from "react";
import PopUp from "./PopUp";

export default function Product(props) {
  const [open, setOpen] = useState(false);
  function openPopUp() {
    setOpen(true);
  }

  return(
      <div className="product">
        <div className="square">
        <div className="square-content">
          <div id="text">
            <h3>{props.name}</h3>
            <p>60 dkk</p>
          </div>
          <img src={`/img/bottles/${props.label}`} alt="beer bottle"></img>
        </div>
      </div>
      <div className="buttons">
        <button className="button-lightmode" id="read-more" onClick={openPopUp} setOpen={setOpen} {...props}>Read more</button>
        <button className="button-lightmode" id="add" onClick={() => props.addBeer(props)} {...props}>Add</button>
      </div>
        {open && <PopUp  setOpen={setOpen} {...props}/>}
      </div>
    )
  }