import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

const ContactForm = ({ isModal, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'apartment',
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log the form data (replace with actual API call)
      console.log('Form submitted:', formData);
      
      // Show success state
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: 'apartment',
        comment: '',
      });

      // Close modal after delay if in modal mode
      if (onClose) {
        setTimeout(onClose, 2000);
      }
    } catch (err) {
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Спасибо за заявку!</h3>
        <p className="text-gray-600">Мы свяжемся с вами в ближайшее время.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white ${isModal ? 'p-6 rounded-lg shadow-xl' : ''}`}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Ваше имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Телефон
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">
            Вид демонтажа
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
            <option value="apartment">Демонтаж квартиры</option>
            <option value="house">Демонтаж дома</option>
            <option value="walls">Демонтаж стен</option>
            <option value="plumbing">Демонтаж сантехники</option>
            <option value="waste">Вывоз мусора</option>
          </select>
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Комментарий
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          ></textarea>
        </div>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transform hover:scale-105 transition duration-200 flex items-center justify-center space-x-2 ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          <Send className="h-5 w-5" />
          <span>{isSubmitting ? 'Отправка...' : 'Отправить заявку'}</span>
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;