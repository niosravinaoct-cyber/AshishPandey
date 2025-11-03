import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b-2 border-gray-200 sticky top-0 z-30">
      {/* Mobile menu button */}
      <div className="flex items-center">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 focus:outline-none lg:hidden">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Search bar */}
        <div className="relative mx-4 lg:mx-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <input className="w-32 sm:w-64 md:w-96 rounded-full form-input pl-10 pr-4 py-2 border-2 border-gray-200 bg-gray-100 focus:bg-white focus:border-primary" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center gap-2">
            <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 rounded-full hover:bg-gray-200 transition-colors hidden sm:block">Login</Link>
            <Link to="/login" className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-hover transition-colors">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
