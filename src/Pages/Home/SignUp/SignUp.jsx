import { useContext, useState } from "react";
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { createUserWithEmailAndPassword } from "firebase/auth";
import image from '../../../../public/assets/image/signup.jpg'
import { Link } from "react-router-dom";
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

if(password.length <6){
    setError('password is less than 8 characters')
    return
}
else if(!/[A-Z]/.test(password)){
    setError('password do not have capital letter ')
    return
}






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
            <div className="bg-[#f4f4f4]">
  <div className=" flex justify-around">
    <div className=" mt-10">
        <img className="h-28 w-full mt-28 lg:w-full lg:h-72 lg:mt-0" src={image} alt="image" />
    </div>
   
    <div className="w-1/2  text-gray-800">
    <div className="flex flex-col max-auto p-6 rounded-md sm:p-10 w-full">
	<div className="mb-8 text-center">
		
		<p className="text-sm lg:text-2xl text-pink-700 border border-x-pink-600 font-bold">Sign Up to access your account</p>
	</div>
	<form  onSubmit={handleSignup} className="space-y-2 lg:space-y-12">
		<div className=" space-y-0 lg:space-y-4">
        <div>
				<div className="flex justify-between mb-0 lg:mb-2 text-white font-semibold">
					<label  className="text-sm text-white font-semibold">Name</label>
					
				</div>
				<input type="Username" name="name" id="Username" placeholder="Username" className="w-full px-1 lg:px-3 lg:py-2 border rounded-md bg-white  border-pink-600 hover:boder-pink-300" />
			</div>
			<div>
				<div className="flex justify-between mb-0 lg:mb-2 text-white font-semibold">
					<label  className="text-sm">Address</label>
					
				</div>
				<input type="address" name="address" id="address" placeholder="address" className="w-full px-1 lg:px-3 lg:py-2 bg-white rounded-md border border-pink-600 hover:boder-pink-300" />
			</div>
			<div>
				<label  className="block mb-0 lg:mb-2 text-sm text-white font-semibold">Email address</label>
				<input type="email" name="email" id="email" placeholder="@gmail.com" className="w-full px-1 lg:px-3 lg:py-2 bg-white rounded-md border border-pink-600 hover:boder-pink-300" />
			</div>
			<div>
				<div className="flex justify-between mb-2 text-white font-semibold">
					<label  className="text-sm">Confirm Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-1 lg:px-3 lg:py-2 bg-white rounded-md border border-pink-600 hover:boder-pink-300 " />
			</div>
			
		</div>
		<div className="space-y-0 lg:space-y-2">
			<div>
				<button type="submit" className="flex items-center px-4 lg:px-8 lg:py-3 font-semibold rounded-md bg-pink-700 text-white lg:font-bold">Sign Up</button>
               
            </div>
			<p className="lg:px-6 text-sm text-center text-gray-800 font-bold lg:text-2xl">Already have accout?....Go to <span className="font-bold text-pink-600 ">
                <Link to="/signin">Sign In</Link>
            </span>
				
			</p>
		</div>
	</form>
    {
               error && <p className=" text-xl font-bold text-red-500">{error}</p>
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