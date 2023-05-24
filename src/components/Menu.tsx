import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Menu() {
  return (
    <List component="nav">
      <ListItem button component={NavLink} to="/products">
        <ListItemText primary="Productos" />
      </ListItem>
      <ListItem button component={NavLink} to="/services">
        <ListItemText primary="Servicios" />
      </ListItem>
      <ListItem button component={NavLink} to="/sales">
        <ListItemText primary="Ventas" />
      </ListItem>
    </List>
  );
}

export default Menu;