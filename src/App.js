import React from 'react'
//import Laptop from './views/Laptop'
import "./App.css"
import Register_Page from './views/Register_Page';
import LoginPage from './views/LoginPage'


function App() {
  
  return (
    <div className="container">
      <Register_Page/>
      {/* <LoginPage/> */}
    
      {/* <Laptop name= "Apple" color="gold" madeIn="Nigeria" buttonColor= {"red"}/>
      <Laptop name= "Dell" color="grey" madeIn="Lagos" buttonColor={"blue"}/> */}
    </div>
  )
}

export default App
