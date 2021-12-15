import React from "react";
import Header from "./Header";

export default function Thankyou(props) {
    function goBack() {
        document.querySelector("#thank-you").classList.add("hidden");
        document.querySelector("#form-wrapper").classList.add("hidden");
        props.setOrder([]);
    }

    return(
        <div id="thank-you" className="hidden">
            <Header {...props}/>
            <div className="thankyou-message">
                <div>
                    <h1>Thank you for ordering!</h1>
                    <h2>It was great having you at FooBar.</h2>
                </div>
                <button id="order-more" onClick={goBack}>Order more</button>
            </div>
        </div>
    )
}