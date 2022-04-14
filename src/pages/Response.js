import React from "react";

import Illustration from "../img/phone.svg"

export default function Responce(props){
    return (
        <>
            <div className="illustration">
                <img src={Illustration} alt="picture of phone"/>
            </div>
            <div className="user_rating_placeholder">You selected {props.rate} out of 5</div>
            <h1 className="card_headding">Thank you!</h1>
            <p className="card_description">We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
        </>
    )
}