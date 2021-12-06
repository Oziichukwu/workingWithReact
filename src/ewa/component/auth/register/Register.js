import React, {useState} from 'react'
import Input from '../../reusables/Input'
import './register.css'
import img from "../../../../asserts/background_circle.svg"
import image from "../../../../asserts/background_circle_bottom.svg"
import Button from '../../reusables/Button'

const Register=(props)=> {

    let {setState} = props

    let url = "https://jsonplaceholder.typicode.com/posts"

    let initialData = {
        firstName : "" , lastName : "" , email:"", password :"" , confirmPassword : ""
    }
    

    const [inputData, setInputData] = useState(initialData)

    function handleInput(e){
        let data = {
            ...inputData, [e.target.name]: e.target.value
        }
        setInputData(data)
    }

    function registerUser(){
        console.log(inputData)
    }

    const inputField = [
        {name: "firstName",label :"firstName",  placeholder :"Enter your FirstName"},
        {name: "lastName", label :"lastName",  placeholder :"Enter your LastName"},
        {name: "email", label :"Email",  placeholder :"Enter your Email"},
        {name: "password", label :"Password",  placeholder :"Enter your Password"},
        {name: "confirmPassword", label :"Confirm Password",  placeholder :"Confirm your Password"},
]
    return (
        <div className="register_container">
            <div className="register_header">
                <div className="ewa_logo">

                </div>
                    <button onClick={()=>setState("login")}>
                        Login
                    </button>
            </div>
            <img className="top_circle" src={img} alt="circlebackground"/>
            <div className="text_container">

            <h3>Welcome to Ewa</h3>

            <p>Where your cravings
                 for beans are satisfied</p>
            </div>
                <div className="form_container">
                {inputField.map((field,index)=>
                    <Input value={inputData[field.name]} onChange={handleInput} key={index} field={field}/>)}
                </div>
                <Button name="Register" onClick={registerUser}/>
                <img className="bottom_circle" src={image} alt="circlebackgroundbottom"/>
            </div>
    )
}

export default Register
