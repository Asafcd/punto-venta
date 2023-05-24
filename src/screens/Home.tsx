//@ts-nocheck
import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../components/Header.tsx";
import Menu from "../components/Menu.tsx";
import FormProducts from './FormProducts.tsx';

function Home(){

    return(
        <div>
        <Header />
        <Menu />
        <Routes>
          <Route path="/products" Component={FormProducts} />
          {/* <Route path="/services" component={ServiceAdmin} />
          <Route path="/sales" component={SaleAdmin} /> */}
        </Routes>
      </div>
    )
}

export default Home