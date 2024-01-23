export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/kitchen-sink_uFJC2v4U.mjs').then(n => n.k);

export { page };
