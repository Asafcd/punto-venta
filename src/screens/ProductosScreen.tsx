//@ts-nocheck
import React,{useState,useEffect} from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteProduct, getProducts } from "../services/ProductService.ts";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import '../App.css'





function ProductosScreen() {

    const [ products, setProducts ] = useState<QueryDocumentSnapshot<DocumentData>[] | []>([]);  

    useEffect(() => {
        AllProducts();
    },[]);


    const AllProducts = async () => {
        console.log("Entrando a allproducts")
        const products = await getProducts();
        setProducts(products); 
        console.log(products)
    }
    

 

  /* const handleDelete = (id: string) => {
    deleteProduct(id)
    AllProducts(setProducts)
  } */
  return (
    <Container>
      <Grid container spacing={2} marginTop={3}>
        <Grid container>
          <Grid item lg={3} md={2} sm={1} xs={0}></Grid>
          <Grid item lg={6} md={8} sm={10} xs={12}>
            <Typography variant="h4" gutterBottom align="center">
              Holi estas en el administrador de productos
              <Divider color="black" />
            </Typography>
          </Grid>
          <Divider />
        </Grid>
        <div className="divCentrar">
        {/* <Button variant="contained" >Create new user </Button> */}
        <NavLink to={`/FormProductos/`} className="btn btn-primary mx-2">Create new product</NavLink>
        </div>
        
        <Grid container marginTop={2}>
          <Grid item lg={2} md={2} sm={1} xs={0}></Grid>
          <Grid item lg={8} md={8} sm={10} xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Precio de venta</TableCell>
                    <TableCell align="center">Precio de compra</TableCell>
                    <TableCell align="center">Unidades en inventario</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {products.map((product: QueryDocumentSnapshot<DocumentData>) => {
                    const { name, cost, price, stock } = product.data();
                    const { id } = product;
                    return (
                    <TableRow
                      key={id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{id}</TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell align="center">{cost}</TableCell>
                      <TableCell align="center">{price}</TableCell>
                      <TableCell align="center">{stock}</TableCell>
                      <TableCell align="center">
                        <NavLink
                          /* to={`/users/${id}`}
                          className="btn btn-success mx-2" */
                        >
                          Edit
                        </NavLink>
                        <button
                          onClick={() => {handleDelete(id)}}
                          className="btn btn-danger mx-2"
                        >
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default  ProductosScreen;
