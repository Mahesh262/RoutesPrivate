import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
const Navibar = () => {
   const navstyles= ({isActive})=>{
    return {
      fontWeight: isActive ? "bold": 'normal',
      textDecoration: isActive? "none": 'underline',
      color: isActive? "green": "black"
    }

   }
  return (
    <>
     <Navbar style ={{ background:"bisuit",display:"flex", gap:"20px"}}>
     <NavLink to = "/Homes" style ={navstyles}>Home</NavLink>
        
        <NavLink to ="/Login" style ={navstyles}>Login </NavLink>
        <NavLink to ="/Products" style ={navstyles}>Products</NavLink>
        <NavLink to ="/About" style ={navstyles}>About</NavLink>
        <NavLink to ="/Profile" style ={navstyles}>Profile</NavLink>

    </Navbar> 
    
    
  
    
    </>
  )
}

export default Navibar