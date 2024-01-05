import { useContext, useState } from "react";
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

 const {createUser} = useContext(AuthContext)

    const [error , setError] = useState('');
    const [ success , setSucces] = useState('')

    const handleSignup = (event) =>{
        event.preventDefault()

        const form = event.target
        const name = form.name.value;
        const address = form.address.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name , password , address, email);

 // RESET 
        setError('')
        setSucces('')
// CONNECTION WITH FIREBASE
createUser(email , password)
.then( res =>{
    setSucces('')
    console.log(res.user);
    Swal.fire({
        title: "Congrats!",
        text: "You have create an account successfully.",
        icon: "success"
      });

})
.then(error =>{
    console.error(error);
 
})






// accessss of email&pasword 
createUserWithEmailAndPassword(email , password)
.then(res =>{
    console.log(res.user);
   
})
.then(error =>{
    console.error(error);
   
})
 }
   

    return (
        <div>
            <div className="">
  <div className="e">
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div> */}
    <div className="w-full  bg-white">
    <div className="flex flex-col max-auto p-6 rounded-md sm:p-10  w-1/2">
	<div className="mb-8 text-center">
		
		<p className="text-sm lg:text-2xl text-cyan-700 font-serif">Sign Up to access your account</p>
	</div>
	<form  onSubmit={handleSignup} className="space-y-12">
		<div className="space-y-4">
        <div>
				<div className="flex justify-between mb-2 text-white font-semibold">
					<label  className="text-sm text-white font-semibold">Name</label>
					
				</div>
				<input type="Username" name="name" id="Username" placeholder="Username" className="w-full px-3 py-2 border rounded-md bg-cyan-700 text-white border-none" />
			</div>
			<div>
				<div className="flex justify-between mb-2 text-white font-semibold">
					<label  className="text-sm">Address</label>
					
				</div>
				<input type="address" name="address" id="address" placeholder="address" className="w-full px-3 py-2 border rounded-md bg-cyan-700 text-white border-none" />
			</div>
			<div>
				<label  className="block mb-2 text-sm text-white font-semibold">Email address</label>
				<input type="email" name="email" id="email" placeholder="@gmail.com" className="w-full px-3 py-2 border rounded-md bg-cyan-700 text-white border-none" />
			</div>
			<div>
				<div className="flex justify-between mb-2 text-white font-semibold">
					<label  className="text-sm">Confirm Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md bg-cyan-700 text-white border-none " />
			</div>
			
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-cyan-700 text-white font-serif">Sign Up</button>
               
            </div>
			<p className="px-6 text-sm text-center text-cyan-700 font-serif">Already have accout?
				{/* <Link to="/login">Login Here</Link> */}
			</p>
		</div>
	</form>
    {
               error && <p className=" font-semibold text-red-500">{error}</p>
            }
    {
               success && <p className=" font-semibold text-green-500">{success}</p>
            }
           
</div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;