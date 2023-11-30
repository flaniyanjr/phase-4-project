import React from "react";
import { useOutletContext } from "react-router-dom" 
import { useEffect, useState } from "react";

function NewUserForm(){

    const {addOwner}= useOutletContext()

    const [name, setName] = useState('')

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/users', {
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({name})
        })
        .then((r)=> r.json())
        .then((newOwner)=> addOwner(newOwner))
        setName('')
    }


return (
    <div className= "new-user-form">
        <h4> Create an account: </h4>
        <form id= "new-user-form" onSubmit= {handleSubmit}>
            <div>
                <label> Name: </label>
                <input type= "text" name= "name" onChange= {handleChange} value= {name} />
            </div>
            <button type= "submit"> Create user </button>
        </form>
    </div> 
    )
}

export default NewUserForm;