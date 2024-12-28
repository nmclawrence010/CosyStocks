import React from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from './NavLink';
import { navigationLinks } from '../config/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-900 dark:text-white" />
        ) : (
          <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-[4.5rem] left-0 right-0 px-6">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-lg p-4 space-y-4">
            {navigationLinks.map((link) => (
              <NavLink key={link.text} {...link} className="block" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;