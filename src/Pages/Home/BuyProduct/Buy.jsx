import { useEffect, useState } from "react";


const Buy = () => {

    const [buy , setBuy] = useState([])

    useEffect( ()=>{
        fetch('buy.json')
        .then(res => res.json())
        .then(data =>console.log(data))
    },[])
    return (
        <div>

                <div>
                    {
                        buy.map(buys=><Buy)
                    }
                </div>
            
        </div>
    );
};

export default Buy;