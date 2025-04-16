import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import { resetPasswordAsync, selectError, selectPasswordReset } from '../authSlice';

export default function ResetPassword() {
  const passwordReset = useSelector(selectPasswordReset);
  const error = useSelector(selectError)
  const query = new URLSearchParams(window.location.search);
  const token = query.get('token')
  const email = query.get('email')

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex min-h-screen">
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
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your new password below.
          </p>
        </div>

        {(email && token) ? (
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form
                noValidate
                onSubmit={handleSubmit((data) => {
                  dispatch(resetPasswordAsync({email, token, password:data.password}))
                })}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    New Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      {...register('password', {
                        required: 'Password is required',
                        pattern: {
                          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                          message: `- at least 8 characters\n
                          - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                          - Can contain special characters`,
                        },
                      })}
                      type="password"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#E1A16D] focus:outline-none focus:ring-[#E1A16D] sm:text-sm"
                    />
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirmPassword"
                      {...register('confirmPassword', {
                        required: 'Confirm password is required',
                        validate: (value, formValues) =>
                          value === formValues.password || 'Passwords do not match',
                      })}
                      type="password"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#E1A16D] focus:outline-none focus:ring-[#E1A16D] sm:text-sm"
                    />
                    {errors.confirmPassword && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>

                {passwordReset && (
                  <div className="rounded-md bg-green-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">
                          Password successfully reset!
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">
                          {error}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-[#E1A16D] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#d89359] focus:outline-none focus:ring-2 focus:ring-[#E1A16D] focus:ring-offset-2"
                  >
                    Reset Password
                  </button>
                </div>

                <div className="text-center">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-[#E1A16D] hover:text-[#d89359]"
                  >
                    Back to login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">Invalid Reset Link</h3>
                <p className="mt-2 text-sm text-gray-500">
                  This password reset link is invalid or has expired. Please request a new one.
                </p>
                <div className="mt-6">
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-[#E1A16D] hover:text-[#d89359]"
                  >
                    Request new reset link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Side - Image */}
      <div
        className="hidden lg:block lg:w-1/3 bg-cover bg-center relative rounded-l-[20px]"
        style={{ backgroundImage: "url('/loginpage-image.svg')" }}
      ></div>
    </div>
  );
}
