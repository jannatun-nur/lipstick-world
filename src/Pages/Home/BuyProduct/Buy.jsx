import { useEffect, useState } from "react";
import BuyCard from "./BuyCard";


const Buy = () => {

    const [buy , setBuy] = useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/allbuy')
        .then(res => res.json())
        .then(data =>setBuy(data))
    },[])
    return (
        <div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {
                        buy.map(buys=><BuyCard key={buys._id} buys={buys}></BuyCard>)
                    }
                </div>
            
        </div>
    );
};

export default Buy;