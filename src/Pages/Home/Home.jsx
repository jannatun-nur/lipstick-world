import AddProduct from "./AddProduct/AddProduct";
import Banner from "./Banner/Banner";
import SignUp from "./SignUp/SignUp";


const Home = () => {
    return (
        <div>
          <Banner/>
          <SignUp/>
          <AddProduct/>
        </div>
    );
};

export default Home;