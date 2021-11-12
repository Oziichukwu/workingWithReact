import React from 'react'
import Casing from '../components/laptop/Casing'
import Keyboard from '../components/laptop/Keyboard'
import Screen from '../components/laptop/Screen'
import "../laptop.css"

const Laptop = (props)=> {
    let {name,color,madeIn,buttonColor} = props
    return (
        <div className = "laptop">
        <Casing color={color}/>
        <Keyboard name={name} madeIn={madeIn} buttonColor={buttonColor} />
        </div>
    )
}

export default Laptop
