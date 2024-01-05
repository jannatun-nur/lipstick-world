
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const AuthProvider = ({children}) => {

    const AuthContext = createContext(null)
    const auth = getAuth(app)

    // create email & pass user
    const ceateUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email ,password )
            
            
           
    }

    const [user , setUser] = useState(null)

    const authInfo ={ 
        user,
        ceateUser
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