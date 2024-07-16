import React, { useState } from 'react'

const FavouriteColor = () => {
    let [color,setColor]=useState("red")
  return (
    <div>
      <h1>my favourite color is {color}</h1>
      <button onClick={()=>{setColor("blue")}}>change color </button>
    </div>
  )
}

export default FavouriteColor
