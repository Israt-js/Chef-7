import React, { useState, useEffect } from 'react';

// Example data
const mockRecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "https://via.placeholder.com/400x300.png?text=Spaghetti+Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Parmesan cheese", "Pancetta", "Garlic"],
    instructions: "Cook spaghetti. In a separate pan, cook pancetta with garlic. Mix eggs and cheese, then combine with spaghetti and pancetta."
  },
  {
    id: 2,
    title: "Chicken Alfredo",
    image: "https://via.placeholder.com/400x300.png?text=Chicken+Alfredo",
    ingredients: ["Fettuccine", "Chicken breast", "Heavy cream", "Butter", "Parmesan cheese"],
    instructions: "Cook fettuccine. Sauté chicken in butter. Add cream and cheese to make the sauce, then mix with fettuccine and chicken."
  },
  {
    id: 3,
    title: "Greek Salad",
    image: "https://via.placeholder.com/400x300.png?text=Greek+Salad",
    ingredients: ["Cucumber", "Tomatoes", "Red onion", "Olives", "Feta cheese"],
    instructions: "Chop vegetables and mix with olives and feta. Dress with olive oil and lemon juice."
  }
];

const ORecipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      setRecipes(mockRecipes);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-100 to-blue-200 min-h-screen p-10">
      <div className="container mx-auto">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-16 text-center">
          Delicious Recipes
        </h1>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map(recipe => (
            <div key={recipe.id} className="relative bg-white rounded-lg shadow-2xl overflow-hidden transition-transform transform hover:scale-105 border-4 border-teal-300">
              <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110" />
              <div className="p-8 relative z-10">
                <h2 className="text-3xl font-bold text-teal-800 mb-4">{recipe.title}</h2>
                <div className="bg-teal-50 rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-semibold text-teal-600 mb-2">Ingredients</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-teal-50 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-teal-600 mb-2">Instructions</h3>
                  <p className="text-gray-700">{recipe.instructions}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-transparent to-transparent opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ORecipe;
