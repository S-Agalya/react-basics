import React from 'react'

const Car = (props) => {
    //const brand='BMW'   from the same file
    //we can also call from diff file

    //const {brand,color}=props

    const {carInfo}=props
    const {brand,color}=carInfo
   const text=` This is my ${color} ${brand}  car`


   
  return (
    <div>
        <h1>{text} </h1>
      
    </div>
  )
}

export default Car
