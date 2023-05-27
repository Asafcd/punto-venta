//@ts-nocheck
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, QuerySnapshot, DocumentData, where, query   } from "firebase/firestore"
import { db } from "../firebase.ts";
import { Junction_quantitys } from "../models/SaleInterface.ts";

const junctionCollection = collection(db, "junction_quantitys")

export const addSale = async (junction_quantitys: Junction_quantitys) => {
    try {
        
    } catch (error) {
        
    }
}

export const getJunctionQuantitys = async (salesId) => {
    try {
        //const junctions: QuerySnapshot = await getDocs(junctionCollection)
        
        const q = query(collection(db, "junction_quantitys"), where("salesId", "==", salesId));
        const junctions = await getDocs(q);
        console.log(junctions.docs)
        
        
        return junctions.docs
    } catch (error) {
        console.error("Error getting junction_quantitys: ", error);
    }
}