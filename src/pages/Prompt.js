import React from "react";

import Rating from "../components/Rating";

import Icon from "../img/icon-star.svg"

export default function Prompt(props){

    return (
        <>
            <div className="star_img">
                <img src={Icon} alt="start-icon" />
            </div>
            <h1 className="card_headding align">How did we do?</h1>
            <p className="card_description align">Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!</p>
            <div className="rating">
                {Array.apply(0, Array(5)).map(function (x, i) {
                    return <Rating key={i} number={i + 1} getRate={props.getRating}/>;
                })}
            </div>
            <button className="submit" onClick={props.submit}>Submit</button>
        </>
    )
}