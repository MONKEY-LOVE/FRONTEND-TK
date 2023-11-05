import { createContext, useState, useContext, useEffect } from "react";
import {registerRequest, LoginRequest, verifyTokenRequet} from '../api/auth'
import { toast } from 'react-toastify';
import Cookie from 'js-cookie'


export const AuthContext = createContext()
export const useAuth = () =>{
    const context = useContext(AuthContext)
    if (!context){
        throw new Error("useAuth")
    }
    return context;
}


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true)

    const signup = async (user) => {
        try{
            const res = await registerRequest(user);
            setUser(res.data)
            setIsAuthenticated(true);
        } catch (error){
            console.log(error)
        }
    }
    const signin = async (user) => {
        try{
            const res = await LoginRequest(user)
            console.log(res)
            setIsAuthenticated(true);
            
            setUser(res.data)
        } catch (error){
            toast.error('Usuario o Contraseña incorrectos');
        }

    }
    useEffect(() => {
    async function checkLogin() {
            const cookies = Cookie.get()

            if(!cookies.token){
                setIsAuthenticated(false)
                setLoading(false)
                return setUser(null)
            }
              try{
                const res = await verifyTokenRequet(cookies.token)
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false)

                    return;
                }
                setIsAuthenticated(true)
                setUser(res.data);
                setLoading(false)
              }catch(error){
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
              
            }
        }
        checkLogin();
    }, []);

    return(
        <AuthContext.Provider value={{signup,signin,loading,user,isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}