import React from "react";

export default function Rating(props) {
    return <div className="rating_block" onClick={props.getRate}> {props.number} </div>
}