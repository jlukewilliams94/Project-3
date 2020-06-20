import React, { useState, useEffect } from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute =({component : Component, ...rest})=>{
   const [isVerified, setIsVerified] = useState('')
   useEffect(()=>{
   const verified = localStorage.getItem('verified')
    if(verified === "true") setIsVerified(true)
    else setIsVerified(false)
   },[])

   return(
        <Route {...rest}
    
        render ={props=>
            isVerified === true ?(
                <Component {...props}/>
            ):(
            isVerified === false ?(
                <Redirect 
                to={{pathname : "/"}}/>
            ):(null))
        }/>

   )
}

export default  PrivateRoute