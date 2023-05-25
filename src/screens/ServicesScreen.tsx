//@ts-nocheck
import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";

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
import Grid from "@mui/material/Grid";
import '../App.css'

import { deleteService, getServices } from "../services/ServiceService.ts";

function ServicesScreen() {

  const [ services, setServices ] = useState<QueryDocumentSnapshot<DocumentData>[] | []>([]);  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
      AllServices();
  },[]);

  const AllServices = async () => {
      const servicesData = await getServices();
      setServices(servicesData); 
  }
  
  const handleDelete = async (id: string) => {
    const result = await deleteService(id)
    //console.log(result)
    result ? setSuccess("Servicio eliminado") : setError("Algo salió mal")
    AllServices(setServices)
  }
  return (
    <Container>
      <Grid container spacing={3} marginTop={3}>
        <Grid container>
          <Grid item lg={3} md={2} sm={1} xs={0}></Grid>
          <Grid item lg={6} md={8} sm={10} xs={12}>
            <Typography variant="h4" gutterBottom align="center">
              Holi estas en el administrador de servicios
              <Divider color="black" />
            </Typography>
          </Grid>
          <Divider />
        </Grid>
        <div className="divCentrar">
        {/* <Button variant="contained" >Create new user </Button> */}
        <NavLink to={`/services/0`} className="btn btn-primary mx-2">Create new service</NavLink>
        </div>
        
        <Grid container marginTop={2}>
          <Grid item lg={2} md={2} sm={1} xs={0}></Grid>
          <Grid item lg={8} md={8} sm={10} xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Costo</TableCell>
                    <TableCell align="center">Precio</TableCell>
                    
                    <TableCell align="center">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {services.map((service: QueryDocumentSnapshot<DocumentData>) => {
                    const { name, cost, price } = service.data();
                    const { id } = service;
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
                      
                      <TableCell align="center">
                        <div className="txt-conteiner">
                        <NavLink 
                            to={`/services/${id}`} 
                            className="btn btn-info mx-2 text-white"

                            >Editar</NavLink>
                        <button
                          onClick={() => {handleDelete(id)}}
                          className="btn btn-danger mx-2"
                        >
                          Eliminar
                        </button>
                        </div>
                     
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

export default  ServicesScreen;
