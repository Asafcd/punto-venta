//@ts-nocheck
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, Firestore, CollectionReference, QuerySnapshot } from "firebase/firestore"
import { app } from "../firebase.ts";
import { getAuth } from 'firebase/auth';
import { Service } from "../models/ServiceInterface.ts";

const auth = getAuth(app);
const db: Firestore = getFirestore(app)
const servicesCollection = collection(db, 'services');

export const addService = async (service: Service) => {
    try {
        await addDoc(servicesCollection, service);
        return true;
    } catch (error) {
        return false;
    }
};

export const getServices = async () => {
    try {
        const serviceDocs: QuerySnapshot = await getDocs(servicesCollection)
        return serviceDocs
        
    } catch (error) {
        console.error("Error getting services: ", error);
    }
}

export const getService = async (id) => {
    try {
        const service = await getDoc(doc(servicesCollection, id))
        return service.data()
    } catch (error) {
        console.error("cannot retrieve: ", error)
    }
}

export const updateService = async (id, service: Service) => {
    try {
        await updateDoc( doc(servicesCollection, id), service);
        return true
    } catch (error) {
        console.error("failed update: ", error)
        return false
    }
}

export const deleteService = async (id) => {
    try {
        await deleteDoc( doc(servicesCollection, id));
        return true
    } catch (error) {
        console.error("failed delete: ", error)
        return false
    }
}
