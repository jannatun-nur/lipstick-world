import { Link } from "react-router-dom";


const BuyCard = ({ buys }) => {
  const { name, image , title ,price, in_stock, button } = buys;
  return (
    <div className="">
      <div className="rounded-md shadow-md sm:w-52 bg-white text-pink-700 border border-black">
        
        <img
          src={image}
          alt=""
          className="object-cover object-center w-52  dark:bg-gray-500"
        />
        <div className="p-3">
          <div className="">
            {/* <div className="">
              <button
                type="button"
                title="Like post"
                className=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
              </button>
              
             
            </div> */}
            
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
         <button className="px-2 border border-pink-500 rounded-lg mt-2 font-semibold">{button}</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
