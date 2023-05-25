//@ts-nocheck
import React,{useReducer, useState, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { initialState, LoginPayload } from '../models/AuthState.ts'
import { LoginReducer } from '../reducers/LoginReducer.ts';
import { login } from '../resources/Auth.ts';

 function Login() {
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(LoginReducer, initialState);
 
  const [password,setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [alert, setAlert] = useState(false);

  const handleSubmit = async(e) => {
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
      if(result.status){
        const {uid} = result.user
        const utoken = await result.user.getIdToken()
        const payload: LoginPayload = {uid, utoken}
        dispatch({type:"login", payload})
      }else{ 
        setError('Usuario no encontrado.');
        setAlert(true)
      }
      
    }
    
  };

  const logout = () => dispatch({type: 'logout' });

  const redir = () => { navigate('/products')}
  
  /* useEffect( () => {
    setTimeout(logout, 3000);
  },[] ); */

  return (
    <Container component="main" maxWidth="sm">
      {state.token && redir()}
      
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
              Iniciar sesión
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