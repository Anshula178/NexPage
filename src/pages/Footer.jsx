import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="mb-4">
            
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
