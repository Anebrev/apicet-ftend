
import React, { useContext, useState } from 'react';
import { Context } from '../Store';


const Home = () => {
    const [state, setState] = useContext(Context);

        
    return (
        <> 
            <h1> Home Page </h1>
            <p> Logged as: {state.name}</p>             
            <p> _______________________</p>
            <p> jason([state, setState).stringfy </p>

        </>
    );
        
};








/*class Home extends React.Component{    

    render(){
     return(
        
        <div>                      
            <h1>            
                ## Home Page Sample ## []
                <p> Logged as:    -state.name-</p>
            </h1>            
        </div>    
     );
    }
    
};*/








export default Home;
















/*
import React from 'react'

const Home = () =>  <h1> Home </h1>

export default Home

*/
