import React, { useContext, useEffect } from "react";
import { BsFillTrashFill } from 'react-icons/bs';
import { TbEdit } from 'react-icons/tb';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { ImCheckboxUnchecked } from 'react-icons/im'
import { appContext } from "../aplication/Provider";
import { deleteApunteFromDB, traerApuntes } from "../firebase/apuntesController";


const ApuntesList = () => {
    const [sharedState, setSharedState] = useContext(appContext);

    useEffect(() => {
        initializeApuntes();
        // console.log('Estado compartido desde ', estadoCompartido);
        console.log('Se renderiza ApuntesList');
    }, []);
    const initializeApuntes = () => {
        traerApuntes()
        .then(response => setSharedState({...sharedState, apuntes: [...response], isAdding: false}))
        .catch(error => console.log(error))
    }

    const getApunteToEdit = (id) => {
        const selectedApunte = sharedState.apuntes.find(apunte => {
            return id === apunte.id;
        })
        console.log(selectedApunte);
        setSharedState({...sharedState, apunte: {
            id: selectedApunte.id,
            plataforma: selectedApunte.plataforma,
            curso: selectedApunte.curso,
            titulo: selectedApunte.titulo,
            prioridad: selectedApunte.prioridad,
            status: selectedApunte.status
        }, isAdding: true, addApunteButtonMode: 'edit'});
        // setSharedState({...sharedState, isAdding: true});
    }

    const deleteApunte = (id) => {
        console.log(id);
        deleteApunteFromDB(id);
        initializeApuntes();
    }

    return(
        <>
            <h2>Apuntes</h2>
            <table>
                <thead>
                    <tr>
                        <th>Plataforma</th>
                        <th>Curso</th>
                        <th>Titulo</th>
                        <th>Prioridad</th>
                        <th>Status</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { sharedState.apuntes.map( (apunte) => {
                        return(
                            <tr key={apunte.id}>
                                <td>{apunte.plataforma}</td>
                                <td>{apunte.curso}</td>
                                <td>{apunte.titulo}</td>
                                <td>{apunte.prioridad}</td>
                                <td>{apunte.status}</td>
                                <td>
                                    <BsFillTrashFill onClick={() => deleteApunte(apunte.id)}/>
                                    <TbEdit onClick={() => getApunteToEdit(apunte.id)}/>
                                    {/* <AiFillCheckSquare/> */}
                                    {/* <AiOutlineCheckSquare/> */}
                                    <ImCheckboxUnchecked />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button 
                onClick={() => setSharedState({...sharedState, isAdding: !sharedState.isAdding})}
            >
                Agregar Apunte
            </button>
        </>
    )
}

export default ApuntesList;