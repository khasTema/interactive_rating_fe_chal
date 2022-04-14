import React from "react";

export default function Rating(props) {
    return <div className="rating_block" value={props.number}> {props.number} </div>
}