import { Link } from "react-router-dom";
import logo from "../../../public/assets/image/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navlinks = (
    <>
      <li className="px-4 py-2  text-pink-600 text-2xl font-semibold rounded-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="px-4 py-2  text-pink-600 text-2xl font-semibold rounded-lg">
        <Link to="/about">About Us</Link>
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
          <img className="h-10 w-10 lg:h-16 lg:w-20" src={logo} alt="" />
          <p className=" text-sm lg:text-xl font-bold text-pink-600">
            Lipstick World
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>

        {user?.email ? (
              <li className=" px-2 flex">
                 <button className="px-4 py-2  text-pink-600 text-2xl font-semibold rounded-lg"><Link to="/productcard">My Order</Link></button>
                <button onClick={logout} className="px-4 py-2  text-pink-600 text-2xl font-semibold rounded-lg">LogOut</button>

              </li>
            ) : (
              <li className="px-4 py-2  text-pink-600 text-2xl font-semibold rounded-lg"><Link to="/signin">Sign In</Link></li>
            )}
      </div>
    </div>
  );
};

export default Navbar;
