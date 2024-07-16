import React from 'react'
import Car from './Car'
import Apple from './Apple'
const Garage = () => {
    //const brand='BMW' 
    const isDoorOpened = false;
    const carInfo={brand:"Ferrari",color:"Black"}
    //const carInfo ={} 
    const appleInfo={type:"Fuji",color:"red"}
    const showcarInfo=carInfo.brand!==undefined && carInfo.color!==undefined


    //lists

    const carList = [
        { brand: "BMW" , color: "Red"},
        { brand: "Ford" , color: "Green"},
        { brand: "Tesla" , color: "Black"},
    ];

    const num_list=[1,2,3,4,5,6,7,3,4]
  return (
    <div>
      <h1>This is my garage</h1>
    {/* <Car brand={brand} color={"black"}/> */}
    {
       showcarInfo ?
    
    <Car carInfo={carInfo}/>:null}
      <Apple appleInfo={appleInfo}/>

      {isDoorOpened ?
      <h1>yes it is opened </h1>:<h1>it is closed</h1>}
<ul>
    {carList.map((carInfo)=>{return <li key={carInfo.brand}><Car carInfo={carInfo}/></li>})}
</ul>


    {num_list.map((e,index)=>{
        return <p key ={index}> {e}</p>
    })}
    </div>
  )
}

export default Garage


//props=used to send values from one component to another