import React, { useContext } from 'react';
import { Context } from '../Store';


const CoolComponent = () => {

    const [state, setState] = useContext(Context);
    
    const handleClick = async () => {
        const person = await(await fetch('https://www.boredapi.com/api/activity')).json();
        console.log(person);
        setState(person);

    };



    return (
        <> 
            <h2>I'm a cooool component </h2>
            <p> Name: {state.name}</p>
            <p> Email: {state.email} </p>
            <p> Activity: {state.activity} </p>
            <button onClick={handleClick}> Click me </button>


        </>
    );

};



export default CoolComponent;

