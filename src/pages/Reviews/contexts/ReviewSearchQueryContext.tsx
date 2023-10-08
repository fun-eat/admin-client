import { PropsWithChildren, createContext, useState } from 'react';
import { ReviewRequestQuery } from '../../../apis/review';

interface ReviewSearchQueryAction {
  handleValueChange: (query: ReviewRequestQuery) => void;
  resetSearchQuery: () => void;
}

export const ReviewSearchQueryValueContext =
  createContext<ReviewRequestQuery | null>(null);
export const ReviewSearchQueryActionContext =
  createContext<ReviewSearchQueryAction | null>(null);

const INIT_REVIEW_SEARCH_QUERY: ReviewRequestQuery = {
  id: null,
  totalElements: null,
  prePage: 0,
};

const ReviewSearchQueryProvider = ({ children }: PropsWithChildren) => {
  const [reviewSearchQuery, setReviewSearchQuery] =
    useState<ReviewRequestQuery>(INIT_REVIEW_SEARCH_QUERY);

  const handleValueChange = (query: ReviewRequestQuery) => {
    setReviewSearchQuery((prev) => ({
      ...prev,
      ...query,
    }));
  };

  const resetSearchQuery = () => {
    setReviewSearchQuery(INIT_REVIEW_SEARCH_QUERY);
  };

  const action = {
    handleValueChange,
    resetSearchQuery,
  };

  return (
    <ReviewSearchQueryActionContext.Provider value={action}>
      <ReviewSearchQueryValueContext.Provider value={reviewSearchQuery}>
        {children}
      </ReviewSearchQueryValueContext.Provider>
    </ReviewSearchQueryActionContext.Provider>
  );
};

export default ReviewSearchQueryProvider;
