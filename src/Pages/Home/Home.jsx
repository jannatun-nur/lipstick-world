import AddProduct from "./AddProduct/AddProduct";
import Banner from "./Banner/Banner";
import Popular from "./Popular/Popular";
import SignUp from "./SignUp/SignUp";


const Home = () => {
    return (
        <div>
          <Banner/>
          <Popular/>
          <SignUp/>
          <AddProduct/>
        </div>
    );
};

export default Home;