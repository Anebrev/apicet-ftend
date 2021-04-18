import React from 'react'
import { Router, Switch, Route } from 'react-router'
import {history} from "./history"
import Login from "./Login"
import Register from "./Register"
import Home from "./Home"
import NotFound from "./NotFound"



const Routes = () =>  (
<Router history={history}>
    <Switch>
        <Route component={Login} exact path="/Login"/>
        <Route component={Home} exact path="/Home"/>        
        <Route component={Register} exact path="/Register"/>
        <Route component={NotFound} />        
    </Switch>
</Router>    

)

export default Routes

 
    






/*
import React from 'react';

class Routes extends React.Component{




};

    
export default Routes;

*/












