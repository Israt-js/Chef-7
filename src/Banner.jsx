import React from 'react';
import OtherH from './OtherH';

const Banner = () => {
  return (
    <div className="w-full">
      <div className="banner w-full h-[500px] rounded-xl mt-9 mb-5 bg-cover bg-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-xl"></div>
        <div className="relative z-10 pt-40 text-center px-4 lg:px-0">
          <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 shadow-lg">
            Discover an Exceptional Cooking Class Tailored for You!
          </h3>
          <p className="text-md lg:text-lg text-gray-300 mb-8 shadow-lg">
            Master essential cooking skills, explore diverse cuisines, and solve culinary challenges to become an exceptional chef. Join us to elevate your culinary journey!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-cyan-300 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
              Explore Now
            </button>
            <button className="border-2 border-gray-200 text-gray-200 py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 hover:text-gray-900 transition duration-300">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
      <OtherH />
    </div>
  );
};

export default Banner;
