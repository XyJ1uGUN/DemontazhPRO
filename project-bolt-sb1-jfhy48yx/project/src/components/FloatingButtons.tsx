import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  const whatsappNumber = '79264991550';
  const phoneNumber = '+79264991550';

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-110 transition duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
      
      <motion.a
        href={`tel:${phoneNumber}`}
        className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transform hover:scale-110 transition duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;