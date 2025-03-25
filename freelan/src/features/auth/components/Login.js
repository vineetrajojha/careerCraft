import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectLoggedInUser } from '../authSlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { loginUserAsync } from '../authSlice';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);
  const user = useSelector(selectLoggedInUser);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const [countdown, setCountdown] = useState(3);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle login success animation and countdown
  useEffect(() => {
    let timerId;
    let countdownId;
    
    if (showSuccessAnimation) {
      // Redirect to home after 3 seconds
      timerId = setTimeout(() => {
        navigate('/');
      }, 3000);
      
      // Update countdown every second
      countdownId = setInterval(() => {
        setCountdown(prev => (prev > 1 ? prev - 1 : prev));
      }, 1000);
    }
    
    return () => {
      clearTimeout(timerId);
      clearInterval(countdownId);
    };
  }, [showSuccessAnimation, navigate]);

  // If user is already logged in and we're not showing the animation,
  // prepare to show animation
  useEffect(() => {
    if (user && !showSuccessAnimation) {
      setShowSuccessAnimation(true);
    }
  }, [user, showSuccessAnimation]);

  const onSubmit = async (data) => {
    await dispatch(
      loginUserAsync({ email: data.email, password: data.password })
    );
    // Animation will be triggered by the user effect above when Redux state updates
  };

  // Login success animation component
  const LoginSuccessAnimation = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="3" 
              d="M5 13l4 4L19 7"
              className="checkmark"
            ></path>
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Login Successful!</h2>
        <p className="text-gray-600 mb-6">Welcome back to CareerCraft</p>
        
        <div className="relative w-full h-2 bg-gray-200 rounded-full mb-4">
          <div 
            className="absolute left-0 top-0 h-full bg-green-500 rounded-full progress-bar"
            style={{animation: 'countdown 3s linear forwards'}}
          ></div>
        </div>
        
        <p className="text-sm text-gray-500 mb-4">Redirecting to homepage in {countdown} seconds...</p>
        
        <button
          onClick={() => navigate('/')}
          className="w-full py-2 px-4 bg-[#E1A16D] text-white rounded-md hover:bg-[#d89359] transition-colors"
        >
          Go to Home Now
        </button>
      </div>
    </div>
  );

  // Add necessary CSS for animations
  useEffect(() => {
    // Create a style element
    const style = document.createElement('style');
    // Add the CSS for animations
    style.textContent = `
      @keyframes countdown {
        from { width: 100%; }
        to { width: 0%; }
      }
      
      .checkmark {
        stroke-dasharray: 80;
        stroke-dashoffset: 80;
        animation: draw 0.8s ease-in-out forwards;
      }
      
      @keyframes draw {
        to {
          stroke-dashoffset: 0;
        }
      }
    `;
    // Append to document head
    document.head.appendChild(style);
    
    // Clean up on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Show success animation if login successful */}
      {showSuccessAnimation && <LoginSuccessAnimation />}

      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/">
            <img
              className="mx-auto h-12 w-auto"
              src="/logo1.png"
              alt="Career Craft" 
            />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                        message: 'Email is not valid',
                      },
                    })}
                    type="email"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#E1A16D] focus:outline-none focus:ring-[#E1A16D] sm:text-sm"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    type="password"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#E1A16D] focus:outline-none focus:ring-[#E1A16D] sm:text-sm"
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
                  )}
                </div>
              </div>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-[#E1A16D] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#d89359] focus:outline-none focus:ring-2 focus:ring-[#E1A16D] focus:ring-offset-2"
                >
                  Log in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">or login with</span>
                </div>
              </div>

              <div className="mt-6 grid">
                <div>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Login with Google</span>
                    <FaGoogle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="font-medium text-[#E1A16D] hover:text-[#E1A16D]"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/3 bg-cover bg-center relative rounded-l-[20px]" style={{ backgroundImage: "url('/loginpage-image.svg')" }}>
      </div>
    </div>
  );
}