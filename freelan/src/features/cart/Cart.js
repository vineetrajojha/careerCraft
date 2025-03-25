import { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteItemFromCartAsync,
  selectCartLoaded,
  selectCartStatus,
  selectItems,
  updateCartAsync,
} from './cartSlice';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Modal from '../common/Modal';

export default function Cart() {
  const dispatch = useDispatch();

  const items = useSelector(selectItems);
  const status = useSelector(selectCartStatus);
  const cartLoaded = useSelector(selectCartLoaded);
  const [openModal, setOpenModal] = useState(null);

  const totalAmount = items.reduce(
    (amount, item) => item.product.discountPrice * item.quantity + amount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ id: item.id, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
  };

  return (
    <>
      {!items.length && cartLoaded && <Navigate to="/home" replace={true}></Navigate>}

      <div className="bg-gray-50 min-h-screen">
        <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Bag</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <ul className="divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.thumbnail}
                        alt={item.product.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-lg font-medium text-gray-900">
                          <h3>{item.product.title}</h3>
                          <p className="ml-4">₹{item.product.discountPrice}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.product.brand}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="text-gray-500">
                          <label
                            htmlFor="quantity"
                            className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                          >
                            Quantity
                          </label>
                          <select
                            onChange={(e) => handleQuantity(e, item)}
                            value={item.quantity}
                            className="border border-gray-300 rounded-md p-1"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>

                        <div className="flex">
                          <Modal
                            title={`Delete ${item.product.title}`}
                            message="Are you sure you want to delete this Cart item?"
                            dangerOption="Delete"
                            cancelOption="Cancel"
                            dangerAction={(e) => handleRemove(e, item.id)}
                            cancelAction={() => setOpenModal(null)}
                            showModal={openModal === item.id}
                          ></Modal>
                          <button
                            onClick={(e) => {
                              setOpenModal(item.id);
                            }}
                            type="button"
                            className="font-medium text-red-600 hover:text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Summary Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-bold text-gray-900 border-b pb-4">Summary</h2>
              <div className="flex justify-between my-4 text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>₹{totalAmount}</p>
              </div>
              <div className="flex justify-between my-4 text-base font-medium text-gray-900">
                <p>Total Items</p>
                <p>{totalItems} items</p>
              </div>
              <div className="my-4">
                <label
                  htmlFor="promo-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Do you have a Promo Code?
                </label>
                <input
                  type="text"
                  id="promo-code"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter promo code"
                />
              </div>
              <div className="flex justify-between my-4 text-lg font-bold text-gray-900">
                <p>Total</p>
                <p>₹{totalAmount}</p>
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-md shadow-sm hover:bg-indigo-700">
                Pay Securely
              </button>
            </div>
          </div>

          {/* Continue Shopping Section */}
          <div className="mt-8 text-center">
            <Link to="/home">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping <span aria-hidden="true">→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}