import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="py-16">
      <SEO
        title="Свяжитесь с нами – Бесплатная консультация по демонтажу"
        description="Свяжитесь с нами для получения бесплатной консультации по демонтажным работам. Работаем в Москве и области."
        path="/contact"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Контакты</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Наши контакты</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="font-semibold">Телефон</h3>
                  <a href="tel:+79264991550" className="text-gray-600 hover:text-red-600">
                    +7 (926) 499-15-50
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:info@demontage.ru" className="text-gray-600 hover:text-red-600">
                    info@demontage.ru
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="font-semibold">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Строителей, д. 10</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="font-semibold">Время работы</h3>
                  <p className="text-gray-600">Пн-Вс: 8:00 - 20:00</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5887738251394!2d37.5344!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzInMDMuOCJF!5e0!3m2!1sen!2sru!4v1635789012345!5m2!1sen!2sru"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Обратная связь</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;