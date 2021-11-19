import React from 'react'

const Register=()=> {

    const inputField = [
        {label :"firstName",  placeholder :"Enter your FirstName"},
        {label :"lastName",  placeholder :"Enter your LastName"},
        {label :"Email",  placeholder :"Enter your Email"},
        {label :"Password",  placeholder :"Enter your Password"},
]
    return (
        <div className="Register_container">
            <div className="register_header">
                <div className="ewa_logo">

                </div>
                    <button>
                        REGISTER
                    </button>
            </div>
        </div>
    )
}

export default Register
