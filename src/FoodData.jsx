import React from 'react';

const foodData = [
  {
    category: 'Fruits',
    items: ['Apple', 'Banana', 'Orange', 'Strawberry'],
  },
  {
    category: 'Vegetables',
    items: ['Carrot', 'Broccoli', 'Spinach', 'Bell Pepper'],
  },
  {
    category: 'Desserts',
    items: ['Cake', 'Ice Cream', 'Cookies', 'Brownies'],
  },
  {
    category: 'Drinks',
    items: ['Water', 'Juice', 'Soda', 'Coffee'],
  },
];

const FoodData = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-8">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800">Delicious Food Categories</h1>
      <div className="max-w-3xl mx-auto">
        {foodData.map((category, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl mb-8 p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{category.category}</h2>
            <ul className="list-disc list-inside space-y-3">
              {category.items.map((item, idx) => (
                <li key={idx} className="text-gray-700 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodData;
