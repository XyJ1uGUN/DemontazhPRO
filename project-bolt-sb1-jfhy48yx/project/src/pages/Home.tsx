import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Clock, PenTool as Tool, Truck, Phone } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Гарантия качества',
      description: 'Все работы выполняются по договору с гарантией',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Точные сроки',
      description: 'Соблюдаем установленные сроки выполнения работ',
    },
    {
      icon: <Tool className="h-8 w-8" />,
      title: 'Опытные специалисты',
      description: 'Команда профессионалов с опытом более 10 лет',
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Вывоз мусора',
      description: 'Оперативный вывоз и утилизация строительного мусора',
    },
  ];

  const projects = [
    {
      title: 'Демонтаж квартиры',
      before: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800',
      after: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800',
    },
    {
      title: 'Демонтаж стен',
      before: 'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?auto=format&fit=crop&w=800',
      after: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800',
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1590914327718-68ae57ad6b4e?auto=format&fit=crop&w=800';
  };

  return (
    <div>
      <SEO
        title="Демонтаж в Москве – Профессиональный снос и вывоз мусора"
        description="Выполняем все виды демонтажных работ быстро, качественно и по доступным ценам. Работаем в Москве и области."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Профессиональный демонтаж в Москве
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl"
          >
            Выполняем все виды демонтажных работ быстро, качественно и по доступным ценам
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex space-x-4"
          >
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-md text-lg font-semibold flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Заказать звонок</span>
            </Link>
            <Link
              to="/pricing"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              Узнать цены
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-red-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Наши работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">До</p>
                    <img
                      src={project.before}
                      alt={`До ${project.title.toLowerCase()}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                      loading="lazy"
                      onError={handleImageError}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">После</p>
                    <img
                      src={project.after}
                      alt={`После ${project.title.toLowerCase()}`}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                      loading="lazy"
                      onError={handleImageError}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Готовы начать проект?</h2>
          <p className="text-xl mb-8">
            Свяжитесь с нами для получения бесплатной консультации и расчета стоимости
          </p>
          <Link
            to="/contact"
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold inline-flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Связаться с нами</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;