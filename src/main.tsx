import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import CategoryProvider from './contexts/CategoryContext';
import App from './App';

import './styles/index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </QueryClientProvider>
  </StrictMode>
);
