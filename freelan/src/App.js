import './App.css';
import Home from './pages/Home';
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ViewAllProducts from './pages/ViewAllProducts';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkAuthAsync,
  selectLoggedInUser,
  selectUserChecked,
} from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminHome from './pages/AdminHome';
import AdminProductDetailPage from './pages/AdminProductDetailPage';
import AdminProductFormPage from './pages/AdminProductFormPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import ResetPasswordPage from './pages/ResetPasswordPage';
import About from './pages/About';
import ContactUs from "./pages/ContactUs";
import ProductList from './features/product/components/ProductList';
import FaqSection from "./pages/FaqSection"
import MentorsPage from './pages/MentorsPage';
// ```javascript
// function App() {
//   const dispatch = useDispatch();
//   const user = useSelector(selectLoggedInUser);
//   const userChecked = useSelector(selectUserChecked);

//   useEffect(() => {
//     dispatch(checkAuthAsync());
//   }, [dispatch]);

//   useEffect(() => {
//     if (user) {
//       dispatch(fetchItemsByUserIdAsync());
//       dispatch(fetchLoggedInUserAsync());
//     }
//   }, [dispatch, user]);

//   return (
//     <div className="App">
//       {userChecked && (
//         <Provider template={AlertTemplate} {...options}>
//           <RouterProvider router={router} />
//         </Provider>
//       )}
//     </div>
//   );
// }

// export default App;
// ```

const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};

const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,

  },
  {
    path : '/faqSection',
    element : <FaqSection></FaqSection>,

  },
  {
    path: '/home',
    element: (
      <Protected>
      <Home></Home>

      </Protected>
     
        
      
    ),
  },
  {
    path: '/productList',
    element: (
      <Protected>
      <ProductList></ProductList>

      </Protected>
     
        
      
    ),
  },
  {
    path: '/admin',
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },
  {
    path : '/about',
    element : <About></About>

  },
  {
    path : '/mentors',
    element : <MentorsPage/>

  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  {
    path: '/contact',
    element : <ContactUs></ContactUs>
  },
  {
    path: '/cart',
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: '/checkout',
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: '/product-detail/:id',
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
  {
    path: '/admin/product-detail/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/orders',
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form/edit/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/order-success/:id',
    element: (
      <Protected>
        <OrderSuccessPage></OrderSuccessPage>{' '}
      </Protected>
    ),
  },
  {
    path: '/my-orders',
    element: (
      <Protected>
        <UserOrdersPage></UserOrdersPage>{' '}
      </Protected>
    ),
  },
  {
    path: '/profile',
    element: (
      <Protected>
        <UserProfilePage></UserProfilePage>{' '}
      </Protected>
    ),
  },
  
  {
    path: '/logout',
    element: <Logout></Logout>,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage></ResetPasswordPage>,
  },
  {
    path: '/view-all-products',
    element: <ViewAllProducts />,
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const userChecked = useSelector(selectUserChecked);

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync());
      // we can get req.user by token on backend so no need to give in front-end
      dispatch(fetchLoggedInUserAsync());
    }
  }, [dispatch, user]);

  return (
    <>
      <div className="App">
        {userChecked && (
          <Provider template={AlertTemplate} {...options}>
            <RouterProvider router={router} />
          </Provider>
        )}
        {/* Link must be inside the Provider */}
      </div>
    </>
  );
}

export default App;
