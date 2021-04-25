import React from 'react'
import { Router, Switch, Route } from 'react-router'
import {history} from "./history"
import Login from "./Login"
import Register from "./Register"
import Home from "./Home"
import NotFound from "./NotFound"
import Login2 from "./Login2"
import CoolComponent from "./CoolComponent"






const Routes = () =>  (
<Router history={history}>
    <Switch>
        <Route component={Login} exact path="/Login"/>
        <Route component={Login2} exact path="/Login2"/>
        <Route component={Home} exact path="/"/>        
        <Route component={Register} exact path="/Register"/>         
        <Route component={CoolComponent} exact path="/CoolComponent"/> 
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












