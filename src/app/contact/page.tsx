import React from 'react'

const page = () => {
  return (
    <div className='contact'>
      
      <form>
      <h2>Contact us</h2>
        <p>Name:</p>
        <input type='text' placeholder='Name' required></input>
        <p>Email:</p>
        <input type='email' placeholder='Email' required></input>
        <p>Message:</p>
        <textarea rows={5} placeholder='massege' required/>
        <button className='contactbtn'>Send</button>
      </form>
    </div>
  )
}

export default page