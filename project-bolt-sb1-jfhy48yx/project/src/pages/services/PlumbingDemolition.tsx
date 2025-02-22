import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';

const PlumbingDemolition = () => {
  const services = [
    'Демонтаж труб',
    'Демонтаж сантехники',
    'Демонтаж радиаторов',
    'Демонтаж полотенцесушителей',
    'Демонтаж водонагревателей',
    'Вывоз строительного мусора',
  ];

  const process = [
    {
      title: 'Оценка',
      description: 'Оценка состояния сантехники и разработка плана демонтажа',
    },
    {
      title: 'Подготовка',
      description: 'Отключение воды и защита помещения',
    },
    {
      title: 'Демонтаж',
      description: 'Аккуратный демонтаж с сохранением коммуникаций',
    },
    {
      title: 'Уборка',
      description: 'Вывоз мусора и уборка помещения',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Демонтаж сантехники</h1>

        {/* Hero Section */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000"
            alt="Демонтаж сантехники"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="text-white max-w-2xl mx-8">
              <h2 className="text-3xl font-bold mb-4">
                Профессиональный демонтаж сантехники
              </h2>
              <p className="text-lg">
                Аккуратный демонтаж с сохранением целостности коммуникаций
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Наши услуги</h2>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Важная информация</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold">Перед началом работ</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Отключите водоснабжение</li>
                <li>• Слейте воду из системы</li>
                <li>• Обеспечьте доступ к коммуникациям</li>
                <li>• Подготовьте помещение</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Процесс работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              >
                <div className="text-2xl font-bold text-red-600 mb-3">{index + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Получите бесплатную консультацию
          </h2>
          <p className="text-gray-600 mb-6">
            Наши специалисты ответят на все ваши вопросы и рассчитают стоимость работ
          </p>
          <a
            href="tel:+74951234567"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            Позвонить сейчас
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlumbingDemolition;