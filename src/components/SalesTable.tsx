//@ts-nocheck
import React, { useEffect, useReducer, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { getSale, getSales } from '../resources/SalesResource.ts';
import { SaleReducer } from '../reducers/SalesReducer.ts';
import { Junction_quantitys, Sale, initialState } from '../models/SaleInterface.ts';
import { NavLink } from 'react-router-dom';



const SalesTable = () => {

    const [selectedRow, setSelectedRow] = useState(null);
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

    const [state, dispatch] = useReducer(SaleReducer, initialState)
    const [sales, setSales] = useState<QueryDocumentSnapshot<DocumentData>[] | []>([]);
    const [junctiondata, setJunctionData] = useState<Junction_quantitys[] | []>([]);
    const [saledata, setSaledata] = useState<Sale>(initialState);



    const handleRowClick = async (saleId) => {
        setSelectedRow(saleId === selectedRow ? null : saleId);
        const { sale, junction } = await getSale(saleId)
        setSaledata({ id: sale.id, ...sale.data() })

        let junctionQuantitys: Array<Junction_quantitys> = []

        junction.map((doc) => {
            console.log(doc.data())
            const { buyed, quantity, subtotal, salesId } = doc.data()
            const temp: Junction_quantitys = {
                id: doc.id,
                saleId: salesId,
                buyed,
                quantity,
                subtotal,
            }
            junctionQuantitys.push(temp)
            /*
            const salePayload: Sale = {
                id: sale.id,
                buyed: junction,
                ...sale.data()
                
            }
            dispatch({type: "get", payload: salePayload})*/
        })
        setJunctionData(junctionQuantitys)

    }

    const handleDelete = () => {
        // Lógica para eliminar la venta
        // ...
        setConfirmDialogOpen(false);
    };

    const allSales = async () => {
        const sales = await getSales()
        setSales(sales)

    }

    useEffect(() => {
        allSales()

    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <TableContainer component={Paper} style={{ maxWidth: '600px' }}>
                <Table>
                    <TableHead>
                        <div className="divCentrar">
                            {/* <Button variant="contained" >Create new user </Button> */}

                            <NavLink to={`/sales/0`} className="btn btn-primary mx-2">Create new product</NavLink>
                        </div>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Fecha</TableCell>
                            {/* <TableCell>Cantidad de productos</TableCell> */}
                            <TableCell>Monto total</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sales.map((sale) => {
                            const { date, total } = sale.data();
                            const { id } = sale;
                            return (
                                <React.Fragment key={id}>
                                    <TableRow hover onClick={() => handleRowClick(id)}>
                                        <TableCell>{id}</TableCell>
                                        <TableCell>{JSON.stringify(date)}</TableCell>
                                        {/* <TableCell>{row.quantity}</TableCell> */}
                                        <TableCell>{total}</TableCell>
                                        <TableCell>
                                            <Button color="secondary" onClick={() => setConfirmDialogOpen(true)}>
                                                Eliminar
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    {selectedRow === id && (
                                        <TableRow>
                                            <TableCell colSpan={4}>
                                                <Typography variant="body2" style={{ marginLeft: '20px' }}>
                                                    Información detallada de la venta {saledata.id}
                                                    {junctiondata.map((doc) => {
                                                        const { saleId, buyed, quantity, subtotal } = doc
                                                        return (
                                                            <TableRow>
                                                                <TableCell>{saleId}</TableCell>
                                                                <TableCell>{buyed}</TableCell>
                                                                <TableCell>{quantity}</TableCell>
                                                                <TableCell>{subtotal}</TableCell>

                                                            </TableRow>
                                                        )
                                                    })}
                                                </Typography>
                                                {/* Aquí puedes agregar más detalles de la venta */}
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </React.Fragment>

                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={confirmDialogOpen} onClose={() => setConfirmDialogOpen(false)}>
                <DialogTitle>Confirmación de eliminación</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">¿Estás seguro de que deseas eliminar esta venta?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmDialogOpen(false)}>Cancelar</Button>
                    <Button color="secondary" onClick={handleDelete}>Eliminar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SalesTable;
