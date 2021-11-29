import React,{useState} from 'react'
import Input from '../../reusables/Input'
import "./login.css"
import img from "../../../../asserts/background_circle.svg"
import image from "../../../../asserts/background_circle_bottom.svg"
import Button from '../../reusables/Button'

const Login=(props)=> {

    let {setState} = props


    const inputField = [
        {label :"Email",  placeholder :"Enter your Email"},
        {label :"Password",  placeholder :"Enter your Password"},
        
    ]

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
                {inputField.map((field,index)=><Input key={index} field={field}/>)}
            </div>
            <Button name="Login"/>
            <img className="bottom_circle" src={image} alt="circlebackgroundbottom"/>
        </div>
    )
}

export default Login
