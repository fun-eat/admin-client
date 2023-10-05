import { rest } from 'msw';

import products from '../data/products.json';

export const productHandlers = [
  rest.get('/api/admin/products', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),
];
