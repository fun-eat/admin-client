import { createBrowserRouter } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';

import PageProvider from './Home/contexts/PageContext';
import ProductSearchQueryProvider from './Home/contexts/ProductSearchQueryContext';
import { ROUTE } from '../constants';
import Reviews from './Reviews';

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
        element: <Reviews />,
      },
    ],
  },
]);

export default router;