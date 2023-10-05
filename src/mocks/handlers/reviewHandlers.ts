import { rest } from 'msw';

import reviews from '../data/reviews.json';

export const reviewHandlers = [
  rest.get('/api/admin/reviews', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(reviews));
  }),
];
