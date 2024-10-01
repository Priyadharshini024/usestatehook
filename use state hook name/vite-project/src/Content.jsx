import React from 'react'
import { useState } from 'react'

const Content = () => {

  const [name , setName] = useState("Earn");


  function handleLetNameChange() {
    const names = [ "Earn" , "Grow" , "Give"]
    const int = Math.floor(Math.random()*2)
    setName (names[int])
  }
  
  return (
    <div>
    <p>Lets {name} Money</p>
    <button onClick={handleLetNameChange}>Subscribe</button>
    </div>
    
  )
}

export default Content