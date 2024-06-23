import { createContext, useState  } from "react";

export const UserContext = createContext()


const UserContextProvider = ({children})=>{
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [resetPassword, setResetPassword] = useState("")
    const [reEmail , setREemail]= useState("")
    const [errMsg, setErrMsg] = useState("")
    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{
            username,
            setEmail,
            setPassword,
            setREemail,
            password,
            email,
            reEmail,
            resetPassword,
            setResetPassword,
            setUsername,
            errMsg,
            setErrMsg,
             user, 
             setUser
            }}>
            
            {children}
            
        </UserContext.Provider>
    )
}
export default UserContextProvider