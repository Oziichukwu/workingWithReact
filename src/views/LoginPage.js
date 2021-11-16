import React from 'react'
import Background from "../components/beansApp/Background";
import Buttons from "../components/beansApp/Buttons";
import InputField from "../components/beansApp/InputField";
import '../cssFiles/register_login.css';
const Register_Page = () =>{
    return (
        <div>
            <div className="registration_page_container">
                <Background/>
                <div className="intro_container">
                    <div className="intro_text">
                        <h3>Welcome To Ewa</h3>
                        <p>Where your cravings for beans are satisfied</p>
                    </div>
                </div>

                <InputField label="Username" fieldType="text" placeholder="Enter your username"/>
                <InputField label="Password" fieldType="password" placeholder="Enter your Password"/>

                <Buttons className="login_btn" buttonName="Login"/>

            </div>
        </div>
    )
}

export default Register_Page
