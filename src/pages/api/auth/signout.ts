import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  const message = encodeURIComponent("You have been logged out successfully.");
  return redirect(`/app/authentication/sign-in?message=${message}`);
};
