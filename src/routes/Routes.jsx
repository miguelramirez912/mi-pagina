import React from "react";
import {Routes, Route} from "react-router-dom";
import Apuntes from "../pages/Apuntes";
import PaginasUsadas from "../pages/PaginasUsadas";

const Rutas = () => {
    return(
            <Routes>
                <Route path="/" element={<h4>Inicio</h4>}/>
                <Route path="/apuntes" element={<Apuntes/>}/>
                <Route path="/frecuentes" element={<PaginasUsadas/>}/>
            </Routes>
    )
}

export default Rutas;