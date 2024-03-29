import { useEffect } from "react";
import { useState } from "react";
import PopularCard from "./PopularCard";


const Popular = () => {


const [ popular , setPopular] = useState([])
 
useEffect(()=>{
    fetch('details.json')
    .then( res=> res.json())
    .then(data => {
        setPopular(data);
    })
},[])

    return (
        <div>
            <p className="text-xl lg:text-4xl text-gray-800 font-bold my-2 lg:my-4 text-center"># Most wanted lipsticks</p>

            <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    popular.map( populars =><PopularCard key={populars.name} populars={populars}></PopularCard>)
                }
            </div>

        </div>
    );
};

export default Popular;






