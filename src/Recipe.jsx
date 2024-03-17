// import { useEffect, useState } from "react";

// const Recipe = () => {
//     const [food, setFood] = useState([]);
    
//     useEffect(() => {
//         fetch('food.json')
//             .then(res => res.json())
//             .then(data => setFood(data))
//     }, []);

//     return (
//         <div>
//             <div className="m-10">
//                 <h3 className="text-3xl font-extrabold text-center">Our Recipes</h3>
//                 <p className="text-center">Our recipes are the best! Here are some popular dishes <br /> from our shop. We hope you enjoy them.</p>
//             </div>
//             <div className="flex">
//             <div className="grid grid-cols-2 p-10 w-[770px] gap-8">
//                 {food.map((recipe, index) => (
//                     <div key={index} className="border p-4 rounded-lg">
//                         <img src={recipe.recipe_image} alt={recipe.recipe_name} className="w-full h-64 object-cover m-4 rounded-lg" />
//                         <div className="mt-4">
//                             <h4 className="text-1xl m-4 font-semibold">{recipe.recipe_name}</h4>
//                             <p className="m-4 text-sm">{recipe.short_description}</p>
//                             <p className="mt-2">Ingredients:</p>
//                             <ul className="list-disc m-5 pl-4">
//                                 {recipe.ingredients.map((ingredient, index) => (
//                                     <li key={index}>{ingredient}</li>
//                                 ))}
//                             </ul>
//                           <div className="flex justify-between">
//                             <button className="border-none p-2"><i class="fa-regular fa-clock p-1"></i>{recipe.preparing_time}</button>
//                             <button className="border-none p-2"><i class="fas fa-fire"></i> {recipe.calories}</button>
//                           </div>
//                           <button className="impo bg-green-500 p-2 m-4 text-white rounded-md border-none ">Want to Cook</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="">
//              <div className="">
//                 <h2>Want to cook: 01</h2>
//                 <div className="">
//                 <table>
//                 <tr className="flex p-4 m-4 gap-20">
//                  <td>Name</td>
//                  <td>Time</td>
//                  <td>Calories</td>
//                 </tr>
//                 {food.map((recipe) => (
//                 <div className="all-here border-none hidden">
//                  <tr>
//                  <td className="p-6 w-20 gap-20">{recipe.recipe_name}</td>
//                  <td className="p-6 w-20 gap-20">{recipe.preparing_time}</td>
//                  <td className="p-6 w-20">{recipe.calories}</td>
//                  <td><button className="border-none rounded-md p-2 bg-green-500">Preparing</button></td>
//                 </tr>
//                </div>
//                 ))};
//                 </table>
//                 </div>
//              </div>
//              <div className="">
                
//              </div>
//             </div>
//             </div>
//         </div>
//     );
// };
// export default Recipe;












// import { useEffect, useState } from "react";

// const Recipe = () => {
//     const [food, setFood] = useState([]);
//     const [showAllHere, setShowAllHere] = useState(false);
    
//     useEffect(() => {
//         fetch('food.json')
//             .then(res => res.json())
//             .then(data => setFood(data))
//     }, []);

//     const toggleAllHere = () => {
//         setShowAllHere(!showAllHere);

//     };

