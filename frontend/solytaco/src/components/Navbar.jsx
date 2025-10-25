import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <nav className="w-full h-auto font-chango text-white bg-gray-950 p-2">
      <div className="flex flex-col justify-around items-center w-full pt-2">
        <div className="flex justify-center items-center mb-2">
          {/* Logo left */}
          <img
            src={logo}
            alt="Sol y Taco logo"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          />

          {/* Center text */}
          <div className="flex flex-col items-center text-center px-2 sm:px-4">
            <p className="text-yellow-500 text-lg font-bold sm:text-3xl lg:text-5xl">
              Sol y Taco
            </p>
            <p className="font-lobster italic font-bold sm:text-lg lg:text-3xl">
              Mexican Restaurant
            </p>
          </div>

          {/* Logo right */}
          <img
            src={logo}
            alt="Sol y Taco logo"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          />
        </div>

        {/* Nav links */}
        <ul className="flex w-full justify-around font-bold lg:w-[50%] lg:text-lg">
          <Link to="/">
            <li className="p-1 mx-0.5 cursor-pointer hover:text-yellow-500 transition-colors">
              Home
            </li>
          </Link>
          <HashLink smooth to="/#about">
            <li className="p-1 mx-0.5 cursor-pointer hover:text-yellow-500 transition-colors">
              About
            </li>
          </HashLink>
          <HashLink smooth to="/#menu">
            <li className="p-1 mx-0.5 cursor-pointer hover:text-yellow-500 transition-colors">
              Menu
            </li>
          </HashLink>
          <Link to="/cart">
            <li className="p-1 mx-0.5 cursor-pointer hover:text-yellow-500 transition-colors">
              Cart
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
