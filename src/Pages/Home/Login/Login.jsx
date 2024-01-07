
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
    console.log(email, password);
   
    signIn({email, password})
    .then(result =>{
      console.log(result);
    })
    .catch(error =>{
      console.error(error)
    })
   
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
          <img src={image} alt="" />
       </div>
       
       <div className="w-5/12 mx-auto">
            <form onSubmit={handleSignin}>

            <div>
              <p className="text-4xl font-bold text-pink-600 text-center">Login please</p>
				<div className="flex justify-between mb-2 text-white font-semibold">
					<label  className="text-sm">Email</label>
					
				</div>
				<input type="text" name="email" id="email" placeholder="email" className="w-full px-3 py-2 bg-white rounded-md border border-pink-600 hover:boder-pink-300" />
			</div>

            <div>
				<div className="flex justify-between mb-2 text-white font-semibold">
					<label  className="text-sm">Password</label>
					
				</div>
				<input type="text" name="password" id="password" placeholder="password" className="w-full px-3 py-2 bg-white rounded-md border border-pink-600 hover:boder-pink-300" />
			</div>
            <div>
                <button className="px-4 py-2 bg-pink-500 text-white rounded-lg mt-2">SignIn</button>
            </div>
            </form>
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