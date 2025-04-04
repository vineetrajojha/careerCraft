import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../../features/common/Footer';
import Navbar from '../../../features/common/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  fetchBrandsAsync,
  fetchCategoriesAsync,
  fetchProductsByFiltersAsync,
  selectAllProducts,
  // selectBrands,
  // selectCategories,
  selectProductListStatus,
  selectTotalItems,
} from '../productSlice';
// import { Dialog, Disclosure,  Transition } from '@headlessui/react';
// import { XMarkIcon } from '@heroicons/react/24/outline';
// import {
 
//   StarIcon,
// } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
// import {
 
//   MinusIcon,
//   PlusIcon,
  
// } from '@heroicons/react/20/solid';
import { ITEMS_PER_PAGE } from '../../../app/constants';
import Pagination from '../../common/Pagination';
import { Grid } from 'react-loader-spinner';
import { addToCartAsync } from '../../cart/cartSlice';
import { selectLoggedInUser } from '../../auth/authSlice';
import { toast } from 'react-toastify';

// const sortOptions = [
//   { name: 'Best Rating', sort: 'rating', order: 'desc', current: false },
//   { name: 'Price: Low to High', sort: 'discountPrice', order: 'asc', current: false },
//   { name: 'Price: High to Low', sort: 'discountPrice', order: 'desc', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const location = useLocation();
  const isProductRoute = location.pathname === "/productList";
  // const brands = useSelector(selectBrands);
  // const categories = useSelector(selectCategories);
  const totalItems = useSelector(selectTotalItems);
  const status = useSelector(selectProductListStatus);
  // const filters = [
  //   {
  //     id: 'category',
  //     name: 'Category',
  //     options: categories,
  //   },
  //   {
  //     id: 'brand',
  //     name: 'Brands',
  //     options: brands,
  //   },
  // ];

  // const [filter, setFilter] = useState({});
  // const [sort, setSort] = useState({});
  // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);

  // const handleFilter = (e, section, option) => {
  //   console.log(e.target.checked);
  //   const newFilter = { ...filter };
  //   if (e.target.checked) {
  //     if (newFilter[section.id]) {
  //       newFilter[section.id].push(option.value);
  //     } else {
  //       newFilter[section.id] = [option.value];
  //     }
  //   } else {
  //     const index = newFilter[section.id].findIndex(
  //       (el) => el === option.value
  //     );
  //     newFilter[section.id].splice(index, 1);
  //   }
  //   console.log({ newFilter });

  //   setFilter(newFilter);
  // };

  // const handleSort = (e, option) => {
  //   const sort = { _sort: option.sort, _order: option.order };
  //   console.log({ sort });
  //   setSort(sort);
  // };

  const handlePage = (page) => {
    console.log({ page });
    setPage(page);
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchProductsByFiltersAsync({ pagination }));
  }, [dispatch, page]);

  useEffect(() => {
    setPage(1);
  }, [totalItems]);

  useEffect(() => {
    dispatch(fetchBrandsAsync());
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <div>
        {/* <MobileFilter
          handleFilter={handleFilter}
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          filters={filters}
        ></MobileFilter> */}
       

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-[#9C4A1A]">
              Our Products
            </h1>
            <Link to="/home">
              {isProductRoute && (
                <div className="text-right bg-[#C65D34] px-6 py-2 rounded-full font-semibold text-white hover:bg-[#B54D24] transition duration-300">
                  Go back
                </div>
              )}
            </Link>
           

            <div className="flex items-center">
              {/* <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <p
                              onClick={(e) => handleSort(e, option)}
                              className={classNames(
                                option.current
                                  ? 'font-medium text-gray-900'
                                  : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </p>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu> */}

              {/* <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button> */}
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* <DesktopFilter
                handleFilter={handleFilter}
                filters={filters}
              ></DesktopFilter> */}
              {/* Product grid */}
              <div className="lg:col-span-3">
                <ProductGrid products={products} status={status}></ProductGrid>
              </div>
              {/* Product grid end */}
            </div>
          </section>

          {/* section of product and filters ends */}
          <div className="flex justify-center pb-8">
            <Pagination
              page={page}
              setPage={setPage}
              handlePage={handlePage}
              totalItems={totalItems}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

// function MobileFilter({
//   mobileFiltersOpen,
//   setMobileFiltersOpen,
//   handleFilter,
//   filters,
// }) {
//   return (
//     <Transition.Root show={mobileFiltersOpen} as={Fragment}>
//       <Dialog
//         as="div"
//         className="relative z-40 lg:hidden"
//         onClose={setMobileFiltersOpen}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="transition-opacity ease-linear duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="transition-opacity ease-linear duration-300"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-black bg-opacity-25" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-40 flex">
//           <Transition.Child
//             as={Fragment}
//             enter="transition ease-in-out duration-300 transform"
//             enterFrom="translate-x-full"
//             enterTo="translate-x-0"
//             leave="transition ease-in-out duration-300 transform"
//             leaveFrom="translate-x-0"
//             leaveTo="translate-x-full"
//           >
//             <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//               <div className="flex items-center justify-between px-4">
//                 <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//                 <button
//                   type="button"
//                   className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                   onClick={() => setMobileFiltersOpen(false)}
//                 >
//                   <span className="sr-only">Close menu</span>
//                   <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>
//               </div>

//               {/* Filters */}
//               <form className="mt-4 border-t border-gray-200">
//                 {filters.map((section) => (
//                   <Disclosure
//                     as="div"
//                     key={section.id}
//                     className="border-t border-gray-200 px-4 py-6"
//                   >
//                     {({ open }) => (
//                       <>
//                         <h3 className="-mx-2 -my-3 flow-root">
//                           <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                             <span className="font-medium text-gray-900">
//                               {section.name}
//                             </span>
//                             <span className="ml-6 flex items-center">
//                               {open ? (
//                                 <MinusIcon
//                                   className="h-5 w-5"
//                                   aria-hidden="true"
//                                 />
//                               ) : (
//                                 <PlusIcon
//                                   className="h-5 w-5"
//                                   aria-hidden="true"
//                                 />
//                               )}
//                             </span>
//                           </Disclosure.Button>
//                         </h3>
//                         <Disclosure.Panel className="pt-6">
//                           <div className="space-y-6">
//                             {section.options.map((option, optionIdx) => (
//                               <div
//                                 key={option.value}
//                                 className="flex items-center"
//                               >
//                                 <input
//                                   id={`filter-mobile-${section.id}-${optionIdx}`}
//                                   name={`${section.id}[]`}
//                                   defaultValue={option.value}
//                                   type="checkbox"
//                                   defaultChecked={option.checked}
//                                   onChange={(e) =>
//                                     handleFilter(e, section, option)
//                                   }
//                                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                 />
//                                 <label
//                                   htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                                   className="ml-3 min-w-0 flex-1 text-gray-500"
//                                 >
//                                   {option.label}
//                                 </label>
//                               </div>
//                             ))}
//                           </div>
//                         </Disclosure.Panel>
//                       </>
//                     )}
//                   </Disclosure>
//                 ))}
//               </form>
//             </Dialog.Panel>
//           </Transition.Child>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }

// function DesktopFilter({ handleFilter, filters }) {
//   return (
//     <form className="hidden lg:block">
//       {filters.map((section) => (
//         <Disclosure
//           as="div"
//           key={section.id}
//           className="border-b border-gray-200 py-6"
//         >
//           {({ open }) => (
//             <>
//               <h3 className="-my-3 flow-root">
//                 <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
//                   <span className="font-medium text-gray-900">
//                     {section.name}
//                   </span>
//                   <span className="ml-6 flex items-center">
//                     {open ? (
//                       <MinusIcon className="h-5 w-5" aria-hidden="true" />
//                     ) : (
//                       <PlusIcon className="h-5 w-5" aria-hidden="true" />
//                     )}
//                   </span>
//                 </Disclosure.Button>
//               </h3>
//               <Disclosure.Panel className="pt-6">
//                 <div className="space-y-4">
//                   {section.options.map((option, optionIdx) => (
//                     <div key={option.value} className="flex items-center">
//                       <input
//                         id={`filter-${section.id}-${optionIdx}`}
//                         name={`${section.id}[]`}
//                         defaultValue={option.value}
//                         type="checkbox"
//                         defaultChecked={option.checked}
//                         onChange={(e) => handleFilter(e, section, option)}
//                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                       />
//                       <label
//                         htmlFor={`filter-${section.id}-${optionIdx}`}
//                         className="ml-3 text-sm text-gray-600"
//                       >
//                         {option.label}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </Disclosure.Panel>
//             </>
//           )}
//         </Disclosure>
//       ))}
//     </form>
//   );
// }

function ProductGrid({ products, status }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectLoggedInUser);

  const handleBuyNow = (e, product) => {
    e.preventDefault(); // Prevent Link navigation
    if (!user) {
      toast.info("Please login to purchase this item");
      navigate('/login', { 
        state: { 
          from: '/productList',
          buyNow: product 
        } 
      });
    } else {
      dispatch(addToCartAsync({ 
        item: {
          product: product.id, 
          quantity: 1 
        },
        alert: toast
      })).unwrap()
        .then(() => {
          navigate('/checkout');
        })
        .catch((error) => {
          console.error('Failed to process purchase:', error);
          toast.error("Failed to process your purchase. Please try again.");
        });
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {status === 'loading' ? (
            <Grid
              height="80"
              width="80"
              color="rgb(79, 70, 229)"
              ariaLabel="grid-loading"
              radius="12.5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : null}
          {products.map((product) => (
            <Link to={`/product-detail/${product.id}`} key={product.id}>
              <div className="group relative bg-[#E6A06C] rounded-2xl p-4 shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl mb-4">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-white text-sm mb-4 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">
                        ₹{product.discountPrice || product.price}
                      </p>
                      {product.discountPrice && (
                        <p className="text-sm line-through font-medium text-white/70">
                          ₹{product.price}
                        </p>
                      )}
                    </div>
                    <button 
                      onClick={(e) => handleBuyNow(e, product)}
                      className="bg-[#C65D34] text-white px-6 py-2 rounded-full text-sm hover:bg-[#B54D24] transition duration-300"
                    >
                      Buy now
                    </button>
                  </div>
                </div>
                {product.deleted && (
                  <div className="absolute top-2 right-2">
                    <p className="text-sm text-red-400 bg-white px-2 py-1 rounded-full">Product deleted</p>
                  </div>
                )}
                {product.stock <= 0 && (
                  <div className="absolute top-2 right-2">
                    <p className="text-sm text-red-400 bg-white px-2 py-1 rounded-full">Out of stock</p>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
