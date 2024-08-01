import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="">
            {/* <div className="flex justify-evenly">
                <div className="">
                   <img src="HK-removebg-preview.png" alt="hk" />
                   <h2 className="text-3xl font-extrabold">Recipes</h2>
                </div>
              <div className="flex text-left">
               <ul className="flex pt-3">
               <li><Link to={'/'} className="p-4 text-gray-500">Home</Link></li>
               <li><Link to={'/recipe'} className="p-4 text-gray-500">Recipes</Link></li>
               <li><Link to={'/about'} className="p-4 text-gray-500">About</Link></li>
               </ul>
               <button className="bg-gray-100 rounded-3xl w-60 text-start p-4">
                   <i className="fa-solid fa-magnifying-glass"></i>Search
               </button>
              </div>
            </div> */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                <a className="btn btn-ghost"><img className="h-32 w-32" src="/src/HK-removebg-preview.png" alt="" /></a>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                  </div>
               <div className="navbar-center">
                 <div className="dropdown">
                   <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       className="h-5 w-5"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor">
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                         d="M4 6h16M4 12h8m-8 6h16" />
                     </svg>
                   </div>
                   <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       <li><Link to={'/'} className="p-4 text-gray-500">Home</Link></li>
                       <li><Link to={'/recipe'} className="p-4 text-gray-500">Recipes</Link></li>
                       <li><Link to={'/about'} className="p-4 text-gray-500">About</Link></li>
                   </ul>
                 </div>
               </div>
               <div className="navbar-center hidden lg:flex">
                 <ul className="menu menu-horizontal px-1">
                   <li><Link to={'/'} className="p-4 text-gray-500">Home</Link></li>
                   <li><Link to={'/recipe'} className="p-4 text-gray-500">Recipes</Link></li>
                   <li><Link to={'/about'} className="p-4 text-gray-500">About</Link></li>
                 </ul>
                </div>
                </div>
        </div>
    );
}

export default Nav;
