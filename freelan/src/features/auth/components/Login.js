import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectLoggedInUser } from '../authSlice';
import { Link, Navigate } from 'react-router-dom';
import { loginUserAsync } from '../authSlice';
import { useForm } from 'react-hook-form';


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
    <>
    
      {user && <Navigate to="/home" replace={true}></Navigate>}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-200" 
      style={{ backgroundImage: "url('https://www.freepik.com/free-photos-vectors/smart-background')",
     }} >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <Link to= "/">
        <img
            className="mx-auto h-10 w-auto rounded"
            src="/carrercraftlogo.jpg"
            alt="Your Company"
          />
        </Link>
          
          <h2 className="text-center mt-4  text-2xl md:font-semibold  font-roboto leading-9 tracking-tight text-gray-900">
            Log in to <span className='text-blue-900'>your</span> account.
          </h2>
        </div>

        <div
  className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm border-2 p-5 bg-red-200"
  style={{
  backdropFilter: 'blur(10px)', // Frosted glass blur effect
  backgroundColor: 'rgba(255, 255, 255, 0.15)', // Softer, more transparent white
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 4px 15px rgba(0, 0, 0, 0.1)', // Stronger layered shadow
  border: '1px solid rgba(255, 255, 255, 0.2)', // Slightly softer border
  borderRadius: '16px', // More rounded corners
}}

>
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
                className="block sm:text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
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
  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
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
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register('password', {
                    required: 'password is required',
                  })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              {error && <p className="text-red-500">{error || error.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
