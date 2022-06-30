import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const OrderSummary = () => {
    let navigates = useNavigate()
  return (
    <>
    
    Orderconfirmed
     <Button onClick={()=>navigates(-1)}>Go Back</Button>
    </>
  )
}

export default OrderSummary