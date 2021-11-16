import React from 'react'
import Background from "../components/beansApp/Background";
import Buttons from "../components/beansApp/Buttons";
import InputField from "../components/beansApp/InputField";
import '../cssFiles/register_login.css';

const Register_Page = () =>{
    return (
        <div className= "container">
            <div className="register_page_container">
                <Background/>
                <div className="welcome_container">
                    <div className="welcome_text">
                        <h3>Welcome To Ewa</h3>
                        <p>Where your cravings for beans are satisfied</p>
                    </div>
                </div>
                        
                <InputField label="Username" fieldType="text" placeholder="Enter your username"/>
                <InputField label="First Name" fieldType="text" placeholder="Enter your First Name"/>
                <InputField label="Last Name" fieldType="text" placeholder="Enter your Last Name"/>
                <InputField label="Password" fieldType="password" placeholder="Enter your Password"/>
                
                <Buttons className="register_btn"  buttonName="Register"/>
            </div>
        </div>
    )
}

export default Register_Page
