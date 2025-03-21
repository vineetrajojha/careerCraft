import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectLoggedInUser } from '../authSlice';
import { Link, Navigate } from 'react-router-dom';
import { loginUserAsync } from '../authSlice';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Login() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const user = useSelector(selectLoggedInUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className=" flex min-h-screen">
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
              onSubmit={handleSubmit((data) => {
                dispatch(
                  loginUserAsync({ email: data.email, password: data.password })
                );
              })}
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

                {/* <div>
                   <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Login with Facebook</span>
                    <FaFacebook className="h-5 w-5" />
                  </a> 
                </div> */}

                {/* <div>
                  <a
                    href="#"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Login with LinkedIn</span>
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </div> */}
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
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center  relative rounded-l-[20px]" style={{ backgroundImage: "url('/loginpage-image.svg')" }}>
      </div>
    </div>
  );
}