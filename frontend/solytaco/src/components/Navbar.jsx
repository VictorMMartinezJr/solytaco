import logo from "../assets/logo.png";
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
          <li className="p-1 mx-0.5 cursor-pointer hover:text-yellow-500 transition-colors">
            <a href="#home">Home</a>
          </li>
          <li className="p-1 mx-0.5 cursor-pointer hover:text-yellow-500 transition-colors">
            <a href="#about">About</a>
          </li>
          <li className="p-1 mx-0.5 cursor-pointer hover:text-yellow-500 transition-colors">
            <a href="#menu">Menu</a>
          </li>

          <li className="p-1 mx-0.5 cursor-pointer hover:text-yellow-500 transition-colors">
            Cart
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
