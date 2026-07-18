import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "../../reactRouterDOM/src/pages/home";
import About from "../../reactRouterDOM/src/pages/about";
import Contact from "../../reactRouterDOM/src/pages/contact";
import Navbar from "./components/Navbar";
import User from "./pages/user";
import Dynamic from "./pages/Dynamic";
import Nav from "./components/Nav";


const App = ()=>{

  const [num,setNum] = useState(0)

  useEffect(()=>{
    console.log("Rendering Successfully!")

  },[])
  
  return(
    <>
      
    <div>

      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num + 1)
      } }>Increase</button><br /><br />
      <button onClick={()=>{
        setNum(num - 1)
      } }>Decrease</button>
    </div>



      <Router>
        <Nav/>
        
          {/* <Navbar/> */}
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/user/:id" element={<Dynamic/>}/>

        </Routes>

      </Router>
    
    </>   

  )

}

export default App;