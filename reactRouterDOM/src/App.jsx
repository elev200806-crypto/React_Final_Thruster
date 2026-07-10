import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from "./pages/about";
import Contact from "./pages/contact";

const App = () => {

  // for preventing loading, use the below:
  // Don't this : <a href='/'>Home</a>
  // Don't this : <Link to="/"><Link/> -----> Provided by React-Router-DOM

  return (
    <div>
      {/* <nav>This is NavBar</nav> This would remain same for all pages & routes. */}
      <Routes>
        <Route path="/" element={<Home />} /> //This Would Show the Home.jsx page
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>

  )

}

export default App;