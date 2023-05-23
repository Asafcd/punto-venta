import React, { useState, useEffect } from 'react';
import db from '../firebase';
import FormProductos from './FormProductos';

function ProductAdmin() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Obtener los productos de Firestore y actualizar el estado
        const unsubscribe = db.collection('products').onSnapshot((snapshot) => {
            const productsData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(productsData);
        });

        return () => unsubscribe();
    }, []);

    const handleAddProduct = (product) => {
        // Agregar un nuevo producto a Firestore
        db.collection('products').add(product);
    };

    const handleEditProduct = (productId, updatedProduct) => {
        // Actualizar un producto existente en Firestore
        db.collection('products').doc(productId).update(updatedProduct);
    };

    const handleDeleteProduct = (productId) => {
        // Eliminar un producto de Firestore
        db.collection('products').doc(productId).delete();
    };

    return (
        <div>
            <h1>Administrador de productos</h1>
            <FormProductos onSubmit={handleAddProduct} />
            {/* Renderizar la lista de productos y proporcionar las funciones de edición y eliminación */}
        </div>
    );
}

export default ProductAdmin;