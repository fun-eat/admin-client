import { createBrowserRouter } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';

import PageProvider from './Home/contexts/PageContext';
import ProductSearchQueryProvider from './Home/contexts/ProductSearchQueryContext';

const router = createBrowserRouter([
  {
    path: '/',
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
    ],
  },
]);

export default router;
