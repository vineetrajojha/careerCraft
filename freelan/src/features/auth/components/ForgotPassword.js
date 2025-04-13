import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function ForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // TODO: Implement password reset logic
    console.log('Reset password for:', data.email);
    setEmailSent(true);
  };

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
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {emailSent ? (
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900">
                  Check your email
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  We've sent a password reset link to your email address.
                </p>
                <div className="mt-6">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-[#E1A16D] hover:text-[#d89359]"
                  >
                    Return to login
                  </Link>
                </div>
              </div>
            ) : (
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
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-[#E1A16D] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#d89359] focus:outline-none focus:ring-2 focus:ring-[#E1A16D] focus:ring-offset-2"
                  >
                    Send reset link
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
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div
        className="hidden lg:block lg:w-1/3 bg-cover bg-center relative rounded-l-[20px]"
        style={{ backgroundImage: "url('/loginpage-image.svg')" }}
      ></div>
    </div>
  );
}
