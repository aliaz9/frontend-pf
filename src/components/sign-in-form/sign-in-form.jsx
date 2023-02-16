import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../actions";
import '../sign-in-form/sign-in-form.css'
import { Form } from "react-bootstrap";


const user = {
    name: "Alina",
    email: "alina@gmail.com",
    password: "Cafe123",
    google: false
} 

export default function SignIn () {



    let [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })
    let dispatch = useDispatch();

    function handleChange(e) {
    e.preventDefault();
    setInput({
        ...input,
        [e.target.name]: e.target.value,
    })
    console.log(input)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("entra al submit", input)
        dispatch(addUser(input))
      }

    return (
          <form>
            <h1> Sign In:</h1>
            <div>
            <label>Name:</label>
            <input placeholder="Write your name" name="name" type="text" onChange={(e) => handleChange(e)}></input>
            </div>

            <div>
            <label>Email:</label>
            <input placeholder="Write your email" name="email" type="text" onChange={(e) => handleChange(e)}></input>
            </div>

            <div>
            <label>Password:</label>
            <input placeholder="Write your password" name="password" type="password" onChange={(e) => handleChange(e)}></input>
            </div>
            <button onClick={(e) => handleSubmit(e)}>SIGN UP</button>
            </form>
    )
}