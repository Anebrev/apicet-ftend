import React, { useState } from 'react';

const initialState = {
    name: 'Anebrev Hukra',
    email: 'anebrev@hotmail.com',
    cep: '69000100',
    activity: 'lazy' 
};

export const Context = React.createContext();


const Store = ({ children }) => {

    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );

};


export default Store;


