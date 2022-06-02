import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Wishlist from './Wishlist'

const Navbar = () => {

  const {isAuthorized,login,logout} = useContext(AuthContext);

  return (
    <div>Navbar
      <button onClick={()=>{
        if(isAuthorized) login("R","Z");
        else logout();
      }}> {isAuthorized ? "Login" : "Logout"}</button>
        <Wishlist/>
    </div>
  )
}

export default Navbar