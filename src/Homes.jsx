import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const Homes = () => {
  let navigates = useNavigate()

  return (
    <>
  Products

  <Button onClick={()=>navigates('/orders',{replace:true}) }> place Order </Button>
    
    </>
  )
}

export default Homes