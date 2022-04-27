import React from 'react'
import { Link } from 'react-router-dom'



  function Home() {
  return (
    <div className='home' style={{marginBottom:"100px"}}>
      <h1> Welcom to Mt-Glamorous kitchen </h1>
      <p>Your satisfaction is our priority</p>
      <Link to='/'> <button> Home   </button> </Link>
        
    </div>
  )
}
export default Home;



