import { createBrowserRouter } from 'react-router-dom';

import Products from './Products';
import Layout from './Layout';
import Reviews from './Reviews';

import { ROUTE } from '../constants';
import PageProvider from '../contexts/PageContext';
import ProductSearchQueryProvider from './Products/contexts/ProductSearchQueryContext';
import ReviewSearchQueryProvider from './Reviews/contexts/ReviewSearchQueryContext';

const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <Layout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
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
    ],
  },
]);

export default router;
