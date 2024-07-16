import React, { useState } from 'react'

const List = () => {
    const [list,setList]=useState([])
    const [count,setCount]=useState(1)

    function increament(){
        const itemName='item'+count
        setList((previousState)=>{return [...previousState,itemName]})
        setCount((previousState)=>{
            return previousState+1
        })
    }
  return (
    <div>
      <h1>List</h1>
      <button onClick={increament}>add item</button>
      <ul>
        {list.map(e=> <li key={1}>{e}</li>)}
        
      </ul>
    </div>
  )
}

export default List
