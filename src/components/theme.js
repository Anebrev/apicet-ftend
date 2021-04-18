import { createMuiTheme } from '@material-ui/core/styles';

import { grey, deepPurple, amber, blue, lightBlue } from '@material-ui/core/colors';




const theme = createMuiTheme({

  palette: {

    primary: {
      
      main: lightBlue[200],
    },

    secondary: {
      main: amber[500],
      contrastText: deepPurple[900],
    },
      
  },

});


theme.props = {

    MuiInputLabel:{
        //shrink: true
    }

};

theme.overrides = {

    MuiInput: {
        

        "&$focused": {
            border: `1px solid ${deepPurple[500]}`,      
            outline: `1px solid ${deepPurple[500]}` // this outline makes our "border" thicker without moving the component      
          }



    }


};

export default theme;




/*




//main: deepPurple[500],


  cetTextField: {    
    '&:hover fieldset': {        
      backgroundColor: 'lightblue',      
    },   
 
    '&.Mui-focused fieldset': {
      //borderColor: 'green',
      backgroundColor: 'lightblue',
    },
    '& > *': {
      //margin: theme.spacing(1),
      //width: '25ch',
      borderColor: 'orange',
    },
  },






                //autoFocus              
              //id="custom-css-outlined-input"
              //style={{ margin: 3 }}
              //id="filled-margin-dense"
              //defaultValue="bar"
              //className={classes.textField}
               //helperText="bar"
              //margin="dense"

*/