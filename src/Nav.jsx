const Nav = () => {
    return(
    <div className="nav flex justify-evenly p-6">
        <h2 className="text-3xl font-extrabold">Recipe Calories</h2>
        <ul className="flex ">
            <li className="p-4 text-gray-500">Home</li>
            <li className="p-4 text-gray-500">Recipes</li>
            <li className="p-4 text-gray-500">About</li>
            <li className="p-4 text-gray-500">Search</li>
        </ul>
        <button className="bg-gray-100 rounded-3xl w-60 text-start p-4"><i class="fa-solid fa-magnifying-glass"></i>Search</button>
        <i class="fa-regular fa-circle-user p-5 bg-green-400 rounded-full"></i>
    </div>
    )
}
export default Nav;
