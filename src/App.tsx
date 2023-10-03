import Home from './pages/Home';

import PageProvider from './pages/Home/contexts/PageContext';
import ProductSearchQueryProvider from './pages/Home/contexts/ProductSearchQueryContext';

const App = () => {
  return (
    <ProductSearchQueryProvider>
      <PageProvider>
        <Home />
      </PageProvider>
    </ProductSearchQueryProvider>
  );
};

export default App;
