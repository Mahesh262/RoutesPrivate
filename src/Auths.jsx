import React, { useState } from 'react'
import { useContext } from 'react';
import { createContext } from 'react';
const AuthContext = createContext(null)
export const Auths = ({children}) => {
    
     const [user,setUser]= useState(null);
     const login = user=>{
        setUser(user)
     }
     const logout = ()=>{
        setUser(null)
     }
  return (
    <AuthContext.Provider value ={{user, login,logout}}>
          {children}
    </AuthContext.Provider>
  )
};

 export const useAuth=()=>{
     return useContext(AuthContext)
 }
