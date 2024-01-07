import { Outlet } from "react-router-dom";
import Navbar from "../Fixed/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";



const Root = () => {
    return (
        <div>
            <div>
                <Navbar/>
                <Outlet/>
                <Footer/>
                
            </div>
        </div>
    );
};

export default Root;





