import { Link } from "react-router-dom";
import logo from "../../../public/assets/image/logo.png";
const Navbar = () => {
  const navlinks = (
    <>
      <li className="px-4 py-2  text-pink-600 text-2xl font-semibold rounded-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="px-4 py-2  text-pink-600 text-2xl font-semibold rounded-lg">
        <Link to="/about">About Us</Link>
      </li>
      <li className="px-4 py-2  text-pink-600 text-2xl font-semibold rounded-lg">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <img className="h-16 w-20" src={logo} alt="" />
          <p className="text-xl font-bold text-pink-600">Lipstick World</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
            <Link to="/signin" className="text-xl text-white bg-pink-600 px-4 py-2 rounded-2xl">Sign In</Link></div>
      </div>
   
  );
};

export default Navbar;
