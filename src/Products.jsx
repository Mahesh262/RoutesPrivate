import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
const Products = () => {
  return (
    <>
    <input type="text" placeholder='search'/>
    <Navbar style ={{display:"flex", gap:"20px"}}>
    <Link to ="News">New</Link>
    <Link to ="featured">Featured </Link>
    </Navbar>
 <Outlet/>
    
    </>
  )
}

export default Products