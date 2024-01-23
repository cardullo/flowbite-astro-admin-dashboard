export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/sidebar_a_sgcFTx.mjs').then(n => n.a);

export { page };
