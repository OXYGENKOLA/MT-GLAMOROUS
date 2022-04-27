import React from 'react'
import { Link } from 'react-router-dom'




const About = () => {
    return (
      <div className='home'style={{marginBottom:"100px"}}>
        <h1> About us: </h1>
        <p>At Mt-Glamourous, we offer lot of services that makes your event a glamorous one.Our services includes:</p>
            
            <ul>
                <li>Catering Services for any kinds of Meal (local or intercontinental dishes)</li>
                <li>cake</li>
                <li>Event decoration</li>        
            </ul>
            
        <Link to='/service'> <button> Services   </button> </Link>
          
      </div>
    )
  }
  export default About;
  