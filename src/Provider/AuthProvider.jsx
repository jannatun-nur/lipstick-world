import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user , setUser] =useState(null)

    // create email & pass user
    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email ,password )
    }

    const authInfo ={
        user,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}