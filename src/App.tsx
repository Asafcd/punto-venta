import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import PrivateRoute from './components/PrivateRoute';
import Login from './screens/Login';
import ProductAdmin from './screens/ProductAdmin';
import ServiceAdmin from './screens/ServiceAdmin';
import SaleAdmin from './screens/SaleAdmin';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Menu />
        <Switch>
          <Route path="/login" Component={Login} />
          <PrivateRoute path="/products" component={ProductAdmin} />
          <PrivateRoute path="/services" component={ServiceAdmin} />
          <PrivateRoute path="/sales" component={SaleAdmin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;