import React,{createContext, useContext, useState} from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const {isAuthorized} = useContext(AuthContext);

    const [count,setcount] = useState(0);

    const buy=()=>{
        if(isAuthorized){
            console.log("can buy")
        }
        else{
            console.log("cannot buy withour loggin ")

        }
    }

    return <CartContext.Provider value={{count,setcount,buy}}>{children}</CartContext.Provider>
}