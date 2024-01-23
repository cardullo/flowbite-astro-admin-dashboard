/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CS8lcJDg.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$LayoutStacked } from './404_LwW1Ytqy.mjs';
import { g as $$FormSignIn } from './kitchen-sink_uFJC2v4U.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$SignIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignIn;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]"> ${renderComponent($$result2, "FormSignIn", $$FormSignIn, {})} </div> ` })}`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/app/authentication/sign-in.astro", void 0);

const $$file = "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/app/authentication/sign-in.astro";
const $$url = "/app/authentication/sign-in";

export { $$SignIn as default, $$file as file, $$url as url };
