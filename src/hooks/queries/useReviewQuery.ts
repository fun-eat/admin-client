import { useQuery } from '@tanstack/react-query';

import { ReviewRequestQuery, getReviews } from '../../apis/review';

export const useReviewQuery = (queries?: ReviewRequestQuery) => {
  return useQuery({
    queryKey: ['reviews', queries],
    queryFn: () => getReviews(queries),
    keepPreviousData: true,
  });
};
