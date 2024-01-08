import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const BuyCard = ({ buys}) => {
  console.log(buys);
 if (!buys) {
   return null; // or return a loading spinner, etc.
 }
 const navigate = useNavigate()
 const {user} = useContext(AuthContext)

 const handleClick = () => {
  if (user?.email) {
    navigate('/buylipstick');
  } else {
    navigate('/signin');
  }
};
 const { name, image , title ,price, in_stock, button } = buys;
 return (
   <div className="">
     <div className="rounded-md shadow-md sm:w-52 bg-white text-pink-700 border border-black">
       
       <img
         src={image}
         alt=""
         className="object-cover object-center w-52 dark:bg-gray-500"
       />
       <div className="p-3">
         <div className="">
 
           
         </div>
         <div className="flex flex-wrap items-center pb-1">
           
         </div>
         <div className="text-black font-semibold">
           <div>
           <p className="text-sm">
             <span className="text-xl font-semibold">{name}</span>
           </p>
          
           </div>
           <p>
               {title}
           </p>
          <p>
           ${price}
          </p>
          <p>
           {in_stock}
          </p>
         </div>
        <Link to="buylipstick">
        <button 
      
        onClick={handleClick}
        className="px-2 border border-pink-500 rounded-lg mt-2 text-2xl font-bold">{button}</button>
        </Link>
       </div>
     </div>

    
   </div>
 );
};

BuyCard.propTypes = {
 buys: PropTypes.shape({
   name: PropTypes.string,
   image: PropTypes.string,
   title: PropTypes.string,
   price: PropTypes.number,
   in_stock: PropTypes.bool,
   button: PropTypes.string,
 }).isRequired,
};

export default BuyCard;