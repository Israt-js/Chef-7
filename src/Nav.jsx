import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthPro';

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log('Successfully logged out'))
      .catch(error => {
        console.error('Logout error:', error);
      });
  };

  return (
    <div className="w-full bg-cyan-700 text-black shadow-md">
      <div className="navbar max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost p-0">
            <img className="h-16 w-16 lg:h-24 lg:w-24" src="/src/HK-removebg-preview.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4">
            <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link to="/recipe" className="text-white hover:text-gray-300">Recipes</Link></li>
            <li><Link to="/catagory" className="text-white hover:text-gray-300">Categories</Link></li>
            <li><Link to="/register" className="text-white hover:text-gray-300">Register</Link></li>
            <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
          </ul>
        </div>

        {/* User Profile & Authentication */}
        <div className="navbar-end">
          <ul className="flex items-center space-x-4">
            {user ? (
              <>
                <li><img src={user.photoURL} alt="User" title={user.displayName} className="rounded-full h-8 w-8 mt-2 mr-2" /></li>
                <li className="btn bg-cyan-400 text-white hover:bg-cyan-500"><button onClick={handleLogOut}>Log Out</button></li>
              </>
            ) : (
              <li><Link className="btn bg-blue-500 text-white hover:bg-blue-600" to="/login">Login</Link></li>
            )}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="dropdown lg:hidden relative">
          <button className="btn btn-ghost text-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul className="menu menu-sm dropdown-content bg-black text-white rounded-box mt-3 w-52 p-2 shadow z-50 right-0 absolute">
            <li><Link to="/" className="p-2 hover:text-gray-300">Home</Link></li>
            <li><Link to="/recipe" className="p-2 hover:text-gray-300">Recipes</Link></li>
            <li><Link to="/catagory" className="p-2 hover:text-gray-300">Categories</Link></li>
            <li><Link to="/register" className="p-2 hover:text-gray-300">Register</Link></li>
            <li><Link to="/about" className="p-2 hover:text-gray-300">About</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
