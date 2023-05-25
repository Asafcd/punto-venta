export interface Sale {
    id?: string,
    date: Date
    totalAmount: number
    buyed: Array<Junction_quantitys>
}

export interface Junction_quantitys {
    id?: string,
    saleId: string,
    elementBuyedId: string,
    quantity: number
}