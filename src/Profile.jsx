import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from './Auths';

const Profile = () => {
     const navigate = useNavigate();
     const auth = useAuth();
      const handleout = ()=>{
        auth.logout()
        navigate('/')
      }
  return (
    <>
   <div>
    Welcome to {auth.user}<Button onClick={handleout}>Log Out</Button>
   </div>
    
    
    </>
  )
}

export default Profile