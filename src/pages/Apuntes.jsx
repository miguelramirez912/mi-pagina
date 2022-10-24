import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../aplication/Provider";
import ApuntesList from "../components/ApuntesList";
import ApunteForm from "../components/forms/ApunteForm";
import { traerApuntes } from "../firebase/apuntesController";


const Apuntes = () => {
    const [estadoCompartido, setEstadoCompartido] = useContext(appContext)

    useEffect(() => {
        getApuntes();
        console.log('Se renderiza Apuntes');
    }, []);

    const getApuntes = async () => {
        const apuntesFromDB = await traerApuntes(); 
        setEstadoCompartido({...estadoCompartido, apuntes: apuntesFromDB});
    }
    
    return(
        <div className="principal">
            <ApuntesList />
            { estadoCompartido.isAdding && <ApunteForm /> }
        </div>
    )
}

export default Apuntes;