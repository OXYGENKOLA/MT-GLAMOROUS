import React from 'react'
import { Link } from 'react-router-dom'


  function Contact() {
  return (
    <div className='contact'style={{marginBottom:"100px"}}>
      <h1> Contact Us</h1>
      <p>When ever you have any events and you don`t want to disappoint your guests call Mt-Glamorous Kitchen...</p>
      <Link to='/about'> <button>  About Page   </button> </Link>
        
    </div>
  )
}

export default Contact