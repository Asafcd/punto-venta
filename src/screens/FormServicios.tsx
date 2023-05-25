//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams, redirect } from 'react-router-dom';
import {Alert, Button, Container, Grid, TextField, Typography} from '@mui/material';
import '../App.css'

import { updateService,getService,addService } from '../resources/ServiceResource.ts';
import useForm from '../hooks/useForm.ts'
import {Service} from '../models/ServiceInterface.ts'

const emptyService : Service = {
    name : "",
    cost: 0,
    price: 0
}
function FormServicios() {
    const { id } = useParams()

  const [services, setServices] = useState<Service>(emptyService)
  const [servicesData, handleChange, setDataState] = useForm(services)
  const { name, cost, price} = servicesData

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() =>{
    oneService()
  },[])

  const oneService = async () => {
    if (id != 0) {
      const services = await getService(id)
      setServices(services)
      setDataState(services)
    }

  }

  const handleSubmit = async () => {
   

    if(name.length>0 && price >0 && cost >0){
        if (id != 0) {
            const result = await updateService(id, servicesData)
            result ? setSuccess("Servicio actualizado") : setError("Algo salió mal")
      
          } else {
            const result = await addService(servicesData)
            result ? setSuccess("Servicio agregado") : setError("Algo salió mal")
          }
    } else{
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
            {id ==0 && <Typography variant='h4'> Agregar nuevo servicio </Typography>}
            {id !=0 && <Typography variant='h4'> Actualizar nuevo ervicio </Typography>}
              
          </Grid>
        </Grid>
        <Grid container marginTop={3}>
          <Grid item md={4} sm={3} xs={0}></Grid>
          <Grid item md={4} sm={6} xs={12}>
            <TextField type="text" name="name" value={name} onChange={handleChange} fullWidth={true} label="Name" variant="outlined" required />
            <br /><br />
            <TextField type="text" name="cost" value={cost} onChange={handleChange} fullWidth={true} label="Cost" variant="outlined" required/>
            <br /><br />
            <TextField type="text" name="price" value={price} onChange={handleChange} fullWidth={true} label="Price" variant="outlined" required/>
            <br /><br />
            
            
            <button className="btn btn-success mx-2"  onClick={handleSubmit}> Guardar </button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FormServicios;