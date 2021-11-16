import React from 'react'
import background_circle from "../../asserts/background_circle.svg"
import background_circle_bottom from "../../asserts/background_circle_bottom.svg"
const Background = () => {
    return (
        <div>
             <img className="top_circle" src={background_circle} alt="half_circle_background"/>
              <img className="bottom_circle" src={background_circle_bottom} alt="half_circle_background"/>
        </div>
    )
}

export default Background
