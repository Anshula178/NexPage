import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navlink from './Navlink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes,faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-gray-900 py-4 px-6'>
      <div className='container mx-auto flex items-center justify-between max-w-screen-xl px-4'>
        {/* Menu items for larger screens */}
        <div className='hidden sm:flex items-center  space-x-6'>
           <Navlink link="/"><svg id="logo-72"  width="42" height="38" viewBox="0 0 53 44"  xmlns="http://www.w3.org/2000/svg"><path d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z" className="ccustom" fill="#0466c8"></path> </svg></Navlink>
           <Navlink link="/">Pricing</Navlink>
           <Navlink link="/">About</Navlink>
           <Navlink link="/">Blog</Navlink>
           <Navlink link="/">Wall of love</Navlink>
           <Navlink link="/">Resources</Navlink>
          </div>

          {/* Sign In and Request Demo on the right side */}
          <div className='hidden sm:flex  space-x-4'>
            <Navlink link="/">Sign In</Navlink>
            <Link className="text-gray-300   px-3 text-lg">Request Demo<FontAwesomeIcon icon={faArrowRight} className='ml-2 text-blue-700 transition' /></Link>
          </div>
        

        {/* Menu toggle button always visible */}
        <div className='flex items-center sm:hidden'>
          <button onClick={toggleMenu} className='text-gray-300'>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className='h-6 w-6' />
          </button>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className='sm:hidden mt-4'>
          <div className='flex flex-col space-y-2'>
            <Navlink link="/">Pricing</Navlink>
            <Navlink link="/">About</Navlink>
            <Navlink link="/">Blog</Navlink>
            <Navlink link="/">Wall of love</Navlink>
            <Navlink link="/">Resources</Navlink>
            <Navlink link="/">Sign In</Navlink>
            <Link className="text-gray-300 hover:text-blue-700 transition px-3 text-lg">Request Demo</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
