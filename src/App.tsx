//@ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Menu from './components/Menu.tsx';
import FormProductos from './screens/FormProductos.tsx';
import FormServicios from './screens/FormServicios.tsx';
import ProductosScreen from './screens/ProductosScreen.tsx';
import Login from './screens/Login.tsx';
import Home from './screens/Home.tsx';
/* import ServiceAdmin from './screens/ServiceAdmin.tsx';
import SaleAdmin from './screens/SaleAdmin.tsx'; */

function App() {
  return (
    <Router>
      <ProductosScreen />
      <Routes>
          <Route path="/home" Component={Home} />
          <Route path='/FormProductos' element={<FormProductos/>} />
          {/* <Route path="/services" component={ServiceAdmin} />
          <Route path="/sales" component={SaleAdmin} /> */}
        </Routes>
    </Router>
  );
}

export default App;