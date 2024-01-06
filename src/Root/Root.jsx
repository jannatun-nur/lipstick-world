import { Outlet } from "react-router-dom";
import Navbar from "../Fixed/Navbar/Navbar";



const Root = () => {
    return (
        <div>
            <div>
                <Navbar/>
                <Outlet/>
                
            </div>
        </div>
    );
};

export default Root;





