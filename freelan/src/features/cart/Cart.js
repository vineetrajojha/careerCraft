import { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteItemFromCartAsync,
  selectCartLoaded,
  selectCartStatus,
  selectItems,
  updateCartAsync,
} from './cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Modal from '../common/Modal';
import { FaShoppingBasket } from 'react-icons/fa';

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector(selectItems);
  const status = useSelector(selectCartStatus);
  const cartLoaded = useSelector(selectCartLoaded);
  const [openModal, setOpenModal] = useState(null);
  const [redirectedToHome, setRedirectedToHome] = useState(false);

  // Use useEffect for navigation instead of Navigate component
  useEffect(() => {
    if (!items.length && cartLoaded && !redirectedToHome) {
      setRedirectedToHome(true);
      // No need to navigate immediately, show the empty cart UI
    }
  }, [items.length, cartLoaded]);

  const totalAmount = items.reduce(
    (amount, item) => {
      // Check if item.product exists and has valid price
      if (!item.product) return amount;
      
      // Get the price, handling both string and number formats
      let price = 0;
      if (item.product.discountPrice) {
        price = typeof item.product.discountPrice === 'string' 
          ? parseInt(item.product.discountPrice.replace(/[^\d]/g, ''))
          : item.product.discountPrice;
      } else if (item.product.price) {
        price = typeof item.product.price === 'string'
          ? parseInt(item.product.price.replace(/[^\d]/g, ''))
          : item.product.price;
      }
      
      return price * item.quantity + amount;
    },
    0
  );
  
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ id: item.id, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  // Format price correctly
  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `₹${price}`;
    }
    // If it's already a string with currency symbol
    if (typeof price === 'string' && price.includes('₹')) {
      return price;
    }
    return `₹${price}`;
  };

  // If cart is empty, show empty cart UI
  if (!items.length && cartLoaded) {
    return (
      <div className="bg-gray-50 min-h-screen font-outfit">
        <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaShoppingBasket className="mx-auto h-16 w-16 text-[#C65D34] mb-4" />
            <h2 className="text-3xl font-bold tracking-tight text-[#9C4A1A] sm:text-4xl">
              Your cart is empty
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Looks like you haven't added any workshops to your cart yet.
            </p>
            <div className="mt-8">
              <Link to="/home">
                <button className="bg-[#C65D34] text-white py-2 px-6 rounded-full hover:bg-[#B54D24] transition duration-300">
                  Browse Workshops
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-outfit">
      <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#9C4A1A] mb-8">Your Bag</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow-md p-4">
              {items.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.product?.thumbnail || item.product?.image || '/products/default-product.png'}
                      alt={item.product?.title || 'Product'}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-lg font-medium text-gray-900">
                        <h3 className="text-[#9C4A1A]">{item.product?.title || 'Unnamed Product'}</h3>
                        <p className="ml-4 text-[#C65D34]">
                          {formatPrice(item.product?.discountPrice || item.product?.price)}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.product?.brand || "Workshop"}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <label
                          htmlFor={`quantity-${item.id}`}
                          className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                        >
                          Quantity
                        </label>
                        <select
                          id={`quantity-${item.id}`}
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
                          title={`Delete ${item.product?.title || 'Unnamed Product'}`}
                          message="Are you sure you want to delete this item from your cart?"
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
            <h2 className="text-lg font-bold text-[#9C4A1A] border-b pb-4">Summary</h2>
            <div className="flex justify-between my-4 text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{formatPrice(totalAmount)}</p>
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#C65D34] focus:ring-[#C65D34] sm:text-sm"
                placeholder="Enter promo code"
              />
            </div>
            <div className="flex justify-between my-4 text-lg font-bold text-gray-900">
              <p>Total</p>
              <p>{formatPrice(totalAmount)}</p>
            </div>
            <button 
              className="w-full bg-[#C65D34] text-white py-3 rounded-md shadow-sm hover:bg-[#B54D24] transition duration-300"
              onClick={handleCheckout}
            >
              Pay Securely
            </button>
          </div>
        </div>

        {/* Continue Shopping Section */}
        <div className="mt-8 text-center">
          <Link to="/home">
            <button
              type="button"
              className="font-medium text-[#C65D34] hover:text-[#B54D24]"
            >
              Continue Shopping <span aria-hidden="true">→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}