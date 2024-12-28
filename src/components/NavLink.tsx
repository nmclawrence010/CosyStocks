import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const NavLink = ({ icon, text, className = '' }: NavLinkProps) => (
  <a
    href="#"
    className={`flex items-center space-x-1.5 text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 group ${className}`}
  >
    <span className="group-hover:scale-110 transition-transform duration-200">
      {icon}
    </span>
    <span className="text-sm font-medium">{text}</span>
  </a>
);

export default NavLink;