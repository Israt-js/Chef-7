import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav flex justify-evenly p-8">
            <span className='nav'></span>
            <h2 className="text-3xl font-extrabold">Recipe Calories</h2>
            <ul className="flex ">
                <li><Link to={'/'} className="p-4 text-gray-500">Home</Link></li>
                <li><Link to={'/recipe'} className="p-4 text-gray-500">Recipes</Link></li>
                <li><Link to={'/about'} className="p-4 text-gray-500">About</Link></li>
            </ul>
            <button className="bg-gray-100 rounded-3xl w-60 text-start p-4">
                <i className="fa-solid fa-magnifying-glass"></i>Search
            </button>
            <i className="fa-regular fa-circle-user p-5 bg-green-400 rounded-full"></i>
        </div>
    );
}

export default Nav;
