import React, { useState } from "react";
import Prompt from "../pages/Prompt";
import Responce from "../pages/response";

export default function Card(){

    const [ isSubmitted, setIsSubmitted] = useState(false)
    console.log(isSubmitted)

    function flipCard(){
        setIsSubmitted(prev => !prev)
    }

    return (
        <div className="card_component">
            { isSubmitted ? <Responce /> : <Prompt submit={flipCard}/> }
        </div>
    )
}

