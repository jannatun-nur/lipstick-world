
import { useState } from "react";
import image from '../../../../public/assets/image/login.jpg'
import {
//   GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
//   signInWithPopup,
} from "firebase/auth";

import Swal from "sweetalert2";
import { useContext } from "react";

import app from "../../../Firebase/firebase.config";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
const Login = () => {

  const {signIn} = useContext(AuthContext)
 
  const auth = getAuth(app);
//   const googleProvider = new GoogleAuthProvider();

  const [signinError, setSigninError] = useState("");
  const [success, setSucces] = useState("");


  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    // Check if signIn is a function before calling it
    if (typeof signIn === 'function') {
      signIn({ email, password })
        .then(result => {
          // Handle success
        })
        .catch(error => {
          setSigninError(error.message);
        });
    } else {
      console.error('signIn is not a function');
      setSigninError('An error occurred during sign in. Please try again later.');
    }
  
    // ... rest of your code

    //   reset error
    setSigninError("");
    setSucces("");
   
    if (password.length < 6) {
      setSigninError("password is less than 8 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setSigninError("password do not have a capital letter");
      return;
    }
   
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSucces();
        Swal.fire({
          title: "Wonderfull!!",
          text: "You're logged in successfully",
          icon: "success",
        });
        // navigate('/')
      })
      .catch((error) => {
        console.log(error);
        setSigninError(error.message);
      });
   };
    return (
       <div  className="flex ">
       <div>
          <img className="h-24 w-24 lg:w-full lg:h-52 mt-10 lg:mt-0" src={image} alt="" />
       </div>
       
       <div className="w-5/12 mx-auto">
            <form onSubmit={handleSignin}>

            <div>
              <p className="text-sm lg:text-4xl font-bold text-pink-600 text-center">Login please</p>
				<div className="flex justify-between mb-2 text-pink-600 font-semibold">
					<label  className="text-sm">Email</label>
					
				</div>
				<input type="text" name="email" id="email" placeholder="email" className="w-full px-1 lg:px-3 lg:py-2 bg-white rounded-md border border-pink-600 hover:boder-pink-300" />
			</div>

            <div>
				<div className="flex justify-between mb-2 text-pink-600 pt-2 font-semibold">
					<label  className="text-sm">Password</label>
					
				</div>
				<input type="text" name="password" id="password" placeholder="password" className="w-full px-1 lg:px-3 lg:py-2 bg-white rounded-md border border-pink-600 hover:boder-pink-300" />
			</div>
            <div>
                <button className=" px-2 py-1 lg:px-4 lg:py-2 bg-pink-500 text-white rounded-lg mt-2">SignIn</button>
            </div>
            </form>


            <p className=" mt-2 text-center text-sm lg:text-2xl text-gray-800 font-bold">
                Don't have any accout?? Go to <span className="text-pink-600 pl-2"><Link to="/signup">Sing Up</Link></span>
              </p>
            {
             signinError && <p className=" font-semibold text-red-500">{signinError}</p>
            }
    {
               success && <p className=" font-semibold text-green-500">{success}</p>
            }
        </div>
       
            
       </div>
    );
};

export default Login;