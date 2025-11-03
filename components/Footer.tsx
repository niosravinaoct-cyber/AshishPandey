import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-400 hover:text-white transition-colors">{children}</a>
);

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Free Courses', path: '/free-courses'},
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', path: '#' },
    { name: 'Privacy Policy', path: '#' },
    { name: 'Refunds & Cancellation', path: '#' },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold">DD EDUCATION</h3>
            <p className="text-gray-400 text-sm max-w-md">We help you Dream, Achieve & Succeed. Your one-stop platform for NIOS solved TMAs, practical files, and study resources.</p>
             <div className="flex space-x-6 mt-6">
                <SocialIcon href="#">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </SocialIcon>
                <SocialIcon href="#">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>
                </SocialIcon>
                <SocialIcon href="#">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.012 2C6.486 2 2 6.486 2 12.012c0 1.884.52 3.642 1.438 5.166L2 22l4.904-1.42c1.498.858 3.21 1.332 5.108 1.332 5.526 0 10.012-4.486 10.012-10.012S17.538 2 12.012 2zM12 20.134c-1.63 0-3.17-.488-4.46-1.352L6.25 18.19l-1.43 1.43-1.08-3.32 1.38-1.18c-.93-1.34-1.42-2.94-1.42-4.63 0-4.41 3.59-8.01 8.01-8.01 4.41 0 8.01 3.59 8.01 8.01s-3.6 8.01-8.01 8.01zm3.87-5.91c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.51.65-.63.78-.12.13-.24.15-.44.05-.2-.1-.85-.31-1.61-1s-1.18-1.31-1.31-1.54c-.13-.23-.01-.36.09-.45.09-.09.2-.23.3-.34.1-.12.13-.2.2-.34.07-.13.04-.25-.03-.34-.06-.1-.44-1.06-.6-1.45s-.32-.33-.44-.33h-.4c-.13 0-.34.05-.51.25-.17.2-.65.63-.65 1.54 0 .91.66 1.78.75 1.91.1.13 1.31 2.13 3.16 2.96.44.2.78.31 1.05.4.52.17 1.02.15 1.41.09.43-.06 1.18-.48 1.34-.95.17-.46.17-.85.12-.95-.05-.1-.18-.15-.38-.25z" /></svg>
                </SocialIcon>
                 <SocialIcon href="#">
                   <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.418 4.814a2.504 2.504 0 0 1-1.768 1.768C18.22 19 12 19 12 19s-6.22 0-7.814-.418a2.504 2.504 0 0 1-1.768-1.768C2.002 15.22 2 12 2 12s0-3.22.418-4.814a2.504 2.504 0 0 1 1.768-1.768C5.78 5 12 5 12 5s6.22 0 7.814.418zM9.5 15.5V8.5l6 3.5-6 3.5z" clipRule="evenodd" /></svg>
                </SocialIcon>
            </div>
          </div>

          {/* Links and App Download */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-base text-gray-300 hover:text-white text-sm">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
             <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-2">
                {legalLinks.map(link => (
                    <li key={link.name}>
                    <Link to={link.path} className="text-base text-gray-300 hover:text-white text-sm">{link.name}</Link>
                    </li>
                ))}
                </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Download App</h3>
             <a href="#" className="mt-4 inline-block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12"/>
             </a>
          </div>

        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} DD EDUCATION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;