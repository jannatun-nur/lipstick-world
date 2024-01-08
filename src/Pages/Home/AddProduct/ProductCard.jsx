import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import Swal from "sweetalert2";
import Update from "./Update";

const ProductCard = () => {

        
   const [product, setProduct] = useState([]);

   const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/delete/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // Update the state to remove the deleted product
        setProduct(product.filter(p => p._id !== _id));
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to cancel the order??",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your order has been deleted successfully...",
                icon: "success"
              });
            }
          });
    })
}

   useEffect(() => {
       fetch('http://localhost:5000/get-allbuy')
           .then(res => res.json())
           .then(data => {
               setProduct(data);
           });
   }, []);

   return (
    <> 
   {/* <h1 className="lg:text-2xl text-sm text-pink-600 text-center border border-pink-500 w-5/12 lg:w-2/12 mx-auto mb-2 lg:mb-4 font-serif">My Orders</h1>
     <table className="table lg:w-9/12 w-5/12 mx-auto">
           <thead >
               <tr className="bg-pink-400 text-white font-serif text-sm lg:text-xl">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                  
               </tr>
           </thead>
           <tbody>
               {product.map((products, index) => (
                  <tr key={index}>
                      <td className=" text-sm lg:text-xl text-gray-800 font-semibold">{products.name}</td>
                      <td className=" text-sm lg:text-xl  text-gray-800 font-semibold">{products.email}</td>
                      <td className="  text-sm lg:text-xl  text-gray-800 font-semibold">{products.category}</td>
                      <td className="  text-sm lg:text-xl text-gray-800 font-semibold">{products.price}</td>
                      <td className="text-xl">
                        <button className="text-red-500 pr-2 lg:pr-10"
                        onClick={()=>handleDelete(products._id)}
                        ><FaTrashAlt /></button>
                      
                        <label 
                        htmlFor={`product-${products._id}`}
                        className="text-green-500 btn bg-white border-none text-xm lg:text-2xl hover:bg-white"><BiEdit /></label><Update products={products}/>
                      
                      </td>
                     
                  
                  </tr>
               ))}
           </tbody>
       </table>
     */}

<div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
    <h2 className="mb-4 text-2xl font-semibold leadi">Invoices</h2>
    <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
            <thead className="bg-pink-600 text-sm lg:text-2xl">
                <tr className="text-left">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Price</th>
                    <th className="p-3 ">Action</th>
                </tr>
            </thead>
            <tbody>
                {product.map((products, index) => (
                    <tr key={index} className="border-b border-opacity-20 text-sm lg:text-2xl bg-white text-gray-800">
                        <td className="p-3">
                            <p>{products.name}</p>
                        </td>
                        <td className="p-3">
                            <p>{products.email}</p>
                        </td>
                        <td className="p-3">
                            <p>{products.category}</p>
                                                    </td>
                        <td className="p-3">
                            <p>{products.price}</p>
                            
                        </td>
                        <td className="p-3 flex">
                            <button className="text-red-500 pr-2 lg:pr-10"
                                onClick={() => handleDelete(products._id)}>
                                <FaTrashAlt />
                            </button>
                            <label htmlFor={`product-${products._id}`}
                                className="text-green-500 btn bg-white border-none text-xm lg:text-2xl hover:bg-white">
                                <BiEdit />
                            </label>
                            <Update products={products} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>


    </>
      
   );
};

export default ProductCard;