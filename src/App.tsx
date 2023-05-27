//@ts-nocheck
import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './screens/Login.tsx';
import UserProvider from './components/UserProvider.tsx';

import Menu from './components/Menu.tsx';
import FormProducts from './screens/FormProducts.tsx';
import FormServicios from './screens/FormServicios.tsx';
import ProductosScreen from './screens/ProductosScreen.tsx';
import ServicesScreen from './screens/ServicesScreen.tsx';

import { UserContext } from './models/AuthState.ts';
import SalesTable from './components/SalesTable.tsx';
import AddSale from './components/AddSale.tsx';
/* import ServiceAdmin from './screens/ServiceAdmin.tsx';
import SaleAdmin from './screens/SaleAdmin.tsx'; */

function App() {

  const { state } = useContext(UserContext);

  return (
    <BrowserRouter>
      <UserProvider>
        <Menu/>
        {/* {state.token && <p>Bienvenido, {state.uid}!</p>} */}
        <Routes>
        <Route path= "/" element={<ProductosScreen/>} />
            <Route path= "/login" element={<Login/>} />
            <Route path= "/products" element={<ProductosScreen/>} />
            <Route path='/products/:id' element={<FormProducts/>} />
            <Route path="/services" element={<ServicesScreen/>}  />
            <Route path='/services/:id' element={<FormServicios/>} />
            <Route path='/sales' element={<SalesTable/>} />
            <Route path='/sales/0' element={<AddSale/>} />
        </Routes>
      </UserProvider>
    </BrowserRouter>

    
  );
}

export default App;