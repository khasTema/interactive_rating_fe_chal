import React, { useState } from "react";
import Prompt from "../pages/Prompt";
import Responce from "../pages/Response";

export default function Card(){

    const [ isSubmitted, setIsSubmitted ] = useState(false)
    const [currRate, setCurrRate ] = useState(0)

    return (
        <div className="card_component">
            { 
                isSubmitted ? 
                <Responce 
                    rate={currRate}/> 
                : 
                <Prompt 
                    submit={() => setIsSubmitted(prev => !prev)} 
                    getRating={(e) => setCurrRate(e.target.innerHTML)}/> 
            }
        </div>
    )
}

