import { collection, addDoc, getDocs, doc, setDoc, deleteDoc  } from "firebase/firestore";
import { db } from "./config";

// Crear Apunte
const addApunteToFS = async (apunte) => {
    try {
        const docRef = await addDoc(collection(db, "apuntes"), apunte);
          console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.log('No se pudo agregar el documento ', error);
    }

}

// Traer Todos los apuntes
const traerApuntes = async () => {
    const querySnapshot = await getDocs(collection(db, "apuntes"));
    const apuntes = querySnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    });
    console.log(apuntes);
    return apuntes;
}

// Editar apunte
const updateApunteToDB = async (apunte) => {

    console.log(apunte);
    try {
        await setDoc(doc(db, "apuntes", apunte.id), {
            plataforma: apunte.plataforma,
            curso: apunte.curso,
            titulo: apunte.titulo,
            prioridad: apunte.prioridad,
            status: apunte.status
        });
    } catch (error) {
        console.log(error);
    }
}

// Eliminar Apunte 
const deleteApunteFromDB = async (id) => {
        
    try {
        await deleteDoc(doc(db, "apuntes", id));
    } catch (error) {
        console.log(error);
    }
}



export {addApunteToFS, traerApuntes, updateApunteToDB, deleteApunteFromDB};

