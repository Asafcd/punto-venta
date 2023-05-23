import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Menu() {
  return (
    <List component="nav">
      <ListItem button component={Link} to="/products">
        <ListItemText primary="Administrar productos" />
      </ListItem>
      <ListItem button component={Link} to="/services">
        <ListItemText primary="Administrar servicios" />
      </ListItem>
      <ListItem button component={Link} to="/sales">
        <ListItemText primary="Administrar ventas" />
      </ListItem>
    </List>
  );
}

export default Menu;