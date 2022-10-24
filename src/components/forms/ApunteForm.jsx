import React, { useEffect, useContext } from "react";
import { addApunteToFS, updateApunteToDB } from "../../firebase/apuntesController";
import { appContext } from "../../aplication/Provider";
import { traerApuntes } from "../../firebase/apuntesController";

const ApunteForm = () => {
    const [sharedState, setSharedState] = useContext(appContext);
    const initializeApuntes = () => {
        traerApuntes()
        .then(response => setSharedState({...sharedState, apuntes: [...response], isAdding: false}))
        .catch(error => console.log(error))
    }
    const guardarApunte =  e => {
        e.preventDefault();
        console.log(e.target.textContent)
        if (e.target.textContent === 'Agregar') {
            addApunteToFS(sharedState.apunte);
            
        } else {
            console.log('Listo para actualizar');
            updateApunteToDB(sharedState.apunte);
        }

        setSharedState({...sharedState, addApunteButtonMode: 'add', isAdding: false});
        initializeApuntes();
        cancelarGuardado();
        
    }
    const cancelarGuardado = () => {
        setSharedState({...sharedState, apunte: {
            plataforma: '',
            curso: '',
            titulo: '',
            prioridad: 'baja',
            status: 'en-progreso'
        }, isAdding: false, addApunteButtonMode: 'add'});
    }

    useEffect(() => {
        // console.log('Estado desde ApunteForm ', sharedState);
        console.log('Se renderiza ApunteForm');
    }, [])
    return(
        <>
            <form>
                <label htmlFor="plataforma">Plataforma</label>
                <input 
                    type="text" 
                    id="plataforma" 
                    required 
                    onChange={e => setSharedState({...sharedState, apunte: {...sharedState.apunte, plataforma: e.target.value}})}
                    value={sharedState.apunte.plataforma}
                />
                <label htmlFor="curso">Curso</label>
                <input 
                    type="text" 
                    id="curso" 
                    required 
                    onChange={e => setSharedState({...sharedState, apunte: {...sharedState.apunte, curso: e.target.value}})}
                    value={sharedState.apunte.curso}
                />
                <label htmlFor="titulo">Titulo</label>
                <input 
                    type="text" 
                    id="titulo" 
                    required 
                    onChange={e => setSharedState({...sharedState, apunte: {...sharedState.apunte, titulo: e.target.value}})} 
                    value={sharedState.apunte.titulo}
                />
                <label htmlFor="prioridad">Prioridad</label>
                <select 
                    id="prioridad" 
                    defaultValue={sharedState.apunte.prioridad} 
                    onChange={e => setSharedState({...sharedState, apunte: {...sharedState.apunte, prioridad: e.target.value}})}
                >
                    <option value="alta">Alta</option>
                    <option value="normal">Normal</option>
                    <option value="baja">Baja</option>
                </select>
                <label htmlFor="status">Status</label>
                <select 
                    id="status" 
                    defaultValue={sharedState.apunte.status} 
                    onChange={e => setSharedState({...sharedState, apunte: {...sharedState.apunte, status: e.target.value}})}
                >
                    <option value="en-progreso">En Progreso</option>
                    <option value="en-documentos">En Documentos</option>
                    <option value="en-tarjetas">En Tarjetas</option>
                </select>
                
                
            </form>
            <button onClick={guardarApunte}>
                {sharedState.addApunteButtonMode === 'add' ? 'Agregar' : 'Guardar'}
            </button>
            <button onClick={cancelarGuardado}>Cancelar</button>
        </>
    )
}

export default ApunteForm;