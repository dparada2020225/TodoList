import {Nav} from "../Nav/Nav"
import { useAuth0 } from '@auth0/auth0-react'
import {LoginButton} from "../Login/Login"

import HomePage from "../HomePage/HomePage"

import React from 'react'
import './Main.css'


const Main = () => { 
  const { isAuthenticated } = useAuth0();
  return (
    <React.StrictMode>
        {isAuthenticated ? (
          <>
            <Nav/>
          </>
        ) : (
          <><LoginButton />
          <HomePage /></>
        )}  
    </React.StrictMode>
  );    
}

export default Main;