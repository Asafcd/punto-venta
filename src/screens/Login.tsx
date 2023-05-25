//@ts-nocheck
import React,{useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { login } from '../resources/Auth.ts';

 function Login() {
 
  const [password,setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [alert, setAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(false)

    // Verificar si el campo de correo y contraseña está vacío o invalido
    if (email.trim() === '' || password.trim() === '') {
      setError('Por favor, ingresa un correo y contraseña');
      setAlert(true)
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor, ingresa un correo o contraseña válida.');
      setAlert(true)
      return;
    } else{
      const result = await login(email, password)
      console.log(result)
    }
    
  };
  
  /* useEffect(() => {
  
  }, []);
 */
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <br></br>
      {alert===true && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <p>{error}</p> — <strong>Por favor corrigelo!</strong>
      </Alert>}
      
      
    </Container>
  );
}

export default Login