import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Nav = () => {

    const [isloggedIn, setisloggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = () => {
        setisloggedIn(true);
        navigate('/user')

    }

    const handleLogOut = () => {
        setisloggedIn(false)
        navigate("/home")

    }

    return (
        <>
            <div>
                <ui>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    {isloggedIn && (<>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                        <li>
                            <button onClick={handleLogOut}>LogOut</button>
                        </li>
                        
                        

                    </>)}
                    {!isloggedIn && (<>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        
                        

                    </>)}

                    <li>
                        <button onClick={handleLogIn}>Login</button>
                    </li>
                </ui>
            </div>
        </>

    )


}


export default Nav;






