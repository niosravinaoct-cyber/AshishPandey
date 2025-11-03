import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HomeIcon, AcademicCapIcon, ClipboardDocumentListIcon, DocumentDuplicateIcon, NewspaperIcon, BookOpenIcon, GiftIcon, DocumentTextIcon } from '../constants';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Courses', path: '/courses', icon: AcademicCapIcon },
    { name: 'Test Series', path: '/test-series', icon: ClipboardDocumentListIcon },
    { name: 'Previous Year Papers', path: '/previous-papers', icon: DocumentDuplicateIcon },
    { name: 'Current Affairs', path: '/current-affairs', icon: NewspaperIcon },
    { name: 'Books', path: '/books', icon: BookOpenIcon },
    { name: 'Free Courses', path: '/free-courses', icon: GiftIcon },
    { name: 'PDF Notes', path: '/notes', icon: DocumentTextIcon },
];

const SidebarNavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200 hover:text-gray-700 ${
            isActive ? 'bg-primary/20 text-primary' : ''
          }`
        }
      >
        {children}
      </NavLink>
    );
};

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black opacity-50 transition-opacity lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto bg-white transition-transform duration-300 transform lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        }`}
      >
        <div className="flex items-center justify-center mt-8">
            <Link to="/" className="flex items-center gap-2">
                 <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                <span className="text-gray-800 text-2xl font-semibold">DNEducation</span>
            </Link>
        </div>

        <nav className="mt-10 px-2">
            {navItems.map(item => (
                <SidebarNavLink key={item.name} to={item.path}>
                    <item.icon className="w-5 h-5" />
                    <span className="mx-4 font-medium">{item.name}</span>
                </SidebarNavLink>
            ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
