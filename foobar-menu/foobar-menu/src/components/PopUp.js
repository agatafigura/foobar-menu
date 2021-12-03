import React from "react";
import bottle from '../img/icons/bottle.svg'
import circle from '../img/icons/circle.svg'
import bottleImg from '../img/bottles/elhefe.png'
import close from '../img/icons/close.svg'

export default function PopUp() {
    function closePopUp() {
        document.querySelector("#pop-up").classList.add("hidden");
        document.querySelector(".App").classList.remove("dark");
    }
    return (
        <div id="pop-up" className="hidden">
            <div className="beer-bg">
                <div class="title">
                <h1>El Hefe</h1>
                <hr/>
                </div>
                <div className="icons">
                    <div className="icon">
                        <img id="bottle-icon" src={bottle} alt="beer bottle icon"></img>
                        <h3>Size</h3>
                    </div>
                    <div className="icon">
                        <img id="circle-icon" src={circle} alt="circle icon"></img>
                        <h3>Alc. level</h3>
                    </div>
                </div>
                <div className="info1">
                    <h2>Category: <span>IPA</span></h2>
                    <div>
                    <h2>Overall impression:</h2>
                    <p>Refreshing wheat or rye beers that can display 
                    more hop character and less yeast character 
                    than their German cousins.</p>
                    </div>
                </div>
                <div className="bottle-container">
                   <img className="bottle-img" src={bottleImg} alt="el hefe"></img>
                </div>
            </div>
            <div className="plain-bg">
                <div className="info2">
                    <div>
                        <h2>Aroma:</h2>
                        <p>Low to moderate grainy wheat or rye character.  
                    Some malty sweetness is acceptable.  
                    Esters can be moderate to none, although should 
                    reflect American yeast strains.  The clove and banana
                    aromas common to German hefeweizens are inappropriate.
                     Hop aroma may be low to moderate, and can have either a
                     citrusy American or a spicy or floral noble hop character. 
                     Slight crisp sharpness is optional.  No diacetyl.</p>
                     </div>
                    <div>
                        <h2>Mouthfeel:</h2>
                        <p>Medium-light to medium body.  Medium-high to high
                    carbonation. May have a light alcohol warmth in stronger 
                    examples.</p>
                    </div>
                </div>
                <img id="close-popup" src={close} alt="close button" onClick={closePopUp}></img>
            </div>
        </div>
    )
}