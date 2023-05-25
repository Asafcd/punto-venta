//@ts-nocheck
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, QuerySnapshot, DocumentData } from "firebase/firestore"
import { db } from "../firebase.ts";
import { Sale } from "../models/SaleInterface.ts";

const salesCollection = collection(db, "sales")

export const addSale = async (sale: Sale) => {
    try {
        
    } catch (error) {
        
    }
}

export const getSales = async () => {
    try {
        
    } catch (error) {
        
    }
}

export const getSale = async () => {
    try {
        
    } catch (error) {
        
    }
}

export const deleteSale = async () => {
    try {
        
    } catch (error) {
        
    }
}