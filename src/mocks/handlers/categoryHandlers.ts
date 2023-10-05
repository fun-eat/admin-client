import { rest } from 'msw';

import categories from '../data/categories.json';

export const categoryHandlers = [
  rest.get('/api/admin/categories', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(categories));
  }),
];
