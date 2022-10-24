import React, {createContext, useState} from "react";


const Provider = ({children}) => {

    const [ estadoCompartido, setEstadoCompartido] = useState({
        apuntes: [],
        apunte: {
            id: '',
            plataforma: '',
            curso: '',
            titulo: '',
            prioridad: 'baja',
            status: 'en-progreso'
        },
        isAdding: false,
        addApunteButtonMode: 'add'
    })

    return(
        <appContext.Provider value={[estadoCompartido, setEstadoCompartido]}>
            {children}
        </appContext.Provider>
    )
}

export const appContext = createContext();
export default Provider;
