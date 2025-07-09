import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=''>
      {/* navbar */}
      <nav className="flex items-center justify-between flex-wrap bg-white-700 pt-4 space-y-5 
        bg-gradient-to-l from-white from-10% to-black to-90%">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" 
          xmlns="http://www.w3.org/2000/svg">
          <path d="..."/></svg> */}
          <Link to="/" className="font-semibold tracking-tight ml-56 text-2xl mb-4 text-white font-font1">
            Code by Danna
          </Link>
        </div>

        {/* Hamburger menu (commented out) */}
        {/* <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="..."/></svg>
          </button>
        </div> */}

        <div className="w-full block lg:items-center lg:w-auto pb-10 ">
          <div className="text-sm lg:flex-grow mr-52">
            <Link to="/portfolio" className="block text-2xl mt-2 lg:inline-block lg:mt-0 text-black hover:text-gray-500 ml-16 font-font1 font-medium">
              Portfolio
            </Link>
            <Link to="/about" className="block text-2xl mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 ml-16 font-font1 font-medium">
              About
            </Link>
            <Link to="/contact" className="block text-2xl mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 ml-16 font-font1 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
