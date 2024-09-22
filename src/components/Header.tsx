import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-300">MyLogo</Link>
        </div>

        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          </li>
        </ul>

        <div>
          <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-gray-800">
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
