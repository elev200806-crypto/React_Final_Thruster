import React from "react"
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"


const Navbar = ()=>{
    return(
        <>
            <NavLink style={({isActive})=>({
                color : isActive? "red":"aqua"

            })}to={"/home"}>Home</NavLink>
            <Link to={"/abouts"}>About</Link>
            <Link to={"/contacts"}>Contact</Link>
        </>

    )

}

export default Navbar;