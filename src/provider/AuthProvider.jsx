import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null)
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading ] = useState(true)
    const createNewAccount = (email,password) => {
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
    }
  
    const singInAccount = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name ,photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name ,
            photoURL:photo
        })
   }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                axios.post('https://executive-machines-server.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        const token =data.data.token
                        localStorage.setItem('access-token', token)
                        
                })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setLoading(false) 
        })
        return ()=>unSubscribe()
   },[]) 
    const userInfo = {
        user,
        loading,
        createNewAccount,
        singInAccount,
        updateUserProfile,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;