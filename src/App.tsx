//@ts-nocheck
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Menu from './components/Menu.tsx';

import Login from './screens/Login.tsx';
import Home from './screens/Home.tsx';
/* import ServiceAdmin from './screens/ServiceAdmin.tsx';
import SaleAdmin from './screens/SaleAdmin.tsx'; */

function App() {
  return (
    <Router>
      <Login />
      <Routes>
          <Route path="/home" Component={Home} />
          {/* <Route path="/services" component={ServiceAdmin} />
          <Route path="/sales" component={SaleAdmin} /> */}
        </Routes>
    </Router>
  );
}

export default App;