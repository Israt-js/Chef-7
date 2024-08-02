import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from './AuthPro';
import auth from './firebase.config';

const Login = () => {
  const { signInUser } = useContext(AuthContext) || {};
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInUser(email, password);
      toast.success('Successfully logged in!');
      e.target.reset();
      navigate(location?.state ? location.state : '/');
    } catch (error) {
      setLoginError(error.message);
      toast.error(error.message);
    }
  };

  const handleLogInWithPopup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success('Successfully logged in with Google!');
      navigate(location?.state ? location.state : '/');
    } catch (error) {
      console.error('error', error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-center text-gray-900">Login Now</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-cyan-300 focus:border-cyan-300 sm:text-sm" 
              required 
            />
          </div>
          <div>
            <button type="submit" className="w-full py-2 text-white bg-cyan-300 rounded-md hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Login
            </button>
          </div>
        </form>
        {loginError && <p className="mt-4 text-red-600 text-center">{loginError}</p>}
        <div className="flex items-center justify-center mt-4">
          <button onClick={handleLogInWithPopup} className="flex items-center justify-center w-full py-2 space-x-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <FaGoogle className="w-5 h-5" />
            <span>Login with Google</span>
          </button>
        </div>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
