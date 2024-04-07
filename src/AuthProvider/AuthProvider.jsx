
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import Auth from '../FireBase/Firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AuthContext = createContext(null)





const AuthProvider = ({children}) => {

    const notify = () => toast.error("  You are already logged in");

    const [user,setUser] = useState("user toh nai go")
    






     // sign in with 
const register = (email,password,fullName,photoURL) =>{
     createUserWithEmailAndPassword(Auth,email,password)
    .then(result => {
        const EmailUser = result.user
        console.log(EmailUser)

updateProfile(result.user,{
    displayName:fullName,
    photoURL: photoURL ,
})
.then( 
).catch()

setUser(EmailUser)


       
    })
    .catch(error =>{
        console.log(error.message)
    })
}




const login = (email,password) =>{
    if(user){
        notify()
        return
    }
    signInWithEmailAndPassword (Auth,email,password)
    .then(result => {
        const EmailUser = result.user
       
        setUser(EmailUser)
    })
    .catch(error =>{
        console.log(error.message)
    })

}


const GoogleProvider =new GoogleAuthProvider()
    const GoogleRegister = ()=> {
        if(user){
            notify()
            return
        }
        signInWithPopup(Auth,GoogleProvider)
        .then(result => {
            const googleUser = result.user
            console.log(googleUser)
            setUser(googleUser)
        })
        .catch(error =>{
            console.log(error.message)
        })


    }





const githubProvider =new GithubAuthProvider();
const githubLogin = ()=>{
    if(user){
        notify()
        return
    }
    
    signInWithPopup(Auth,githubProvider)
    .then(result => {
        const gihubUser = result.user
       
        setUser(gihubUser)
    })
    .catch(error =>{
        console.log(error.message)
    })

}

// sign in with 




useEffect(() => {
    const Unsubscribe = onAuthStateChanged(Auth,(currentUser)=>{
        setUser(currentUser) 


    });

  return () => {
    Unsubscribe()
    
  }
}, [])


const logOut = ()=>{
    signOut(Auth)

}









const contextInfo = {user,GoogleRegister,logOut,githubLogin,register,login}


    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children : PropTypes.node
}
export default AuthProvider;