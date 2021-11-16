import React from 'react'

const InputField = (props) => {
    let {label, fieldType, placeholder} = props
    return (
        <div>
            <label>
                {label}
            </label>
            <input className="register_input" type = {fieldType}
                placeholder= {placeholder}/>
        </div>
    )
}

export default InputField
