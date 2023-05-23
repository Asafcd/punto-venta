import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function FormProductos({ onSubmit }) {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar los campos del formulario

    // Crear un objeto con los datos del nuevo producto
    const newProduct = {
      productName,
      price: parseFloat(price),
    };

    // Enviar el nuevo producto al componente padre
    onSubmit(newProduct);

    // Limpiar los campos del formulario
    setProductName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre del producto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
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
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Agregar producto
      </Button>
    </form>
  );
}

export default FormProductos;