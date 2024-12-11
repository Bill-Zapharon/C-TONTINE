import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home,
  PlusCircle,
  Users,
  CreditCard,
  History,
  Bell,
  Settings,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  
  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const NavLink = ({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) => (
    <Link 
      to={to} 
      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
        isActiveRoute(to) 
          ? 'bg-blue-800 text-white' 
          : 'text-blue-100 hover:bg-blue-800 hover:text-white'
      }`}
      onClick={() => window.innerWidth < 768 && onClose()}
    >
      <Icon className="w-5 h-5" />
      <span>{children}</span>
    </Link>
  );

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 w-64 bg-blue-900 text-white p-4 transform transition-transform duration-200 ease-in-out z-30
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex justify-end md:hidden mb-4">
          <button onClick={onClose} className="p-2 hover:bg-blue-800 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-2">
          <NavLink to="/dashboard" icon={Home}>Tableau de bord</NavLink>
          <NavLink to="/create-tontine" icon={PlusCircle}>Créer Tontine</NavLink>
          <NavLink to="/join-tontine" icon={Users}>Rejoindre une Tontine</NavLink>
          <NavLink to="/loans" icon={CreditCard}>Prêt</NavLink>
          <NavLink to="/history" icon={History}>Historique</NavLink>
          
          <div className="pt-4 mt-4 border-t border-blue-800">
            <NavLink to="/notifications" icon={Bell}>Notifications</NavLink>
            <NavLink to="/settings" icon={Settings}>Paramètre</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}