import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore"

export interface Sale {
    id?: string,
    date: Date
    total: number
    buyed: Array<Junction_quantitys>
}
export interface Junction_quantitys {
    id?: string,
    saleId?: string,
    elementBuyedId: string,
    quantity: number,
    subtotal: number
}

export const initialJunctionState: Junction_quantitys = {
    elementBuyedId: "",
    quantity: 0,
    subtotal: 0
}
export const initialState: Sale = {
    date: new Date(),
    total: 0,
    buyed: [initialJunctionState]
}

export type SaleAction = 
| { type: 'delete' }
| { type: 'add', payload: Sale }
| { type: 'get', payload: Sale }

export interface SalePayload {
    sale: Sale,
    junctionQuantitys: Junction_quantitys

}