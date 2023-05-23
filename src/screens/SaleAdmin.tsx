import React, { useState, useEffect } from 'react';
import db from '../firebase';
import FormVentas from './FormVentas';

function SaleAdmin() {
    const [products, setProducts] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Obtener los productos de Firestore y actualizar el estado
        const unsubscribeProducts = db.collection('products').onSnapshot((snapshot) => {
            const productsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(productsData);
        });

        // Obtener los servicios de Firestore y actualizar el estado
        const unsubscribeServices = db.collection('services').onSnapshot((snapshot) => {
            const servicesData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setServices(servicesData);
        });

        return () => {
            unsubscribeProducts();
            unsubscribeServices();
        };
    }, []);

    const handleCreateSale = (sale) => {
        // Crear una nueva venta en Firestore
        db.collection('sales').add(sale);

        // Actualizar el inventario de productos y servicios
        // Implementa la lógica para restar la cantidad vendida del inventario
    };

    return (
        <div>
            <h1>Administrador de ventas</h1>
            <FormVentas products={products} services={services} onCreateSale={handleCreateSale} />
            {/* Renderizar la lista de ventas */}
        </div>
    );
}

export default SaleAdmin;