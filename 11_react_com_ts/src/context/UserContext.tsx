import React, { useContext, createContext, ReactNode, useState } from "react";
import { User } from "../types/User";

const UserContext = createContext<User | undefined>(undefined)

export const UserProvider: React.FC<{children: ReactNode}> = ({children}) => {
    let [name, setName] = useState<string>('')
    let [email, setEmail] = useState<string>('')
    let [password, setPassword] = useState<string>('')
    let [user, setUser] = useState<Object>({})
    return(
        <UserContext.Provider value={{name,email,password,user,setName,setEmail,setPassword,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    let context = useContext(UserContext)

    if(context === undefined){
        throw new Error("Error 404")
    }

    return context
}