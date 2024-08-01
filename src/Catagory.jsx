import React from 'react';

const Catagory = () => {
  const categories = [
    {
      id: 1,
      name: 'Appetizers',
      description: 'Start your meal off right with these delicious appetizers.',
      items: [
        {
          id: 1,
          title: 'Bruschetta',
          image: 'https://i.ibb.co/7GVL2mv/mariana-medvedeva-Fjry-Wdaq-GEc-unsplash.jpg',
        },
        {
          id: 2,
          title: 'Stuffed Mushrooms',
          image: 'https://i.ibb.co/ZgTPNTG/mari-liis-link-c-WU4a-Gioq-AY-unsplash.jpg',
        },
      ],
    },
    {
      id: 2,
      name: 'Main Courses',
      description: 'Hearty and satisfying main courses for every taste.',
      items: [
        {
          id: 1,
          title: 'Spaghetti Carbonara',
          image: 'https://i.ibb.co/nkqzLfR/rob-wicks-f-DLBn8-X-Il-U-unsplash.jpg',
        },
        {
          id: 2,
          title: 'Grilled Chicken',
          image: 'https://i.ibb.co/yqJTqmd/mark-deyoung-mjc-J0-FFgd-WI-unsplash.jpg',
        },
      ],
    },
    {
      id: 3,
      name: 'Desserts',
      description: 'Indulge in these sweet treats to end your meal on a high note.',
      items: [
        {
          id: 1,
          title: 'Chocolate Cake',
          image: 'https://i.ibb.co/XZxxXsr/american-heritage-chocolate-Id8-BO472-Tb-Y-unsplash.jpg',
        },
        {
          id: 2,
          title: 'Tiramisu',
          image: 'https://i.ibb.co/K5YR871/olga-petnyunene-ycs-VBakvv-Oo-unsplash.jpg',
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-16">Explore Delicious Categories</h1>
      <div className="space-y-12">
        {categories.map(category => (
          <div key={category.id} className="bg-white border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-blue-100 to-blue-300">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{category.name}</h2>
              <p className="text-lg text-gray-700">{category.description}</p>
            </div>
            <div className="p-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map(item => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-2xl shadow-md transition-transform transform hover:scale-105">
                    <img src={item.image} alt={item.title} className="w-full h-56 object-cover rounded-t-2xl" />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
