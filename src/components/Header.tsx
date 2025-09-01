import React from 'react';
import { TrendingUp, Users, LogOut, Home } from 'lucide-react';
import BikLogo from '../assets/bik-capital-logo.png';

interface HeaderProps {
  onShowLogin: () => void;
  onLogout: () => void;
  isAdminMode: boolean;
  isLoggedIn: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onShowLogin, onLogout, isAdminMode, isLoggedIn }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src={BikLogo} alt="Bik Capital Logo" className="w-28 h-26 object-contain" />
              <h1 className="text-xl font-bold text-gray-900">Uganda Securities</h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Government Securities</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm">Trusted by 1000+ Investors</span>
            </div>
          </nav>

          <div className="flex items-center space-x-2">
            <a
              href="https://bik-capital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
              title="Back to Bik Capital"
            >
              <Home className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Main Site</span>
            </a>
            {isLoggedIn && isAdminMode && (
              <span className="text-sm text-green-600 font-medium">Admin Mode</span>
            )}
            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="flex items-center px-4 py-2 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg text-sm font-medium transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            ) : (
              <button
                onClick={onShowLogin}
                className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
              >
                Admin Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};