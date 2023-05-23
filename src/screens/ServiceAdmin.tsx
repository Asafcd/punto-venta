import React, { useState, useEffect } from 'react';
import db from '../firebase';
import FormServicios from './FormServicios';

function ServiceAdmin() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Obtener los servicios de Firestore y actualizar el estado
        const unsubscribe = db.collection('services').onSnapshot((snapshot) => {
            const servicesData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setServices(servicesData);
        });

        return () => unsubscribe();
    }, []);

    const handleAddService = (service) => {
        // Agregar un nuevo servicio a Firestore
        db.collection('services').add(service);
    };

    const handleEditService = (serviceId, updatedService) => {
        // Actualizar un servicio existente en Firestore
        db.collection('services').doc(serviceId).update(updatedService);
    };

    const handleDeleteService = (serviceId) => {
        // Eliminar un servicio de Firestore
        db.collection('services').doc(serviceId).delete();
    };

    return (
        <div>
            <h1>Administrador de servicios</h1>
            <FormServicios onSubmit={handleAddService} />
            {/* Renderizar la lista de servicios y proporcionar las funciones de edición y eliminación */}
        </div>
    );
}

export default ServiceAdmin;