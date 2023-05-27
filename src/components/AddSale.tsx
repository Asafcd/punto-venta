//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams, redirect } from 'react-router-dom';
import { Alert, Button, Container, Grid, TextField, Typography, Select, MenuItem, InputLabel } from '@mui/material';

import { getProduct, getProducts } from "../resources/ProductResource.ts";
import { getService, getServices } from "../resources/ServiceResource.ts";
import useForm from '../hooks/useForm.ts';
import { Product } from '../models/ProductInterface.ts';
import { Sale } from '../models/SaleInterface.ts';


const emptySale: Sale = {
    id: "",
    date: new Date(),
    total: 0,
    buyed: []
}

function AddSale() {

    const [sale, setSale] = useState<Sale>(emptySale)
    const [selectedOption, setSelectedOption] = useState('');

    const [products, setProducts] = useState<QueryDocumentSnapshot<DocumentData>[] | []>([]);
    const [product, setProduct] = useState()

    const [services, setServices] = useState<QueryDocumentSnapshot<DocumentData>[] | []>([]);
    const [service, setService] = useState()

    const [saleData, handleChange, setDataState] = useForm(sale)
    const { id, date, total, buyed } = saleData

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        allProducts()
        allServices()
    }, [])

    const oneProduct = async (id) => {
        if (id != 0) {
            const product = await getProduct(id)
            setProduct(product)
            setDataState(product)
        }
    }
    const allProducts = async () => {
        const productsData = await getProducts();
        setProducts(productsData);
    }

    const onseService = async (id) => {
        if (id != 0) {
            const service = await getService(id)
            setProduct(product)
            setDataState(product)
        }
    }
    const allServices = async () => {
        const serviceData = await getServices();
        setServices(serviceData);
    }


    const handleSubmit = async (event) => {
        setSelectedOption(event.target.value);
    }

    return (
        <Container>
            <Grid container spacing={2} marginTop={3}>
                <Grid container>
                    <Grid item md={4} sm={3} xs={0}></Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        {success && <Alert severity="success">{success}</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}
                        <Typography variant='h4'> Registrar Venta </Typography>

                    </Grid>
                </Grid>
                <Grid container marginTop={3}>
                    <Grid item md={4} sm={3} xs={0}></Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InputLabel id="dropdown-label">Selecciona una opción</InputLabel>
                        <Select
                            labelId="dropdown-label"
                            id="dropdown"
                            value={selectedOption}
                            onChange={handleChange}
                        >
                            {products.map((product) => {
                                const {name} = product.data()
                                return(
                                    <MenuItem value={product.id}>{name}</MenuItem>
                                )
                            })}
                            
                        </Select>

                        <Button className="btn btn-success mx-2" variant="outlined" onClick={handleSubmit}> Guardar </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AddSale; 