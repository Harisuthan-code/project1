import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-full">
        <div className="flex justify-between items-center px-6 py-4 ">


          <h1 className="text-3xl text-bold ssm:text-1xl md:text-3xl lg:5xl">AwayLost</h1>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 text-lg cursor-pointer">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
          <Link to="usecase" smooth={true} duration={500} className="cursor-pointer">Why I Built This</Link>
          <Link to="howwork" smooth={true} duration={500} className="cursor-pointer">How It Works</Link>

          </ul>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center bg-gray-800 py-4">
            <li className="py-2 hover:text-gray-300">About</li>
            <li className="py-2 hover:text-gray-300">Why I Built This</li>
            <li className="py-2 hover:text-gray-300">How It Works</li>
          </ul>
        )}
    </div>
  );
};

export default Nav;
