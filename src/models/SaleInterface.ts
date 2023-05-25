export interface Sale {
    id?: string,
    date: Date
    totalAmount: number
}

export interface Junction_quantitys {
    id?: string,
    saleId: string,
    elementId: string,
    quantity: number
}