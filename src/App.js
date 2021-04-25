import React from "react"
import Routes from './pages/Routes'
import Store from './Store';


function App() {


    //auth tuto
    return (
        <Store>
           <Routes />
        </Store>    
    )


}


export default App;







/*ORIGINAL

function App() {
    
    return (
        <Store>
           <Routes />
        </Store>    
    )

}



*/

/* WITH CONST:
//const App = () =>  <Routes /> 
//export default App
*/