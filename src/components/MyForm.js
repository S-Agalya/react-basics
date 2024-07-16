import React, { useState } from 'react'

const MyForm = () => {
    // const [name,setName]=useState(" ")
    // const [age,setAge]=useState(" ")
    // const [email,setEmail]=useState(" ")
const [inputs ,setInputs]=useState({
phone:'+91',
email:'@gmail.com',
about:'i am a student'
})
    function handlesubmit(e){
        e.preventDefault()
        console.log("form submitted")
        //console.log('current state', name,age,email)
        console.log(inputs)
    }

    function handleChange(e){
        const name=e.target.name
        const value=e.target.value
        setInputs((previousState)=>{
            return {...previousState , [name]:value}
        })
    }
   
  return (
    <div>
<form onSubmit={handlesubmit}>
        <label>enter your name: 
        <input type='text' name='name' onChange={handleChange}/> 
        </label><br/>
        <label>enter your age: 
        <input type='text' name='age' onChange={handleChange}/>
        </label><br/>
        <label>enter your mail: 
        <input type='text' name='email' onChange={handleChange} value={inputs.email}/>
        </label><br/>
        <label>enter your phone number: 
        <input type='text' name='phone' onChange={handleChange} value={inputs.phone}/>
        </label><br/>

        <label>enter your counter: 
        <select type='text' name='country' onChange={handleChange} value={inputs.country}>
             <option value={''}>select</option>
            <option value='Australia'>Australia</option>
            <option value='India'>India</option>
            <option value='United states'> United states</option>
        </select>
        </label><br/>

        <label>enter about you:
            <textarea name='about' onChange={handleChange} value={inputs.about}/>
        </label>
        <input type='submit' value={'submit value'}/>
        </form> 
    </div>
  )
}

export default MyForm
