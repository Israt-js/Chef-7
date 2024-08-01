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
      const result = await signInUser(email, password);
      toast.success('Successfully registered!');
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
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      toast.success('Successfully logged in with Google!');
      navigate(location?.state ? location.state : '/');
    } catch (error) {
      console.error('error', error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-success text-white">Login</button>
            </div>
          </form>
          <ToastContainer />
          {loginError && <p className="text-red-600 text-xl">{loginError}</p>}
          <div className="mt-4">
            <button className='btn w-full mb-2' onClick={handleLogInWithPopup}> 
              <FaGoogle /> Google login
            </button>
          </div>
          <p className='text-2xl font-medium text-center p-5'>
            Don't have an account? <Link to={'/register'}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
