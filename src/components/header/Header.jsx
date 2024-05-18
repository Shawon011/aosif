// src/Navbar.js
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="header bg-[#ffffffcb] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="/assets/osf_logo.png"
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block sm:ml-6">
              <div className="flex items-center space-x-4">
                <a href="/" className="text-black px-3 py-2 rounded-md ">
                  Home
                </a>
                <div className="relative">
                <a href="/products" className="text-gray-black px-3 py-2 rounded-md ">
                  Products
                </a>
                </div>
                <a href="#" className="text-black px-3 py-2 rounded-md ">
                  Solutions
                </a>
                <a href="#" className="text-black px-3 py-2 rounded-md ">
                  Service
                </a>
                <a href="/about" className="text-black px-3 py-2 rounded-md ">
                  About us
                </a>
                <a href="#" className="text-black px-3 py-2 rounded-md ">
                  News
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-[8px] flex items-center md:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white bg-red-500"
            >
              {isOpen ? (
                <div className="block" aria-hidden="true">
                  <IoClose/>
                </div>
              ) : (
                <div className="block" aria-hidden="true" >
                  <FaBars/>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="text-black block px-3 py-2 rounded-md ">
            Home
          </a>
          <a href="/products" className="text-black block px-3 py-2 rounded-md ">
            Products
          </a>
          <a href="#" className="text-black block px-3 py-2 rounded-md ">
            Solutions
          </a>
          <a href="#" className="text-black block px-3 py-2 rounded-md ">
            Service
          </a>
          <a href="/about" className="text-black block px-3 py-2 rounded-md ">
            About us
          </a>
          <a href="#" className="text-black block px-3 py-2 rounded-md ">
            News
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
