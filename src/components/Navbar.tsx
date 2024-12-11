import React, { useState } from 'react';
import { Bell, Settings, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [unreadNotifications] = useState(2); // Example state for notifications

  return (
    <nav className="bg-blue-900 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-blue-800 rounded-lg transition-colors duration-200"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <Link 
            to="/notifications" 
            className="p-2 hover:bg-blue-800 rounded-lg transition-colors duration-200 relative"
          >
            <Bell className="w-6 h-6" />
            {unreadNotifications > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadNotifications}
              </span>
            )}
          </Link>
          <Link 
            to="/settings" 
            className="p-2 hover:bg-blue-800 rounded-lg transition-colors duration-200"
          >
            <Settings className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}