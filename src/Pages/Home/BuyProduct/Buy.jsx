import { useEffect, useState } from "react";


const Buy = () => {

    const [buy , setBuy] = useState([])

    useEffect( ()=>{
        fetch('buy.json')
    },[])
    return (
        <div>

            
        </div>
    );
};

export default Buy;