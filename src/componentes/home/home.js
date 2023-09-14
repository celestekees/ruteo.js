import React  from "react";
//import Intro from "../intro/intro";
//<Intro titulo="Cosme Fulanito"></Intro>
import "./home.css";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
        <h1>inicio</h1>
        <Link to="/producto/1">ver producto 1 </Link>
        <Link to="/registro">Registro</Link>
        <Link to="/login">Login </Link>
        </div>
    )
}
export default Home;