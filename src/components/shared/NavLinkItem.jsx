import React from 'react';
    import { Link } from 'react-router-dom';

    const NavLinkItem = ({ to, children, currentPath, onClick }) => {
      const isActive = currentPath === to;
      return (
        <Link 
          to={to} 
          onClick={onClick}
          className={`relative text-lg font-medium transition-colors duration-300 ease-in-out group ${isActive ? 'text-golden-300' : 'text-gray-300 hover:text-golden-400'}`}
        >
          {children}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-golden-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out ${isActive ? 'scale-x-100' : ''}`}></span>
        </Link>
      );
    };

    export default NavLinkItem;