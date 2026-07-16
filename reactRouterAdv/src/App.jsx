import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "../../reactRouterDOM/src/pages/home";
import About from "../../reactRouterDOM/src/pages/about";
import Contact from "../../reactRouterDOM/src/pages/contact";

const App = ()=>{

  
  return(
    <>
      
      <Router>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/abouts" element={<About/>}/>
            <Route path="/contacts" element={<Contact/>}/>

        </Routes>

      </Router>
    
    </>   

  )

}

export default App;