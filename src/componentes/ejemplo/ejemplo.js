import React, { useState } from "react";
import "./ejemplo.css";
//cambio de estado
const Ejemplo=()=>{
    //esta fc setea el nombre
    const [nombre, SetNombre]=useState('Hermione')
    
    //esta fc cambia el valor del nombre
    const CambiarNombre=()=>{
        SetNombre('Harry')
    }

    return(
        <div>
            <h3>Ejemplos</h3>
                <h4 className="nom">{nombre}</h4>
        
        <button onClick={CambiarNombre}>Cambiar el nombre</button>
        </div>
    )
};

export default Ejemplo;