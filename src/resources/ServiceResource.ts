//@ts-nocheck
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, QuerySnapshot } from "firebase/firestore"
import { db } from "../firebase.ts";

import { Service } from "../models/ServiceInterface.js";

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
        return serviceDocs.docs
        
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
