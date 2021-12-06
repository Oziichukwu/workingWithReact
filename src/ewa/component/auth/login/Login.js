import React,{useState} from 'react'
import Input from '../../reusables/Input'
import "./login.css"
import img from "../../../../asserts/background_circle.svg"
import image from "../../../../asserts/background_circle_bottom.svg"
import Button from '../../reusables/Button'

const Login=(props)=> {

    let {setState, setAuthenticated} = props

   
    const inputField = [
        {name: "email", label :"email",  placeholder :"Enter your Email"},
        {name: "password" ,label :"password",  placeholder :"Enter your Password"},
        
    ]

    const initialData = {
        email: "", password: ""
    }

    const [inputData,setInputData] = useState(initialData)

    const handleLogin = ()=> {
        if (inputData.email !== "" && inputData.password !== ""){
            let email = inputData.email
            localStorage.setItem("userEmail", email)
            setAuthenticated(true)
        } else {
        alert("user info is incomplete")
        }
    }

    const  handleInput = (e) =>{
        let data = {
            ...inputData, [e.target.name]: e.target.value
        }
        setInputData(data)
    }

    return (
        <div className="login_container">
            <div className="login_header">
                <div className="ewa_logo">

                </div>
                <button onClick={()=>setState("Register")}>
                    REGISTER
                </button >
            </div >

            <img className="top_circle" src={img} alt="circlebackground"/>
            <div className="text_container">

                <h3>Welcome to Ewa</h3>
            
                    <p>Where your cravings
                        for beans are satisfied</p>
            </div>
            <div className="form_container">
                {inputField.map((field,index)=>
                <Input value = {inputData[field.name]} onChange={handleInput} key={index} field={field}/>)}
            </div>
            <Button name="Login" onClick={handleLogin}/>
            <img className="bottom_circle" src={image} alt="circlebackgroundbottom"/>
        </div>
    )
}

export default Login
