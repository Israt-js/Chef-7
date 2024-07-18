import React from 'react';

const About = () => {
  return (
    <div className="about p-6">
      <h2 className="text-3xl font-extrabold">About Recipe Calories</h2>
      <section className="mt-4">
        <h3 className="text-2xl font-bold">Our Mission</h3>
        <p className="text-gray-700 mt-2">
          Welcome to Recipe Calories, your go-to app for all things culinary! 
          Here, you'll find a wide variety of recipes with detailed calorie counts 
          to help you make informed choices about your meals. Whether you're looking 
          for healthy options or indulgent treats, we've got something for everyone.
        </p>
        <p className="text-gray-700 mt-2">
          Our mission is to make cooking easy, enjoyable, and nutritious. We believe 
          that knowing the nutritional value of your food is crucial for maintaining 
          a balanced diet. That's why each recipe includes comprehensive nutritional 
          information, including calories, macronutrients, and more.
        </p>
      </section>
      
      <section className="mt-8">
        <h3 className="text-2xl font-bold">Our Team</h3>
        <p className="text-gray-700 mt-2">
          We are a passionate group of food enthusiasts, nutritionists, and developers 
          dedicated to bringing you the best recipes with accurate nutritional information. 
          Our team works tirelessly to test and refine each recipe to ensure it meets our 
          high standards of taste and healthfulness.
        </p>
      </section>
      
      <section className="mt-8">
        <h3 className="text-2xl font-bold">Our History</h3>
        <p className="text-gray-700 mt-2">
          Recipe Calories was founded in 2020 with the goal of making healthy eating 
          accessible and enjoyable for everyone. Since then, we've grown into a thriving 
          community of home cooks and food lovers who share a common passion for good food 
          and good health.
        </p>
      </section>
      
      <section className="mt-8">
        <h3 className="text-2xl font-bold">Future Plans</h3>
        <p className="text-gray-700 mt-2">
          We are constantly working on new features and improvements to make Recipe Calories 
          even better. In the near future, you can look forward to more recipes, enhanced 
          nutritional tracking tools, and a more interactive community experience. Stay tuned!
        </p>
      </section>
    </div>
  );
}

export default About;

