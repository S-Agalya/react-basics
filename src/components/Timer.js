//useEffect()
import React, { useEffect, useState } from 'react'

    

const Timer = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        
        console.log("screen rendered")
        //checkcount()
       // setCount(1)
       setTimeout(()=>{
        setCount((previousState)=>{ return previousState + 1})
       },1000)

})
 function checkcount(){
    if(count>10){
        setCount(1)
    }
 }
    function updatecount(){
       setCount( (previousState)=>{
        return previousState+1
       })
    }
  return (
    <div>
      <h1>Screen rendered {count} times!!</h1>
      <button onClick={updatecount}>increase count</button>
    </div>
  )
}

export default Timer


