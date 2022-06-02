import { createContext } from "react";
import { useState } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({children})=>{

    const [isAuthorized, setisAuthorized] = useState(false);

    const login = (username,password)=>{
        if(username && password){
            setisAuthorized(true);
        }
    }

    const logout = ()=>{
        setisAuthorized(false);
    }

    return (
        <AuthContext.Provider value={{isAuthorized,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
    
};
