import React from "react"
import { data, Link } from "react-router-dom"


const User = () => {

    const users = [
        { id: 1, name: "Aarav", age: 22, city: "Delhi" },
        { id: 2, name: "Priya", age: 25, city: "Mumbai" },
        { id: 3, name: "Rohan", age: 20, city: "Bangalore" },
        { id: 4, name: "Neha", age: 27, city: "Jaipur" },
        { id: 5, name: "Kabir", age: 24, city: "Pune" }
    ];

    return (
        <>

            {users.map((info) => {
                return (
                    <div key={info.id}>
                        <Link to={`/user/${info.id}`} ><h3>{info.name} {info.age}</h3></Link>

                    </div>

                )

            })}
            <h1>User name</h1>
        </>

    )

}

export default User;