//@ts-nocheck
import { useReducer } from "react";

import { Sale, Junction_quantitys, initialState, initialJunctionState, SaleAction } from "../models/SaleInterface.ts";
import { getSales } from "../resources/SalesResource.ts";

export const SaleReducer = (state: Sale, action: SaleAction) => {
    switch (action.type) {
        case 'get':
            const sale = action.payload

            const {buyed} = sale
            let junctionQuantitys: Array<Junction_quantitys> = []
            console.log(buyed)
            /* buyed.map((doc) => {
                const {elementBuyedId, quantity, subtotal} = doc
                const temp: Junction_quantitys = { 
                    id: buyed.id, 
                    saleId: sale.id,
                    elementBuyedId,
                    quantity,
                    subtotal,
                }
                junctionQuantitys.push(temp)
            }) */

         
            
            const tempState = {
                ...sale,
                buyed: junctionQuantitys
            }
            return tempState
            
        default:
            return state;
    }
  }