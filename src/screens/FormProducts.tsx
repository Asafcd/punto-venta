//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams, redirect } from 'react-router-dom';
import {Alert, Button, Container, Grid, TextField, Typography} from '@mui/material';

import { updateProduct, getProduct, addProduct } from "../services/ProductService.ts";
import useForm from '../hooks/useForm.ts';
import { Product } from '../models/ProductInterface.js';


const emptyProduct: Product = {
  name: "",
  cost: 0,
  price: 0,
  stock: 0
}

function FormProducts() {
  const { id } = useParams()

  const [product, setProduct] = useState<Product>(emptyProduct)
  const [productData, handleChange, setDataState] = useForm(product)
  const { name, cost, price, stock } = productData

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() =>{
    oneProduct()
  },[])

  const oneProduct = async () => {
    if (id != 0) {
      const product = await getProduct(id)
      setProduct(product)
      setDataState(product)
    }

  }

  const handleSubmit = async () => {
    if(name.length>0 && price > 0 && cost >0 && stock > 0){
      if (id != 0) {
        const result = await updateProduct(id, productData)
        result ? setSuccess("Producto actualizado") : setError("Algo salió mal")
  
      } else {
        const result = await addProduct(productData)
        result ? setSuccess("Producto agregado") : setError("Algo salió mal")
      }
    }else{
      setError("Ingresa campos validos")
    }
    
  }

  return (
    <Container>
      <Grid container spacing={2} marginTop={3}>
        <Grid container>
          <Grid item md={4} sm={3} xs={0}></Grid>
          <Grid item md={4} sm={6} xs={12}>
            {success && <Alert severity="success">{success}</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
            {id ==0 && <Typography variant='h4'> Agregar nuevo Producto </Typography>}
            {id !=0 && <Typography variant='h4'> Actualizar nuevo Producto </Typography>}
              
          </Grid>
        </Grid>
        <Grid container marginTop={3}>
          <Grid item md={4} sm={3} xs={0}></Grid>
          <Grid item md={4} sm={6} xs={12}>
            <TextField type="text" name="name" value={name} onChange={handleChange} fullWidth={true} label="Name" variant="outlined" />
            <br /><br />
            <TextField type="text" name="cost" value={cost} onChange={handleChange} fullWidth={true} label="Cost" variant="outlined" />
            <br /><br />
            <TextField type="text" name="price" value={price} onChange={handleChange} fullWidth={true} label="Price" variant="outlined" />
            <br /><br />
            <TextField type="number" name="stock" value={stock} onChange={handleChange} fullWidth={true} label="Stock" variant="outlined" />
            <br /><br />
            
            <Button className="btn btn-success mx-2" variant="outlined" onClick={handleSubmit}> Guardar </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FormProducts; 