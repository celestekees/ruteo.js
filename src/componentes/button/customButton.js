import React from "react";
import "./button.css";

function CustomButton({texto,color}){
    return(
        <button className="customButton" 
        style={{backroundcolor:color}}> 
        {texto} </button>
        
        )
}

export default CustomButton;