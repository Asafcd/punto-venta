//@ts-nocheck
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc, Firestore, CollectionReference, QuerySnapshot, DocumentData } from "firebase/firestore"
import { db } from "../firebase.ts";

import { Product } from "../models/ProductInterface.ts";

/* const auth = getAuth(app);
const db: Firestore = getFirestore(app) */
const productsCollection = collection(db, 'products');

export const addProduct = async (product: Product) => {
    try {
        await addDoc(productsCollection, product);
        return true;
    } catch (error) {
        return false;
    }
};

export const getProducts: QuerySnapshot<DocumentData> = async () => {
    try {
        const productDocs: QuerySnapshot = await getDocs(productsCollection)
        return productDocs.docs
        
    } catch (error) {
        console.error("Error getting products: ", error);
    }
}

export const getProduct = async (id) => {
    try {
        const product = await getDoc(doc(productsCollection, id))
        return product.data()
    } catch (error) {
        console.error("cannot retrieve: ", error)
    }
}

export const updateProduct = async (id, product: Product) => {
    try {
        await updateDoc( doc(productsCollection, id), product);
        return true
    } catch (error) {
        console.error("failed update: ", error)
        return false
    }
}

export const deleteProduct = async (id) => {
    try {
        await deleteDoc( doc(productsCollection, id));
        return true
    } catch (error) {
        console.error("failed delete: ", error)
        return false
    }
}
