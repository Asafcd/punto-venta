import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

function FormVentas({ products, services, onCreateSale }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar los campos del formulario

        // Crear un objeto con los datos de la nueva venta
        const newSale = {
            product: selectedProduct,
            service: selectedService,
            quantity: parseInt(quantity),
        };

        // Enviar la nueva venta al componente padre
        onCreateSale(newSale);

        // Limpiar los campos del formulario
        setSelectedProduct(null);
        setSelectedService(null);
        setQuantity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Autocomplete
                options={products}
                getOptionLabel={(product) => product.productName}
                value={selectedProduct}
                onChange={(event, newValue) => setSelectedProduct(newValue)}
                renderInput={(params) => <TextField {...params} label="Producto" required />}
                fullWidth
                margin="normal"
            />
            <Autocomplete
                options={services}
                getOptionLabel={(service) => service.serviceName}
                value={selectedService}
                onChange={(event, newValue) => setSelectedService(newValue)}
                renderInput={(params) => <TextField {...params} label="Servicio" required />}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Cantidad"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                required
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Crear venta
            </Button>
        </form>
    );
}

export default FormVentas;