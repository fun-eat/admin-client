import { PropsWithChildren, createContext, useState } from 'react';
import { ReviewRequestQuery } from '../../../apis/review';

type ReviewSearchQueryAction = (query: ReviewRequestQuery) => void;

export const ReviewSearchQueryValueContext =
  createContext<ReviewRequestQuery | null>(null);
export const ReviewSearchQueryActionContext =
  createContext<ReviewSearchQueryAction | null>(null);

const ReviewSearchQueryProvider = ({ children }: PropsWithChildren) => {
  const [reviewSearchQuery, setReviewSearchQuery] =
    useState<ReviewRequestQuery>({
      id: null,
      totalElements: null,
    });

  const handleValueChange = (query: ReviewRequestQuery) => {
    setReviewSearchQuery((prev) => ({
      ...prev,
      ...query,
    }));
  };

  return (
    <ReviewSearchQueryActionContext.Provider value={handleValueChange}>
      <ReviewSearchQueryValueContext.Provider value={reviewSearchQuery}>
        {children}
      </ReviewSearchQueryValueContext.Provider>
    </ReviewSearchQueryActionContext.Provider>
  );
};

export default ReviewSearchQueryProvider;
