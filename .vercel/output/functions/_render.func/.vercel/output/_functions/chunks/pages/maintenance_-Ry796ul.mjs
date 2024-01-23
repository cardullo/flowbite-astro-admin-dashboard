/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_CS8lcJDg.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$LayoutStacked } from './404_oVBWOn3m.mjs';
import { $ as $$ErrorMaintenance } from './kitchen-sink_tPdfWePJ.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Maintenance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Maintenance;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorMaintenance", $$ErrorMaintenance, {})} ` })}`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/pages/maintenance.astro", void 0);

const $$file = "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/pages/maintenance.astro";
const $$url = "/pages/maintenance";

export { $$Maintenance as default, $$file as file, $$url as url };
