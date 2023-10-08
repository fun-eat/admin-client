import { useMutation } from '@tanstack/react-query';

import { deleteReview } from '../../apis/review';

export const useReviewDeleteMutation = () => {
  return useMutation({
    mutationFn: (reviewId: number) => deleteReview(reviewId),
  });
};
