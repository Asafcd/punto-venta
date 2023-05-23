//@ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Menu from './components/Menu.tsx';

import Login from './screens/Login.tsx';
/* import ProductAdmin from './screens/ProductAdmin.tsx';
import ServiceAdmin from './screens/ServiceAdmin.tsx';
import SaleAdmin from './screens/SaleAdmin.tsx'; */

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Menu />
        <Routes>
          <Route path="/login" Component={Login} />
          {/* <Route path="/products" component={ProductAdmin} />
          <Route path="/services" component={ServiceAdmin} />
          <Route path="/sales" component={SaleAdmin} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;