import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, AcademicCapIcon, CalendarIcon, NewspaperIcon, LibraryIcon, VideoCameraIcon, ClipboardListIcon, LogoIcon } from '../constants';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Courses', href: '/courses', icon: AcademicCapIcon },
  { name: 'Test Series', href: '/test-series', icon: CalendarIcon },
  { name: 'Previous Year Papers', href: '/previous-papers', icon: NewspaperIcon },
  { name: 'Current Affairs', href: '/current-affairs', icon: NewspaperIcon },
  { name: 'Books', href: '/books', icon: LibraryIcon },
  { name: 'Free Courses', href: '/free-courses', icon: VideoCameraIcon },
  { name: 'PDF Notes', href: '/pdf-notes', icon: ClipboardListIcon },
];

const NavLinks: React.FC<{onLinkClick?: () => void}> = ({onLinkClick}) => (
    <nav className="flex-1 px-2 space-y-1">
        {navigation.map((item) => (
            <NavLink
                key={item.name}
                to={item.href}
                end={item.href === '/'}
                onClick={onLinkClick}
                className={({ isActive }) =>
                    `group flex items-center px-2 py-2.5 text-sm font-medium rounded-md ${
                    isActive
                        ? 'bg-primary text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`
                }
            >
                <item.icon
                    className="mr-3 flex-shrink-0 h-6 w-6"
                    aria-hidden="true"
                />
                {item.name}
            </NavLink>
        ))}
    </nav>
);

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
             <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
                <NavLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className={`lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-30" 
          aria-hidden="true"
          onClick={() => setSidebarOpen(false)}
        ></div>
        
        <div className="fixed inset-y-0 left-0 w-64 flex z-40">
            <div className="flex-1 flex flex-col max-w-xs w-full bg-white">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                     <div className="flex items-center flex-shrink-0 px-4">
                        <LogoIcon className="h-8 w-auto text-primary" />
                        <span className="text-xl font-bold text-primary ml-2">DD EDUCATION</span>
                    </div>
                    <div className="mt-5">
                        <NavLinks onLinkClick={() => setSidebarOpen(false)}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;