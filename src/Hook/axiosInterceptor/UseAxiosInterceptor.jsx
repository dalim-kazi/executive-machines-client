import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

 
 
const UseAxiosInterceptor = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const AxiosInterceptor = axios.create({
         baseURL :'https://executive-machines-server.vercel.app'
    })

    useEffect(() => {
        AxiosInterceptor.interceptors.request.use((config)=> {
            const token = localStorage.getItem('access-token')
            if (token) {
                config.headers.Authorization=`bearer ${token}`
            }
            return config;
        })
        
        AxiosInterceptor.interceptors.response.use((response) => response,
            async(error)=> {
            if (error.response && (error.response.status === 401 || error.response.status === 403)){
                logOut()
                navigate('/')
                }
            return Promise.reject(error);
          });
  },[AxiosInterceptor,navigate,logOut])
    return [AxiosInterceptor]
 };
 
 export default UseAxiosInterceptor;