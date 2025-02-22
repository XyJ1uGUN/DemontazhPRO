import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer, Phone } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesTimeout = useRef<NodeJS.Timeout>();
  const location = useLocation();

  const services = [
    { name: 'Демонтаж квартир', path: '/services/apartment-demolition' },
    { name: 'Демонтаж домов', path: '/services/house-demolition' },
    { name: 'Демонтаж стен', path: '/services/wall-demolition' },
    { name: 'Демонтаж сантехники', path: '/services/plumbing-demolition' },
    { name: 'Вывоз мусора', path: '/services/waste-removal' },
  ];

  const handleServicesEnter = () => {
    if (servicesTimeout.current) {
      clearTimeout(servicesTimeout.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay before hiding
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Hammer className="h-8 w-8" />
            <span className="font-bold text-xl">ДемонтажПро</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div 
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button 
                className={`hover:text-gray-300 px-3 py-2 rounded-md ${
                  isServicesOpen ? 'bg-gray-800' : ''
                }`}
              >
                Услуги
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                        isActive(service.path) ? 'bg-gray-100' : ''
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link 
              to="/pricing" 
              className={`hover:text-gray-300 px-3 py-2 rounded-md ${
                isActive('/pricing') ? 'bg-gray-800' : ''
              }`}
            >
              Цены
            </Link>
            <Link 
              to="/contact"
              className={`hover:text-gray-300 px-3 py-2 rounded-md ${
                isActive('/contact') ? 'bg-gray-800' : ''
              }`}
            >
              Контакты
            </Link>
            <a
              href="tel:+79264991550"
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>+7 (926) 499-15-50</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {services.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className={`block px-3 py-2 text-base font-medium hover:bg-gray-700 rounded-md ${
                  isActive(service.path) ? 'bg-gray-700' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <Link
              to="/pricing"
              className={`block px-3 py-2 text-base font-medium hover:bg-gray-700 rounded-md ${
                isActive('/pricing') ? 'bg-gray-700' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Цены
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 text-base font-medium hover:bg-gray-700 rounded-md ${
                isActive('/contact') ? 'bg-gray-700' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              Контакты
            </Link>
            <a
              href="tel:+79264991550"
              className="block px-3 py-2 text-base font-medium hover:bg-gray-700 rounded-md"
            >
              +7 (926) 499-15-50
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;