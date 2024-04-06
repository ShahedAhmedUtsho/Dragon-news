
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import Auth from '../FireBase/Firebase.config';

export const AuthContext = createContext(null)



// sign in with 

const AuthProvider = ({children}) => {

    const [user,setUser] = useState("user toh nai go")
    const GoogleProvider =new GoogleAuthProvider()

    const GoogleRegister = ()=> {
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
        console.log("from useEffect",currentUser );


    });

  return () => {
    Unsubscribe()
    
  }
}, [])


const logOut = ()=>{
    signOut(Auth)

}









const contextInfo = {user,GoogleRegister,logOut,githubLogin}


    return (
        <AuthContext.Provider value={contextInfo}>
            {children}

        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children : PropTypes.node
}
export default AuthProvider;