/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, e as renderComponent } from '../astro_CS8lcJDg.mjs';
import 'kleur/colors';
import 'clsx';
import { a as asset, $ as $$LayoutStacked } from './404_oVBWOn3m.mjs';

const $$Astro$1 = createAstro("http://localhost:4321");
const $$VerifyYourAccount$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VerifyYourAccount$1;
  const url2 = new URL(Astro2.request.url);
  const email = url2.searchParams.get("email");
  const code = url2.searchParams.get("code");
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-gray-900"> <a href="#" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"> <img${addAttribute(asset("images/logo.svg"), "src")} alt="FlowBite Logo" class="mr-4 h-11"> <span>Flowbite</span> </a> <!-- Card --> <div class="w-full max-w-md bg-white rounded-lg shadow md:mt-0 xl:p-0 dark:bg-gray-800"> <div class="w-full p-6 sm:p-8"> <div class="flex space-x-4"> <!-- <img
					class="w-8 h-8 rounded-full"
					src={asset('images/users/bonnie-green.png')}
					alt="Bonnie image"
				/> --> <h2 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
Verify your account
</h2> </div> <p class="text-base font-normal text-gray-500 dark:text-gray-400">
Better to be safe than sorry.
</p> <form class="mt-8 space-y-6" action="/api/auth/resetpassword" method="post"> <!-- input fields for the new password --> <input type="hidden" name="code"${addAttribute(code, "value")}> <!-- rest of your form --> <div> <label for="profile-lock" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">We sent an email to:</label> <input type="password" name="profile-lock" id="profile-lock" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${addAttribute(email, "placeholder")} required disabled> </div> <div class="flex items-start"> <div class="flex items-center h-5"></div> <label for="remember" class="font-medium text-gray-900 dark:text-white">Kindly verify your email and after visiting the login page below to get started! </label> </div> <div> <a href="/authentication/sign-in" class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"></path> </svg>
Login
</a> </div> </form> </div> </div> </div>`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/modules/VerifyYourAccount.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$VerifyYourAccount = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VerifyYourAccount;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]"> ${renderComponent($$result2, "VerifyYourAccount", $$VerifyYourAccount$1, {})} </div> ` })}`;
}, "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/app/authentication/verify-your-account.astro", void 0);

const $$file = "/Users/francescocardullo/GitHub/flowbite-astro-admin-dashboard/src/pages/app/authentication/verify-your-account.astro";
const $$url = "/app/authentication/verify-your-account";

export { $$VerifyYourAccount as default, $$file as file, $$url as url };
