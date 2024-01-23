/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CS8lcJDg.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$LayoutStacked } from './404_LwW1Ytqy.mjs';
import { h as $$FormSignUp } from './kitchen-sink_uFJC2v4U.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$SignUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignUp;
  return renderTemplate`<!-- Register -->${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]"> ${renderComponent($$result2, "FormSignUp", $$FormSignUp, {})} </div> ` })}`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/app/authentication/sign-up.astro", void 0);

const $$file = "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/app/authentication/sign-up.astro";
const $$url = "/app/authentication/sign-up";

export { $$SignUp as default, $$file as file, $$url as url };
