import { createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import AuthLayout from './Layout/AuthLayout';
import Home from './Home';
import Products from './Products';
import Reviews from './Reviews';
import Banners from './Banners';

import { ROUTE } from '../constants';
import PageProvider from '../contexts/PageContext';
import ProductSearchQueryProvider from './Products/contexts/ProductSearchQueryContext';
import ReviewSearchQueryProvider from './Reviews/contexts/ReviewSearchQueryContext';

const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <Home />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: ROUTE.HOME,
    element: (
      <AuthLayout>
        <Layout />
      </AuthLayout>
    ),
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: ROUTE.PRODUCT,
        element: (
          <ProductSearchQueryProvider>
            <PageProvider>
              <Products />
            </PageProvider>
          </ProductSearchQueryProvider>
        ),
      },
      {
        path: ROUTE.REVIEW,
        element: (
          <ReviewSearchQueryProvider>
            <PageProvider>
              <Reviews />
            </PageProvider>
          </ReviewSearchQueryProvider>
        ),
      },
      { path: ROUTE.BANNER, element: <Banners /> },
    ],
  },
]);

export default router;
