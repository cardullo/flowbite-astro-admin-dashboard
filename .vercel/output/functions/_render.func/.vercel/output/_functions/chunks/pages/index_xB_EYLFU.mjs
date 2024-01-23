/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro_CS8lcJDg.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$LayoutSidebar, a as $$DashBoard } from './dashboard_npkZsVAQ.mjs';
import { $ as $$LayoutStacked } from './404_LwW1Ytqy.mjs';
/* empty css                          */

const $$Astro$4 = createAstro("http://localhost:4321");
const $$AuthWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AuthWrapper;
  return renderTemplate`<!-- ---
import { useAuth } from '@auth/auth'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = Deno.env.get('SUPABASE_URL')
const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function AuthWrapper({ children }) {
  
  const auth = useAuth();

  if (auth.loading) {
    return <div>"Loading..."</div>;
  }

  if (!auth.loggedIn) {
    window.location.href = '/login';
  }

  const { user } = auth;

  const { data, error } = await supabase
    .from('users')
    .select('id')
    .eq('id', user.id);

  if (error) {
    console.error(error);
    return <div>Error</div>;
  }

  if (!data || data.length === 0) {
    await supabase.from('users').insert({ id: user.id });
  }

  return children;
}

--- -->${maybeRenderHead()}<p></p>`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/components/AuthWrapper.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "AuthWrapper", $$AuthWrapper, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DashBoard", $$DashBoard, {})} ` })} ` })}`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/app/index.astro", void 0);

const $$file$1 = "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/app/index.astro";
const $$url$1 = "/app";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("http://localhost:4321");
const $$PoolInterestsEvaluation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PoolInterestsEvaluation;
  return renderTemplate` ${maybeRenderHead()}<div> <!-- <h3 class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4">
		Interests Earned After 1 Year</h3> --> <p class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white  mb-8" id="interests_earned">$511.07</p> <div class="flex justify-between mt-4"> <span class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white mb-4">Initial Balance</span> <span id="initial_balance" class="font-bold">$1,000.00</span> </div> <div> <div class="relative w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700 progress-container"> <div class="absolute h-4 bg-blue-600 rounded-full dark:bg-blue-500 progress-bar" style="width: 0%"></div> <div class="absolute top-1/2 -right-2 w-8 h-8 bg-blue-600 rounded-full dark:bg-blue-500 progress-icon cursor-ew-resize transform -translate-y-1/2" style="left: 0%"></div> </div> </div> <div class="flex justify-between mb-2 ml-2 text-gray-500"> <span>Future value</span> <span class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400 font-bold" id="future_value">$1,601.03</span> </div> <div class="flex justify-between mb-2 ml-2 text-gray-500"> <span>Effective annual rate (APY)</span> <span class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400" id="apy">42.00%</span> </div> <div class="flex justify-between mb-2 ml-2 text-gray-500"> <span>Compounded (APY)</span> <span class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400" id="c_apy">51.11%</span> </div> <div class="flex justify-between mb-2 ml-2 text-gray-500"> <span>Maximum Downside</span> <span class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400" id="maximum_downside">~20%</span> </div> <div class="flex justify-between mb-2 ml-2 text-gray-500"> <span>UFOX Tokens Earned</span> <span class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400 font-bold" id="ufox">160.10 UFOX</span> </div> <p class="text-sm mt-4 p-4 font-normal text-gray-500 dark:text-gray-400" id="rule">
Assuming there are no withdrawals within a year and considering the compounded interest on your investment, the pool in question is the Royal Foxes. It provides an average APY ranging from 35% to 55%. The risk level is categorized as A, indicating relatively limited risks, and the maximum downside is capped at -20%. This means that even in a worst-case scenario, the maximum losses cannot exceed 20%.
</p> </div>`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/components/PoolInterestsEvaluation.astro", void 0);

const $$Astro$1 = createAstro("http://localhost:4321");
const $$LandingHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LandingHome;
  return renderTemplate`${maybeRenderHead()}<div class=" from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-100 mb-20 p-4 lg:p-16 shadow-xl shadow-slate-200 dark:shadow-slate-900"> <!-- header --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <!-- Left Div --> <div class="p-4 mb-4 xl:mb-0"> <h2 class="text-3xl lg:text-6xl dark:text-slate-200 text-slate-600 leading-tight mb-4">
Empower Your <a rel="noopener nofollow" href="https://astro.build" class="font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-violet-800 dark:from-pink-300 dark:to-violet-700 no-underline">Wealth</a> With
<br>Our <a rel="noopener nofollow" href="https://flowbite.com" class="font-bold text-blue-600 dark:text-blue-500 no-underline">Expertise</a> </h2> <p class="text-xl lg:text-1xl">
Let uFox AI manage your capital while you reap up to 90% in profits.
</p> </div> <!-- Right Div --> <div class="p-4 mb-4  xl:mb-0"> <div class="flex justify-center w-full"> <img src="https://uncharted.network/assets/images/home-chart.png" class="w-200 h-200" alt="Uncharted Fox"> </div> </div> </div> <!-- end header  --> <div class="px-4 pt-6"> <!-- <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3"> --> <!-- 2 columns --> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 gap-4"> <!-- Activity Card --> <div class="md:col-span-3 p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0"> <div class="flex items-center justify-between mb-4"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
Pool Investment Evaluation
</h3> </div> <ol> <span class="inline-flex items-center text-base text-gray-900 dark:text-white mb-4">
Earn daily and fast track your goals.
</span> <li> <div id="toast-simple" class="flex items-center w-full max-w-sm p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg  dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 mb-5" role="alert"> <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"></path> </svg> <div class="ps-4 text-sm font-normal">Up to 85% effective annual rates.</div> </div> <div id="toast-simple" class="flex items-center w-full max-w-sm p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg  dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 mb-5" role="alert"> <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"></path> </svg> <div class="ps-4 text-sm font-normal">Assets protection with limited downsides.</div> </div> <div id="toast-simple" class="flex items-center w-full max-w-sm p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg  dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 mb-5" role="alert"> <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"></path> </svg> <div class="ps-4 text-sm font-normal">Quarterly withdrawal options.</div> </div> <div id="toast-simple" class="flex items-center w-full max-w-sm p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg  dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 mb-5" role="alert"> <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"></path> </svg> <div class="ps-4 text-sm font-normal">Automatic earning compounding.</div> </div> <div id="toast-simple" class="flex items-center w-full max-w-sm p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg  dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 mb-5" role="alert"> <svg class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"></path> </svg> <div class="ps-4 text-sm font-normal">Pay less fees with UFOX Token.</div> </div> </li> </ol> </div> <!-- Activity Card --> <div class="md:col-span-7 p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0"> <div class="flex items-center justify-between mb-4"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
Interest Earned After 1 Year
</h3> </div> <ol> ${renderComponent($$result, "PoolInterestsEvaluation", $$PoolInterestsEvaluation, {})} </ol> </div> </div> <div class="grid grid-cols-1 my-4 xl:grid-cols-2 xl:gap-4"> <div class="md:col-span-10 p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 xl:mb-0 flex justify-center items-center"> <a href="/app/authentication/sign-up"> <button class="flex items-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"> <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 -22 30"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"></path> </svg>
Open Account
</button> </a> </div> </div> <!-- pool end --> </div> </div>`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/modules/LandingHome.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingHome", $$LandingHome, {})} ` })}`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/index.astro", void 0);

const $$file = "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
