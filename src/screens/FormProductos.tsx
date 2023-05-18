import React from "react";
import Button from '@mui/material/Button';


function FormProductos() {
    return (
      <div className="container">
       <h3>Administrador de productos</h3>
       <form>
  <div className="form-group">
    <label>Nombre del producto</label>
    <input type="text" className="form-control" id=""  placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <label>Precio de venta</label>
    <input type="number" className="form-control" id="" placeholder="Enter salary"/>
  </div>
  <div className="form-group">
    <label>Unidades en el inventario</label>
    <input type="number" className="form-control" id="" placeholder="Enter salary"/>
  </div>
    <br></br>
 { <button type="submit" className="btn btn-primary">Submit</button>}
 

</form>
      
      </div>
    );
  }
  
  export default FormProductos;