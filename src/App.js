import React from 'react'
import Laptop from './views/Laptop'
import "./App.css"

function App() {
  return (
    <div className="container">
      <Laptop name= "Apple" color="gold" madeIn="Nigeria" buttonColor= {"red"}/>
      <Laptop name= "Dell" color="grey" madeIn="Lagos" buttonColor={"blue"}/>
    </div>
  )
}

export default App