//     return (
//         <div>
//             <div className="m-10">
//                 <h3 className="text-3xl font-extrabold text-center">Our Recipes</h3>
//                 <p className="text-center">Our recipes are the best! Here are some popular dishes <br /> from our shop. We hope you enjoy them.</p>
//             </div>
//             <div className="flex">
//                 <div className="grid grid-cols-2 p-10 w-[770px] gap-8">
//                     {food.map((recipe, index) => (
//                         <div key={index} className="border p-4 rounded-lg">
//                             <img src={recipe.recipe_image} alt={recipe.recipe_name} className="w-full h-64 object-cover m-4 rounded-lg" />
//                             <div className="mt-4">
//                                 <h4 className="text-1xl m-4 font-semibold">{recipe.recipe_name}</h4>
//                                 <p className="m-4 text-sm">{recipe.short_description}</p>
//                                 <p className="mt-2">Ingredients:</p>
//                                 <ul className="list-disc m-5 pl-4">
//                                     {recipe.ingredients.map((ingredient, index) => (
//                                         <li key={index}>{ingredient}</li>
//                                     ))}
//                                 </ul>
//                                 <div className="flex justify-between">
//                                     <button className="border-none p-2"><i className="fa-regular fa-clock p-1"></i>{recipe.preparing_time}</button>
//                                     <button className="border-none p-2"><i className="fas fa-fire"></i> {recipe.calories}</button>
//                                 </div>
//                                 <button className="impo bg-green-500 p-2 m-4 text-white rounded-md border-none" onClick={toggleAllHere}>Want to Cook</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="">
//                     <div className="">
//                         <h2>Want to cook: 01</h2>
//                         <div >
//                             <table>
//                                 <thead>
//                                     <tr className="flex p-4 m-4 gap-20">
//                                         <td>Name</td>
//                                         <td>Time</td>
//                                         <td>Calories</td>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {food.map((recipe, index) => (
//                                         <tr key={index} className={showAllHere ? "all-here" : "hidden"}>
//                                             <td className="p-6 w-20 gap-20">{recipe.recipe_name}</td>
//                                             <td className="p-6 w-20 gap-20">{recipe.preparing_time}</td>
//                                             <td className="p-6 w-20 gap-20">{recipe.calories}</td>
//                                             <td><button className="rounded-md p-2 m-6 bg-green-500 border-none">Preparing</button></td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                     <div className=""></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Recipe;





import { useEffect, useState } from "react";

const Recipe = () => {
    const [food, setFood] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    
    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFood(data))
    }, []);

    const toggleRecipeDetails = (recipe) => {
        setSelectedRecipe(recipe === selectedRecipe ? null : recipe);
    };

    return (
        <div>
            <div className="m-10">
                <h3 className="text-3xl font-extrabold text-center">Our Recipes</h3>
                <p className="text-center">Our recipes are the best! Here are some popular dishes <br /> from our shop. We hope you enjoy them.</p>
            </div>
            <div className="flex">
                <div className="grid grid-cols-2 p-10 w-[770px] gap-8">
                    {food.map((recipe, index) => (
                        <div key={index} className="border p-4 rounded-lg">
                            <img src={recipe.recipe_image} alt={recipe.recipe_name} className="w-full h-64 object-cover m-4 rounded-lg" />
                            <div className="mt-4">
                                <h4 className="text-1xl m-4 font-semibold">{recipe.recipe_name}</h4>
                                <p className="m-4 text-sm">{recipe.short_description}</p>
                                <p className="mt-2">Ingredients:</p>
                                <ul className="list-disc m-5 pl-4">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                                <div className="flex justify-between">
                                    <button className="border-none p-2"><i className="fa-regular fa-clock p-1"></i>{recipe.preparing_time}</button>
                                    <button className="border-none p-2"><i className="fas fa-fire"></i> {recipe.calories}</button>
                                </div>
                                <button className="impo bg-green-500 p-2 m-4 text-white rounded-md border-none" onClick={() => toggleRecipeDetails(recipe)}>Want to Cook</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="">
                    <div className="">
                        <h2 className="p-4 text-3xl text-center font-semibold">Want to cook: 00</h2>
                        <table className="p-4 m-4">
                            <th className="p-12 gap-10">Name</th>
                            <th className="p-12 gap-10">Time</th>
                            <th className="p-12 gap-10">Calories</th>
                        </table>
                        {selectedRecipe && (
                            <div>
                                <table className="p-4 m-4">
                                    <td className="p-6 gap-10"><p>{selectedRecipe.recipe_name}</p></td>
                                    <td className="p-6 gap-10"><p>{selectedRecipe.preparing_time}</p></td>
                                    <td className="p-8 gap-10"><p>{selectedRecipe.calories}</p></td>
                                    <td><td><button className="rounded-md p-2 m-6 bg-green-500 border-none">Preparing</button></td></td>
                                </table>
                            </div>
                        )}
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;


