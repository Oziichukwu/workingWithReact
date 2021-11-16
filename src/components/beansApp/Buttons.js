import React from 'react'

const Buttons = (props) => {
    
    return (
        <div>
            <button className={props.className}>
                {props.buttonName}
            </button>
        </div>
    )
}

export default Buttons
