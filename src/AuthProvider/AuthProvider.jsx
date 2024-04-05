
import PropTypes from 'prop-types'
import { createContext, useState } from 'react';
import auth from '../FireBase/Firebase.config';


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
const [user,setUser] = useState("user toh nai go")



const contextInfo = {user}
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