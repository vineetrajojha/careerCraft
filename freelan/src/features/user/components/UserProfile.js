import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../userSlice";
import { updateUserAsync } from "../userSlice";
import { useForm } from "react-hook-form";
import { signOutAsync } from "../../auth/authSlice";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaPlus, FaEdit, FaTrash, FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector(selectUserInfo);
  const [selectedEditIndex, setSelectedEditIndex] = useState(-1);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleEdit = (addressUpdate, index) => {
    const newUser = { ...userInfo, addresses: [...userInfo.addresses] }; // for shallow copy issue
    newUser.addresses.splice(index, 1, addressUpdate);
    dispatch(updateUserAsync(newUser));
    setSelectedEditIndex(-1);
  };
  
  const handleRemove = (e, index) => {
    const newUser = { ...userInfo, addresses: [...userInfo.addresses] }; // for shallow copy issue
    newUser.addresses.splice(index, 1);
    dispatch(updateUserAsync(newUser));
  };

  const handleEditForm = (index) => {
    setSelectedEditIndex(index);
    const address = userInfo.addresses[index];
    // Pre-fill the form with existing values
    setValue("name", address.name);
    setValue("email", address.email);
    setValue("phone", address.phone);
    setValue("street", address.street);
    setValue("city", address.city);
    setValue("state", address.state);
    setValue("pinCode", address.pinCode);
  };

  const handleAdd = (address) => {
    const newUser = { ...userInfo, addresses: [...(userInfo.addresses || []), address] };
    dispatch(updateUserAsync(newUser));
    setShowAddAddressForm(false);
    reset();
  };
  
  const handleSignOut = () => {
    dispatch(signOutAsync());
    navigate('/');
  };

  // Dummy function for FAQ scrolling in Navbar
  // const scrollToFaqSection = () => {
  //   navigate('/#faq-section');
  // };

  return (
    <>
     
      <div className="bg-gray-50 min-h-screen pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* User Info Section with Sign Out Button */}
          <div className="mt-8 border-t border-gray-200 px-4 py-6 sm:px-6 bg-[#F8E5D8] rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900 flex items-center">
                  <FaUser className="mr-3 text-[#E67E22]" />
                  {userInfo?.name ? userInfo.name : 'New User'}
                </h1>
                <h3 className="text-xl my-5 font-bold tracking-tight text-gray-700 flex items-center">
                  <FaEnvelope className="mr-3 text-[#E67E22]" />
                  {userInfo?.email}
                </h3>
                {userInfo?.role === 'admin' && (
                  <h3 className="text-xl my-5 font-bold tracking-tight text-[#E67E22] flex items-center">
                    <FaUser className="mr-3" />
                    Admin
                  </h3>
                )}
              </div>
              <button
                onClick={handleSignOut}
                className="bg-[#E67E22] text-white px-6 py-3 rounded-tr-[25px] rounded-bl-[25px] hover:bg-[#d67118] transition-colors duration-300 flex items-center"
              >
                <FaSignOutAlt className="mr-2" /> Sign Out
              </button>
            </div>
          </div>

          {/* Address Section */}
          <div className="mt-8 bg-white px-4 py-6 sm:px-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Your Addresses</h2>
              <button
                onClick={() => setShowAddAddressForm(!showAddAddressForm)}
                type="button"
                className="rounded-md bg-[#E67E22] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#d67118] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E67E22] flex items-center"
              >
                <FaPlus className="mr-2" /> Add New Address
              </button>
            </div>
            
            {showAddAddressForm ? (
              <form
                className="bg-white px-5 py-8 mt-6 border border-gray-200 rounded-lg shadow-md"
                noValidate
                onSubmit={handleSubmit((data) => handleAdd(data))}
              >
                <div className="space-y-8">
                  <div className="border-b border-gray-900/10 pb-8">
                    <h2 className="text-2xl font-semibold leading-7 text-gray-900 flex items-center">
                      <FaMapMarkerAlt className="mr-3 text-[#E67E22]" />
                      New Address
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Use a permanent address where you can receive mail.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Full name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            {...register('name', {
                              required: 'name is required',
                            })}
                            id="name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                          />
                          {errors.name && (
                            <p className="text-red-500">{errors.name.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            {...register('email', {
                              required: 'email is required',
                            })}
                            type="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                          />
                          {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Phone
                        </label>
                        <div className="mt-2">
                          <input
                            id="phone"
                            {...register('phone', {
                              required: 'phone is required',
                            })}
                            type="tel"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                          />
                          {errors.phone && (
                            <p className="text-red-500">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Street address
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            {...register('street', {
                              required: 'street is required',
                            })}
                            id="street"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                          />
                          {errors.street && (
                            <p className="text-red-500">
                              {errors.street.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          City
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            {...register('city', {
                              required: 'city is required',
                            })}
                            id="city"
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                          />
                          {errors.city && (
                            <p className="text-red-500">{errors.city.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          State / Province
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            {...register('state', {
                              required: 'state is required',
                            })}
                            id="state"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                          />
                          {errors.state && (
                            <p className="text-red-500">{errors.state.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="pinCode"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          ZIP / Postal code
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            {...register('pinCode', {
                              required: 'pinCode is required',
                            })}
                            id="pinCode"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                          />
                          {errors.pinCode && (
                            <p className="text-red-500">
                              {errors.pinCode.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-x-4">
                    <button
                      type="button"
                      onClick={() => setShowAddAddressForm(false)}
                      className="rounded-md px-3 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-[#E67E22] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#d67118] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E67E22]"
                    >
                      Add Address
                    </button>
                  </div>
                </div>
              </form>
            ) : null}

            <div className="mt-8 space-y-4">
              {userInfo?.addresses && userInfo.addresses.map((address, index) => (
                <div key={index}>
                  {selectedEditIndex === index ? (
                    <form
                      className="bg-white px-5 py-8 border border-gray-200 rounded-lg shadow-md"
                      noValidate
                      onSubmit={handleSubmit((data) => handleEdit(data, index))}
                    >
                      <div className="space-y-8">
                        <div className="border-b border-gray-900/10 pb-8">
                          <h2 className="text-2xl font-semibold leading-7 text-gray-900 flex items-center">
                            <FaEdit className="mr-3 text-[#E67E22]" />
                            Edit Address
                          </h2>

                          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Full name
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  {...register('name', {
                                    required: 'name is required',
                                  })}
                                  id="name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                                />
                                {errors.name && (
                                  <p className="text-red-500">
                                    {errors.name.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="sm:col-span-4">
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Email address
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  {...register('email', {
                                    required: 'email is required',
                                  })}
                                  type="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                                />
                                {errors.email && (
                                  <p className="text-red-500">
                                    {errors.email.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="sm:col-span-3">
                              <label
                                htmlFor="phone"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Phone
                              </label>
                              <div className="mt-2">
                                <input
                                  id="phone"
                                  {...register('phone', {
                                    required: 'phone is required',
                                  })}
                                  type="tel"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                                />
                                {errors.phone && (
                                  <p className="text-red-500">
                                    {errors.phone.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="col-span-full">
                              <label
                                htmlFor="street-address"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Street address
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  {...register('street', {
                                    required: 'street is required',
                                  })}
                                  id="street"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                                />
                                {errors.street && (
                                  <p className="text-red-500">
                                    {errors.street.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                City
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  {...register('city', {
                                    required: 'city is required',
                                  })}
                                  id="city"
                                  autoComplete="address-level2"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                                />
                                {errors.city && (
                                  <p className="text-red-500">
                                    {errors.city.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="state"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                State / Province
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  {...register('state', {
                                    required: 'state is required',
                                  })}
                                  id="state"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                                />
                                {errors.state && (
                                  <p className="text-red-500">
                                    {errors.state.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="sm:col-span-2">
                              <label
                                htmlFor="pinCode"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                ZIP / Postal code
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  {...register('pinCode', {
                                    required: 'pinCode is required',
                                  })}
                                  id="pinCode"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E67E22] sm:text-sm sm:leading-6"
                                />
                                {errors.pinCode && (
                                  <p className="text-red-500">
                                    {errors.pinCode.message}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-end gap-x-4">
                          <button
                            onClick={() => setSelectedEditIndex(-1)}
                            type="button"
                            className="rounded-md px-3 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="rounded-md bg-[#E67E22] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#d67118] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E67E22]"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="flex flex-col sm:flex-row justify-between gap-4 px-5 py-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
                      <div className="flex flex-col sm:flex-row gap-x-4 w-full">
                        <div className="sm:w-1/2">
                          <p className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
                            <FaUser className="mr-2 text-[#E67E22]" />
                            {address.name}
                          </p>
                          <p className="mt-2 text-xs leading-5 text-gray-600 flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-[#E67E22]" />
                            {address.street}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-gray-600 flex items-start">
                            <span className="mr-2 invisible">
                              <FaMapMarkerAlt className="text-[#E67E22]" />
                            </span>
                            {address.city}, {address.state} {address.pinCode}
                          </p>
                        </div>
                        
                        <div className="sm:w-1/2 mt-3 sm:mt-0">
                          <p className="text-sm leading-6 text-gray-900 flex items-center">
                            <FaPhone className="mr-2 text-[#E67E22]" />
                            {address.phone}
                          </p>
                          <p className="text-sm leading-6 text-gray-600 flex items-center mt-1">
                            <FaEnvelope className="mr-2 text-[#E67E22]" />
                            {address.email}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-2 justify-end">
                        <button
                          onClick={() => handleEditForm(index)}
                          type="button"
                          className="flex items-center text-sm font-medium text-[#E67E22] hover:text-[#d67118]"
                        >
                          <FaEdit className="mr-1" /> Edit
                        </button>
                        <button
                          onClick={(e) => handleRemove(e, index)}
                          type="button"
                          className="flex items-center text-sm font-medium text-red-600 hover:text-red-700"
                        >
                          <FaTrash className="mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {(!userInfo?.addresses || userInfo.addresses.length === 0) && (
                <div className="text-center py-8 bg-gray-50 border border-dashed border-gray-300 rounded-lg">
                  <FaMapMarkerAlt className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-semibold text-gray-900">No addresses</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Get started by adding a new address.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => setShowAddAddressForm(true)}
                      type="button"
                      className="inline-flex items-center rounded-md bg-[#E67E22] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#d67118]"
                    >
                      <FaPlus className="-ml-0.5 mr-1.5 h-4 w-4" />
                      Add Address
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}