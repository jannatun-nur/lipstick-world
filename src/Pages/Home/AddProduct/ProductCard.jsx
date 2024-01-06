import { useEffect, useState } from "react";

const ProductCard = () => {
   const [product, setProduct] = useState([]);

   useEffect(() => {
       fetch('http://localhost:5000/get-allbuys')
           .then(res => res.json())
           .then(data => {
               setProduct(data);
           });
   }, []);

   return (
    <> 
   
     <table className="table table-zebra bg-pink-200">
           <thead>
               <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Price</th>
               </tr>
           </thead>
           <tbody>
               {product.map((products, index) => (
                  <tr key={index}>
                      <td>{products.name}</td>
                      <td>{products.email}</td>
                      <td>{products.category}</td>
                      <td>{products.price}</td>
                  </tr>
               ))}
           </tbody>
       </table>
    
    </>
      
   );
};

export default ProductCard;