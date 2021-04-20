import React from 'react';
import {
  ThemeProvider,
  Button, TextField, Checkbox, FormControlLabel,  
  Link,
  Paper,
  Box, Grid,  
  Avatar,
  Typography,  
  CssBaseline
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

//import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
//import Paper from '@material-ui/core/Paper';
//import Box from '@material-ui/core/Box';
//import Grid from '@material-ui/core/Grid';
//import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
//import 'fontsource-roboto';
//import TFCustomCSS from "./TFiled/TFCustomCSS";
//import TFCSS from "./TFiled/TFCustomCSS";

//import {ThemeProvider} from "@material-ui/core";
import theme from '../components/theme';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles2 = makeStyles((theme) => ({
  root: {
    height: '100vh',    
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',    
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main, 
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),        
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  bkgCet: {
    backgroundColor: '#424242',
  },
  cetFont: {        
    color: '#ffffff',
  },
  

}));


export default function SignInSide() {
  const classes2 = useStyles2();

  return (


  

  <div>
    <Grid container component="main" className={classes2.root}>
      
      <Grid item xs={false} sm={4} md={7} className={classes2.image} />
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes2.bkgCet}  >  
        <div className={classes2.paper}>
          <CssBaseline />
          <Avatar className={classes2.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes2.cetFont}>
            Sign in 
          </Typography>
          
          <form className={classes2.form} noValidate> 
            <div className={classes2.cetFont}>         
            <TextField label="Email Addres" 
              variant="outlined"              
              required
              fullWidth
              id="email"              
              name="email"
              autoComplete="email"
            />
            
            <TextField label="Password" 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"              
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes2.submit}
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
                  {"Don't have an account? Sign Up --"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form> 
        </div>


        <div>
    <p>----</p>
    <ThemeProvider theme={theme}>            
   
        <Button variant="contained" color="secondary"> .... </Button>            
        <TextField label="teste custom them" variant="outlined"/>
         
    </ThemeProvider>
    </div>

      </Grid>
    </Grid>

    
  </div>


    



  );
}