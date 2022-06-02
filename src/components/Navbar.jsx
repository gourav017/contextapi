import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import Wishlist from './Wishlist'

const Navbar = () => {

  const {isAuthorized,login,logout} = useContext(AuthContext);

  const {buy} = useContext(CartContext);

  const {isLight,toggleTheme} = useContext(ThemeContext);

  return (
    <div>Navbar
      <button onClick={()=>{
        if(isAuthorized) logout();
        else login("R","Z") ;
      }}> {isAuthorized ?  "Logout":"Login"}</button>
        
        <button onClick={buy}>Buy</button>
        <button onClick={toggleTheme}>{`make ${isLight ? "dark" : "Light" }`}</button>
        {isAuthorized && <Wishlist/>}
    </div>
  )
}

export default Navbar