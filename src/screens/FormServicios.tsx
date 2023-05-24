import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import '../App.css'

function FormServicios({ onSubmit }) {
    const [serviceName, setServiceName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar los campos del formulario

        // Crear un objeto con los datos del nuevo servicio
        const newService = {
            serviceName,
            price: parseFloat(price),
        };

        // Enviar el nuevo servicio al componente padre
        onSubmit(newService);

        // Limpiar los campos del formulario
        setServiceName('');
        setPrice('');
    };

    return (
        <Container component="main" maxWidth="sm">
        <form onSubmit={handleSubmit}>
            <TextField
                label="Nombre del servicio"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                required
                fullWidth
                margin="normal"
            />
            <div className="divCentrar">
            <Button type="submit" variant="contained" color="primary" w-50>
                Agregar servicio
            </Button>
            </div>
           
        </form>
        </Container>
    );
}

export default FormServicios;