import { setupWorker } from 'msw';

import {
  categoryHandlers,
  productHandlers,
  reviewHandlers,
  loginHandlers,
} from './handlers';

export const worker = setupWorker(
  ...categoryHandlers,
  ...productHandlers,
  ...reviewHandlers,
  ...loginHandlers
);
