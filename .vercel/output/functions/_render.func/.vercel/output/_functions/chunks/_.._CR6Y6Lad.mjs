export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/__002Urqsc.mjs').then(n => n._);

export { page };
