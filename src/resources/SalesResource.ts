//@ts-nocheck
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, QuerySnapshot, DocumentData, QueryDocumentSnapshot } from "firebase/firestore"
import { db } from "../firebase.ts";
import { Sale } from "../models/SaleInterface.ts";
import { getJunctionQuantitys } from "./JunctionResources.ts";

const salesCollection = collection(db, "sales")


export const addSale = async (sale: Sale) => {
    try {
        await addDoc(salesCollection, sale);
        return true;
        
    } catch (error) {
        
    }
}

export const getSale = async (salesId) => {
    try {
        const junction = await getJunctionQuantitys(salesId)
        const sale = await getDoc(doc(salesCollection, salesId))
        //const saledata = sale.data()
    
        return {sale, junction}
    } catch (error) {
        console.error(error)
    }
}

export const getSales = async (): QueryDocumentSnapshot<DocumentData>[] => {
    try {
        const sales: QuerySnapshot = await getDocs(salesCollection)
        return sales.docs
    } catch (error) {
        console.error(error)
    }
}

export const deleteSale = async () => {
    try {
        
    } catch (error) {
        
    }
}