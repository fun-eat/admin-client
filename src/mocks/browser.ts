import { setupWorker } from 'msw';

import {
  categoryHandlers,
  productHandlers,
  reviewHandlers,
  loginHandlers,
  bannerHandlers,
} from './handlers';

export const worker = setupWorker(
  ...categoryHandlers,
  ...productHandlers,
  ...reviewHandlers,
  ...loginHandlers,
  ...bannerHandlers
);
