import React from 'react'
import Button from '../Button'
const Keyboard = (props)=> {
    return (
        <div className="keyboard" >
            <button className="button" style={{backgroundColor: `${props.buttonColor}`}}>
                <Button/>  
            </button>
           
                <div>
                    {props.name} Keyboard
                    Made in
                </div>
                <div style={{color:"gold", textAlign: "center", fontWeight: "bold"}}>
                    {props.madeIn}
                </div>
        </div>
    )
}

export default Keyboard
