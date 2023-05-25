//@ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Menu from './components/Menu.tsx';
import FormProducts from './screens/FormProducts.tsx';
import FormServicios from './screens/FormServicios.tsx';
import ProductosScreen from './screens/ProductosScreen.tsx';
import ServicesScreen from './screens/ServicesScreen.tsx';
import Login from './screens/Login.tsx';

/* import ServiceAdmin from './screens/ServiceAdmin.tsx';
import SaleAdmin from './screens/SaleAdmin.tsx'; */

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
          
          <Route path= "/products" element={<ProductosScreen/>} />
          <Route path='/products/:id' element={<FormProducts/>} />
          <Route path='/services/:id' element={<FormServicios/>} />

           <Route path="/services" element={<ServicesScreen/>}  />
          {/* <Route path="/sales" component={SaleAdmin} />  */}
        </Routes>
    </Router>
  );
}

export default App;