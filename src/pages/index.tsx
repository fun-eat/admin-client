import { createBrowserRouter } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';
import Reviews from './Reviews';

import { ROUTE } from '../constants';
import PageProvider from '../contexts/PageContext';
import ProductSearchQueryProvider from './Home/contexts/ProductSearchQueryContext';
import ReviewSearchQueryProvider from './Reviews/contexts/ReviewSearchQueryContext';

const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProductSearchQueryProvider>
            <PageProvider>
              <Home />
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
