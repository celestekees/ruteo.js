import React  from "react";
import { useParams } from  "react-router-dom";

//esto s eagrega para q muestre todos los id
const productos=
    [{id:1, nombre:'producto nº1', descripcion:'desc prod 1'},
    {id:2, nombre:'producto nº2', descripcion:'desc prod 2'},
    {id:3, nombre:'producto nº3', descripcion:'desc prod 3'},
    {id:4, nombre:'producto nº4', descripcion:'desc prod 4'}]

//en el array productos estan los elementos productos q se recorren con id
//el parseInt convierte el valor de cadena (por defecto) a entero
function MostrarProducto(){
    const {id}=useParams();
    const producto=productos.find(item=>item.id===parseInt(id));
    return(
        <>
        <h1>Mostrar porducto {id}</h1>
        <h2>{producto.nombre}</h2>
        <h3>{producto.descripcion}</h3>
        </>
            )
}
export default MostrarProducto;