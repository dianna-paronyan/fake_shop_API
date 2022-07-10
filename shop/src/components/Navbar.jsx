
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav style={{width:'100%', padding:'20px', backgroundColor:'#000', boxShadow: '0px 8px 16px 0px rgba(27, 27, 27, 0.2)'}}>
        <ul style={{display:'flex', justifyContent:'start', alignItems:'center', gap:'20px'}}> 
          <li style={{color:'white',listStyle:'none', fontSize:'24px', fontWeight:'bold'}}>York & Dante</li>
          <Link to='/'><li style={{listStyle:'none', color:'white'}}>Home</li></Link>
          <Link to='/products'><li style={{listStyle:'none', color:'white'}}>Products</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;