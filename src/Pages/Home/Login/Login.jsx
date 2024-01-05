

const Login = () => {

    const handleSignIn = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        const equal = { email , password}
        console.log(equal);
    }
    return (
        <div className="w-5/12 mx-auto">
            <form onSubmit={handleSignIn}>

            <div>
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
        </div>
    );
};

export default Login;