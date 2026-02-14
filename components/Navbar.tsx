import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Download, BookOpen, Video, Shield, Award } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Basics', path: '/basics', icon: <Shield size={18} /> },
    { name: 'Katas', path: '/katas', icon: <Video size={18} /> },
    { name: 'Kumite', path: '/kumite', icon: <Award size={18} /> },
    { name: 'Terminology', path: '/terminology', icon: <BookOpen size={18} /> },
    { name: 'Downloads', path: '/downloads', icon: <Download size={18} /> },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-t-4 border-karate-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-10 h-10 bg-karate-red rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:bg-red-700 transition-colors">
                S
              </div>
              <div className="hidden md:block">
                <span className="block text-lg font-bold text-gray-900 leading-none">Satokai</span>
                <span className="block text-xs font-semibold text-karate-red leading-none">Shito-Ryu</span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Search & Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search videos..."
                className="pl-10 pr-4 py-1.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-karate-red focus:border-transparent w-48 transition-all focus:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2 text-gray-400" size={16} />
            </form>
            
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1.5 transition-colors ${
                      isActive
                        ? 'bg-karate-red text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
             <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-8 pr-2 py-1 border border-gray-300 rounded-full text-xs w-32 focus:outline-none focus:ring-1 focus:ring-karate-red"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-2.5 top-1.5 text-gray-400" size={14} />
            </form>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-karate-red focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                    isActive
                      ? 'bg-karate-red text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;