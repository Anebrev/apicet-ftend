import React from "react";
//import Headers from "./components/Headers";
//import Article from "./components/Article";
//import Footer from "./components/Footer";
import SignInSide from "./components/SignInSide";
//import modal1 from "./components/modal1";
//import SimpleModal from "./components/modal1";
import TstStyle from "./components/TstStyle";
import 'fontsource-roboto';




class App extends React.Component{
  render(){
    return (                        
      <div>        
        <SignInSide />
        
      </div>
    );    
  }
}
 

 
//Currently using React {React.version}

//<SignInSide />

//teste render
/*class App extends React.Component{
  render(){
    return (                        

      <div>
      <SimpleModal />
      
    </div>
       
    );    
  }
}*/













export default App;


/* Div blank
  <div>
  <Headers />
  <Article />
  <Footer />
  </div>
*/



/*function App() {
  return (
    <div>
      testing...
    </div>
  );
}*/