export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/kitchen-sink_tPdfWePJ.mjs').then(n => n.k);

export { page };
