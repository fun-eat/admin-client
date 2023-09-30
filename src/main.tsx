import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import CategoryProvider from './contexts/CategoryContext';
import App from './App';

import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </StrictMode>
);
