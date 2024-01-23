/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_CS8lcJDg.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$LayoutSidebar } from './dashboard_DqpCxciQ.mjs';
import { b as $$CrudProducts } from './kitchen-sink_tPdfWePJ.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Products;
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CrudProducts", $$CrudProducts, {})} ` })}`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/crud/products.astro", void 0);

const $$file = "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/crud/products.astro";
const $$url = "/crud/products";

export { $$Products as default, $$file as file, $$url as url };
