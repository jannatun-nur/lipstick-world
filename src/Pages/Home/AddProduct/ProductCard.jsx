import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import Swal from "sweetalert2";

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
   <h1 className="text-2xl text-pink-600 text-center border border-pink-500 w-2/12 mx-auto mb-4 font-serif">My Orders</h1>
     <table className="table w-9/12 mx-auto">
           <thead >
               <tr className="bg-pink-400 text-white font-serif text-xl">
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
                      <td className="text-xl text-gray-800 font-semibold">{products.name}</td>
                      <td className="text-xl text-gray-800 font-semibold">{products.email}</td>
                      <td className="text-xl text-gray-800 font-semibold">{products.category}</td>
                      <td className="text-xl text-gray-800 font-semibold">{products.price}</td>
                      <td className="text-xl">
                        <button className="text-red-500 pr-10"
                        onClick={()=>handleDelete(products._id)}
                        ><FaTrashAlt /></button>
                        <button className="text-green-500"><BiEdit /></button>
                      
                      </td>
                     
                  
                  </tr>
               ))}
           </tbody>
       </table>
    
    </>
      
   );
};

export default ProductCard;