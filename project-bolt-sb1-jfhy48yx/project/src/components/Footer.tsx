import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Hammer className="h-8 w-8" />
              <span className="font-bold text-xl">ДемонтажПро</span>
            </div>
            <p className="mt-2 text-gray-400">
              Профессиональные демонтажные работы любой сложности в Москве и области
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/apartment-demolition" className="text-gray-400 hover:text-white">
                  Демонтаж квартир
                </Link>
              </li>
              <li>
                <Link to="/services/house-demolition" className="text-gray-400 hover:text-white">
                  Демонтаж домов
                </Link>
              </li>
              <li>
                <Link to="/services/wall-demolition" className="text-gray-400 hover:text-white">
                  Демонтаж стен
                </Link>
              </li>
              <li>
                <Link to="/services/plumbing-demolition" className="text-gray-400 hover:text-white">
                  Демонтаж сантехники
                </Link>
              </li>
              <li>
                <Link to="/services/waste-removal" className="text-gray-400 hover:text-white">
                  Вывоз мусора
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white">
                  Цены
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:+79264991550" className="text-gray-400 hover:text-white">
                  +7 (926) 499-15-50
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:info@demontage.ru" className="text-gray-400 hover:text-white">
                  info@demontage.ru
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">
                  г. Москва, ул. Строителей, д. 10
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">
                  Пн-Вс: 8:00 - 20:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} ДемонтажПро. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;