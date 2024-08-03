import React from 'react';
import Navlink from '../components/Navlink';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="mb-2">
            <Navlink link="/"><svg id="logo-72"  width="42" height="38" viewBox="0 0 53 44"  xmlns="http://www.w3.org/2000/svg"><path d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z" className="ccustom" fill="#0466c8"></path> </svg></Navlink>
            <p className="text-sm">The smarter way to start your next idea.</p>
          </div>
          
          {/* Column 2 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">How it works</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Overview</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Pricing</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Service Areas</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Resources</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Customer Stories</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Knowledge Base</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Products</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Corporate Partners</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Secure Identity</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Legal Help</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">First Capital</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm">&copy;2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
