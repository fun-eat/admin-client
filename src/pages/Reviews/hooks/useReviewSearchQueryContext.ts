import { useContext } from 'react';

import {
  ReviewSearchQueryActionContext,
  ReviewSearchQueryValueContext,
} from '../contexts';

export const useReviewSearchQueryActionContext = () => {
  const action = useContext(ReviewSearchQueryActionContext);

  if (!action) {
    throw new Error(
      'useReviewSearchQueryActionContext must be used within a ReviewSearchQueryProvider'
    );
  }

  return action;
};

export const useReviewSearchQueryValueContext = () => {
  const value = useContext(ReviewSearchQueryValueContext);

  if (!value) {
    throw new Error(
      'useReviewSearchQueryValueContext must be used within a ReviewSearchQueryProvider'
    );
  }

  return value;
};
