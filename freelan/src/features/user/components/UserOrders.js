import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchLoggedInUserOrderAsync,
  selectUserInfoStatus,
  selectUserOrders,
} from '../userSlice';
import { Grid } from 'react-loader-spinner';
import { FaBox } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function UserOrders() {
  const dispatch = useDispatch();
  const orders = useSelector(selectUserOrders);
  const status = useSelector(selectUserInfoStatus);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync());
  }, [dispatch]);


  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `₹${price}`;
    }
  
    if (typeof price === 'string' && price.includes('₹')) {
      return price;
    }
    return `₹${price}`;
  };

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-64">
        <Grid
          height="80"
          width="80"
          color="#C65D34"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen font-outfit">
        <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaBox className="mx-auto h-16 w-16 text-[#C65D34] mb-4" />
            <h2 className="text-3xl font-bold tracking-tight text-[#9C4A1A] sm:text-4xl">
              No orders yet
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Looks like you haven't made any purchases yet.
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
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#9C4A1A] mb-8">Your Orders</h1>
        
        {orders.map((order) => (
          <div key={order.id} className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-5 bg-[#F8E5D8]">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#9C4A1A]">
                  Order #{order.id}
                </h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === 'delivered' ? 'bg-green-100 text-green-800' : 
                  order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                  order.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                  'bg-blue-100 text-blue-800'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-[#4A3F35] mb-4">Items</h3>
              <ul className="divide-y divide-gray-200">
                {order.items.map((item) => (
                  <li key={item.id} className="py-4 flex">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.thumbnail || item.product.image}
                        alt={item.product.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between">
                          <h4 className="text-base font-medium text-[#9C4A1A]">
                            {item.product.title}
                          </h4>
                          <p className="font-medium text-[#C65D34]">
                            {formatPrice(item.product.discountPrice || item.product.price)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.product.brand || "Workshop"}
                        </p>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        Qty: {item.quantity}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="px-6 py-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-gray-900">{formatPrice(order.totalAmount)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Total Items</span>
                <span className="font-medium text-gray-900">{order.totalItems} items</span>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-gray-50">
              <h3 className="text-lg font-medium text-[#4A3F35] mb-3">Shipping Details</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-base font-semibold text-[#9C4A1A]">{order.selectedAddress.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{order.selectedAddress.street}</p>
                    <p className="text-sm text-gray-600">{order.selectedAddress.city}, {order.selectedAddress.state}</p>
                    <p className="text-sm text-gray-600">PIN: {order.selectedAddress.pinCode}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Phone:</span> {order.selectedAddress.phone}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">Email:</span> {order.selectedAddress.email || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {order.status === 'pending' && (
              <div className="px-6 py-4 bg-[#F8E5D8]">
                <div className="text-center">
                  <p className="text-sm text-[#9C4A1A]">
                    Your order is being processed. You will receive an update once it's confirmed.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}