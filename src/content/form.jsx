import React from 'react';
import './form.css';
export default function Form() {
  return (
    <div className='form-container'>
        <h1 style={{textAlign:"center"}}>Have any query?</h1>
      <div className='form-container2'>
        
        <input type='text' name="name" placeholder='enter your name' required/>
        <input type='text' name="email" placeholder='enter your email' required/>
        <textarea placeholder='enter message'/>
        <button className='button'>Submit</button>
      </div>
    </div>
  )
}
