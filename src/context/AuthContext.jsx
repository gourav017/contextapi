import React, { createContext } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({children})=>{

    const [isAuthorized, setisAuthorized] = React.useState(false);

    const login = (username,password)=>{
        if(username && password){
            setisAuthorized(true);
        }
    }

    const logout = ()=>{
        setisAuthorized(false);
    }

    return <AuthContext.AuthProvider value={{isAuthorized,login,logout}} >
        {children}
        </AuthContext.AuthProvider>
}