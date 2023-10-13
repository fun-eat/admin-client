import { rest } from 'msw';

import { LoginRequestBody } from '../../apis/login';

export const loginHandlers = [
  rest.post('/api/admin/login', (req, res, ctx) => {
    const { id, key } = req.body as LoginRequestBody;

    if (id === 'admin' && key === '1234') {
      return res(ctx.status(200), ctx.cookie('mockSessionId', 'abc'));
    }

    return res(ctx.json({ code: 401, message: 'Unauthorized - funeat' }));
  }),

  rest.get('/api/admin/logged-check', (req, res, ctx) => {
    const { mockSessionId } = req.cookies;

    if (mockSessionId === 'abc') {
      return res(ctx.status(200), ctx.json(true));
    }

    return res(ctx.status(200), ctx.json(false));
  }),
];
