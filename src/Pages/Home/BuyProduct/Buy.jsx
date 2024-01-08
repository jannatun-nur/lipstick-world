import { useEffect, useState } from "react";
import BuyCard from "./BuyCard";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Buy = () => {
   const [buy , setBuy] = useState([])
 

   useEffect( ()=>{
       fetch('http://localhost:5000/allbuys')
       .then(res => res.json())
       .then(data =>setBuy(data))
   },[])
   return (
       <div>
           <p className="text-4xl font-bold text-gray-800 py-6 text-center ">
               # Purchase Your own choice
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
               {
                  buy.map(buys=><BuyCard key={buys._id} buys={buys}></BuyCard>)
               }
           </div>
           
       </div>
   );
};

export default Buy;