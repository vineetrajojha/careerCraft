import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useState, useEffect } from 'react';

import { selectLoggedInUser, createUserAsync, selectError } from '../authSlice';

export default function Signup() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const error = useSelector(selectError);
  const [emailExists, setEmailExists] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Instead of checking with login API, we'll handle the error from createUserAsync
      // If the email exists, the backend will return an error
      dispatch(createUserAsync(data))
        .unwrap()
        .then(() => {
          // Success - email doesn't exist
          setEmailExists(false);
        })
        .catch((err) => {
          // Check if error is due to email already existing
          if (err.message && err.message.includes('email already exists')) {
            setEmailExists(true);
            setError('email', {
              type: 'manual',
              message: 'Email already exists. Please login instead.',
            });
          } else {
            console.error('Error during signup:', err);
          }
        });
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <>
      {user && <Navigate to="/home" replace={true}></Navigate>}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto rounded"
            src="/logo1.png"
            alt="Your Company"
          />
          <h2 className="mt-4 text-center text-2xl md:font-outfit font-outfit md:font-bold leading-9 tracking-tight text-gray-900">
            Create a<span className='text-[#9C4A1A]'> New</span>  Account
          </h2>
        </div>

        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm border-2 p-5 bg-red-500"
        style={{
  backdropFilter: 'blur(10px)', // Frosted glass blur effect
  backgroundColor: 'rgba(255, 255, 255, 0.15)', // Softer, more transparent white
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 4px 15px rgba(0, 0, 0, 0.1)', // Stronger layered shadow
  border: '1px solid rgba(255, 255, 255, 0.2)', // Slightly softer border
  borderRadius: '16px', // More rounded corners
}}>
          <form
            noValidate
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
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
                  <p className="mt-2 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
                {emailExists && (
                  <p className="mt-2 text-sm text-red-600">
                    This email is already registered. Please{' '}
                    <Link to="/login" className="text-[#E1A16D] hover:text-[#d89359]">
                      login
                    </Link>{' '}
                    instead.
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block sm:text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register('password', {
                    required: 'password is required',
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: `- at least 8 characters\n
                      - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                      - Can contain special characters`,
                    },
                  })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E1A16D] sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block sm:text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  {...register('confirmPassword', {
                    required: 'confirm password is required',
                    validate: (value, formValues) =>
                      value === formValues.password || 'password not matching',
                  })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E1A16D] sm:text-sm sm:leading-6"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <div>
            
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#E1A16D] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#d89359] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E1A16D]"
              >
                Sign Up
              </button>
               
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a Member?{' '}
            <Link
              to="/login"
              className="font-semibold leading-6 text-[#E1A16D] hover:text-[#d89359]"
            >
              Log In
            </Link>
          </p>
        </div>
        <hr className='bg-black h-[1px] mt-[10%]'></hr>
      </div>
    </>
  );
}
