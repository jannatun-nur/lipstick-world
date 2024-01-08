import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from 'react';

// export const AuthContext = createContext()
// const AuthProvider = ({ children }) => {
//     const auth = getAuth(app);
//     const [user , setUser] =useState(null)

//     // create email & pass user
//     const createUser = (email , password) =>{
//         return createUserWithEmailAndPassword(auth , email ,password )
//     }
     
//    
    
//     const authInfo ={
//         user,
//         createUser,
//         signIn
//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

// AuthProvider.propTypes = {
//     children: PropTypes.node
// }
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
const [user , setUser] =useState(null)

const createUser =(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

const signInUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}


const logout = ()=>{
    return signOut(auth)
}
// useEffect(()=>{
//    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
//     setUser('hi bro' , currentUser);
//    })
//    return unSubscribe()
    
// },[])

// storing current user info
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
        setUser(currentUser);
       
            
    });


    return () => {
        return unsubscribe();
    }
}, [])
    const authInfo = { user, createUser, signInUser , logout}
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