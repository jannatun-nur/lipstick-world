import Swal from "sweetalert2";


const AddProduct = () => {


    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target
      
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const product = {name,email,category,price};
        console.log(product);

        fetch('http://localhost:5000/allbuys' ,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res =>{
            res.json()
            Swal.fire({
                
                text: "Your have been ordered successfully..",
                icon: "success"
              });
        }).then(data =>{
            console.log(data);
        })
    }

    return (
        <>
        <form onSubmit={ handleSubmit}>
        <div className="w-5/12 mx-auto">
              

            <div>
				<div className="flex justify-between mb-2 text-white font-semibold">
					<label  className="text-sm text-white font-semibold">Name</label>
					
				</div>
				<input type="Username" name="name" id="Username" placeholder="Username" className="w-full px-3 py-2 border rounded-md bg-white  border-pink-600 hover:boder-pink-300" />
			</div>

            <div>
				<div className="flex justify-between mb-2 text-white font-semibold">
					<label  className="text-sm text-white font-semibold">Email</label>
					
				</div>
				<input type="email" name="email" id="Useremail" placeholder="User email" className="w-full px-3 py-2 border rounded-md bg-white  border-pink-600 hover:boder-pink-300" />
			</div>
            <div>
				<div className="flex justify-between mb-2 text-white font-semibold">
					<label  className="text-sm text-white font-semibold">Category</label>
					
				</div>
				<input type="text" name="category" id="Usercategory" placeholder="Category" className="w-full px-3 py-2 border rounded-md bg-white  border-pink-600 hover:boder-pink-300" />
			</div>
            <div>
				<div className="flex justify-between mb-2 text-white font-semibold">
					<label  className="text-sm text-white font-semibold">Price</label>
					
				</div>
				<input type="text" name="price" id="price" placeholder="price" className="w-full px-3 py-2 border rounded-md bg-white  border-pink-600 hover:boder-pink-300" />
			</div>

           <div >
           <button className="px-4 rounded-lg bg-pink-600 py-2 mt-2 text-white">Add Product</button>
           </div>

        </div>
        </form>
        </>
       
    );
};

export default AddProduct;