import React, { useState } from 'react';
import { Calculator, Check } from 'lucide-react';

const Pricing = () => {
  const [area, setArea] = useState('');
  const [service, setService] = useState('apartment');

  const priceList = [
    {
      service: 'Демонтаж квартиры',
      price: 'от 1500 ₽/м²',
      includes: [
        'Демонтаж стен и перегородок',
        'Демонтаж напольных покрытий',
        'Демонтаж потолков',
        'Вывоз мусора',
      ],
    },
    {
      service: 'Демонтаж частного дома',
      price: 'от 2000 ₽/м²',
      includes: [
        'Полный демонтаж конструкций',
        'Демонтаж фундамента',
        'Расчистка участка',
        'Вывоз мусора',
      ],
    },
    {
      service: 'Демонтаж стен',
      price: 'от 800 ₽/м²',
      includes: [
        'Демонтаж перегородок',
        'Расширение проемов',
        'Усиление проемов',
        'Вывоз мусора',
      ],
    },
  ];

  const calculatePrice = () => {
    const basePrice = {
      apartment: 1500,
      house: 2000,
      walls: 800,
    }[service];

    return area ? `${(Number(area) * basePrice).toLocaleString()} ₽` : '0 ₽';
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Цены на демонтажные работы</h1>

        {/* Price Calculator */}
        <div className="bg-gray-100 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Calculator className="h-6 w-6 mr-2 text-red-600" />
            Калькулятор стоимости
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Вид работ
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              >
                <option value="apartment">Демонтаж квартиры</option>
                <option value="house">Демонтаж частного дома</option>
                <option value="walls">Демонтаж стен</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Площадь (м²)
              </label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                placeholder="Введите площадь"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Примерная стоимость
              </label>
              <div className="text-2xl font-bold text-red-600">
                {calculatePrice()}
              </div>
            </div>
          </div>
        </div>

        {/* Price List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {priceList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-4">{item.service}</h3>
              <p className="text-3xl font-bold text-red-600 mb-6">{item.price}</p>
              <ul className="space-y-3">
                {item.includes.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Дополнительная информация</h2>
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <ul className="space-y-4">
              <li>
                <strong>Минимальный заказ:</strong> от 20 000 ₽
              </li>
              <li>
                <strong>Выезд оценщика:</strong> бесплатно в пределах МКАД
              </li>
              <li>
                <strong>Скидки:</strong> предоставляются при больших объемах работ
              </li>
              <li>
                <strong>Оплата:</strong> наличный и безналичный расчет
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;