/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CS8lcJDg.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$LayoutStacked } from './404_oVBWOn3m.mjs';
import { d as $$FormResetPassword } from './kitchen-sink_tPdfWePJ.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResetPassword;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]"> ${renderComponent($$result2, "FormResetPassword", $$FormResetPassword, {})} </div> ` })}`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/app/authentication/reset-password.astro", void 0);

const $$file = "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/app/authentication/reset-password.astro";
const $$url = "/app/authentication/reset-password";

export { $$ResetPassword as default, $$file as file, $$url as url };
