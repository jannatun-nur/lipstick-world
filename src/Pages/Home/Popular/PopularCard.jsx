import { Link } from "react-router-dom";
import { FaBox } from "react-icons/fa";
const PopularCard = ({ populars }) => {
  const { name ,image_url ,in_stock, price} = populars;
  return (
    <div>
       <div className="rounded-md shadow-md sm:w-52 bg-white text-pink-700 border border-black">
        
        <img
          src={image_url}
          alt=""
          className="object-cover object-center w-52  dark:bg-gray-500"
        />
        <div className="p-3">
          <div className="">
          
          </div>
          <div className="flex flex-wrap items-center pb-1">
            
          </div>
          <div className="text-black font-semibold">
            <div>
            <p className="text-sm">
              <span className="text-2xl font-bold">{name}</span>
            </p>
           
            </div>
            
           <p className="text-xl font-bold">
            $      {price}
           </p>
           <p className=" flex gap-2 text-2xl font-bold">
          <span className="mt-2"> <FaBox /></span> {in_stock}
           </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
