import React  from "react";
import "./intro.css";
import supermercado from './supermercado.png';
import CustomButton from "../button/customButton";

function Intro({titulo}){
    return(
        <div className="contenedorImagen">
            <img src={supermercado} className="icon" alt="foto"/>
            <h2>{titulo}</h2>
            <CustomButton color="blue" texto="Boton intro"></CustomButton>
            <CustomButton color="red" texto="Boton intro"></CustomButton>
        </div>
    )
}
export default Intro;
