import React from "react";

export default function PopUp(props) {
    function closePopUp() {
        props.setOpen(false);
    }
    return (
        <div className="pop-up">
            <div className="beer-bg">
                <div className="title">
                    <div className="name-price">
                        <h1 className="beer-name">{props.name}</h1>
                        <h2 className="beer-price">60 dkk</h2>
                    </div>
                <hr/>
                </div>
                <div className="icons">
                    <div className="icon">
                        <div id="bottle-icon" className="bottle-icon-lightmode"></div>
                        <p id="bottle-text">330<br/>ml</p>
                        <h3 id="size">Size</h3>
                    </div>
                    <div className="icon">
                        <div id="circle-icon" className="circle-icon-lightmode"></div>
                        <p id="circle-text">{props.alc}%</p>
                        <h3 id="alcohol">Alc. level</h3>
                    </div>
                </div>
                <div className="info1">
                    <h2 id="category">Category: <span>{props.category}</span></h2>
                    <div id="overall-impression">
                    <h2>Overall impression:</h2>
                    <p>{props.description.overallImpression}</p>
                    </div>
                </div>
                <div className="bottle-container">
                   <img className="bottle-img" src={`/img/bottles/${props.label}`} alt="el hefe"></img>
                </div>
            </div>
            <div className="plain-bg">
                <div className="info2">
                    <div id="aroma">
                        <h2>Aroma:</h2>
                        <p>{props.description.aroma}</p>
                     </div>
                    <div id="mouthfeel">
                        <h2>Mouthfeel:</h2>
                        <p>{props.description.mouthfeel}</p>
                    </div>
                </div>
                <div id="close-popup" className="close-lightmode" onClick={closePopUp}></div>
            </div>
        </div>
    )
}