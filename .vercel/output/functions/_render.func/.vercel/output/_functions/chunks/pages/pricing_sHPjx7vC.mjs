/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_CS8lcJDg.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$LayoutStacked } from './404_LwW1Ytqy.mjs';
import { a as $$PricingPlan } from './kitchen-sink_uFJC2v4U.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PricingPlan", $$PricingPlan, {})} ` })}`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/pages/pricing.astro", void 0);

const $$file = "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/pages/pricing.astro";
const $$url = "/pages/pricing";

export { $$Pricing as default, $$file as file, $$url as url };
