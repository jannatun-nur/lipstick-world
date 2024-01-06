import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
const ProductCard = () => {
   const [product, setProduct] = useState([]);

   const handleDelete = (_id) =>{
    
   }

   useEffect(() => {
       fetch('http://localhost:5000/get-allbuys')
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
                        onClick={()=>{handleDelete._id}}
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