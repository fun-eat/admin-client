import { useContext } from 'react';
import { PageActionContext, PageValueContext } from '../contexts';

export const usePageActionContext = () => {
  const action = useContext(PageActionContext);

  if (!action) {
    throw new Error('usePageActionContext must be used within a PageProvider');
  }

  return action;
};

export const usePageValueContext = () => {
  const value = useContext(PageValueContext);

  if (!value) {
    throw new Error('usePageValueContext must be used within a PageProvider');
  }

  return value;
};
