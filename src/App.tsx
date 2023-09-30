import Home from './pages/Home';

import { useGetCategories } from './hooks';

const App = () => {
  useGetCategories();

  return <Home />;
};

export default App;
