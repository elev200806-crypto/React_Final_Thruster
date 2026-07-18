import React from "react";
import { useParams } from "react-router-dom";

const Dynamic = ()=>{
    // console.log(useParams())

    const {id} = useParams()
    const users = [
        { id: 1, name: "Aarav", age: 22, city: "Delhi" },
        { id: 2, name: "Priya", age: 25, city: "Mumbai" },
        { id: 3, name: "Rohan", age: 20, city: "Bangalore" },
        { id: 4, name: "Neha", age: 27, city: "Jaipur" },
        { id: 5, name: "Kabir", age: 24, city: "Pune" }
    ];

    const spec = users.find(data=> data.id == id)
    

    return(
        <>
            <div>
                <h1>Name : {spec.name}</h1>
                <h1>Age : {spec.id}</h1>
                <h1>City : {spec.city}</h1>
            </div>
        </>

    )

}

export default Dynamic;