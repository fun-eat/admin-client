import { setupWorker } from 'msw';

import { categoryHandlers, productHandlers, reviewHandlers } from './handlers';

export const worker = setupWorker(
  ...categoryHandlers,
  ...productHandlers,
  ...reviewHandlers
);
