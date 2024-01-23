import { s as supabase } from './callback_iZLZdUtQ.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const provider = formData.get("provider")?.toString();
  if (provider) {
    const { data: data2, error: error2 } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: "https://astro-supabase-auth.vercel.app/api/auth/callback"
      }
    });
    if (error2) {
      return redirect(`/app/authentication/sign-in?error=${encodeURIComponent(error2.message)}`);
    }
    return redirect(data2.url);
  }
  if (!email || !password) {
    return redirect(`/app/authentication/sign-in?error=${encodeURIComponent("Email and password are required")}`);
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    return redirect(`/app/authentication/sign-in?error=${encodeURIComponent(error.message)}`);
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    sameSite: "strict",
    path: "/",
    secure: true
  });
  cookies.set("sb-refresh-token", refresh_token, {
    sameSite: "strict",
    path: "/",
    secure: true
  });
  return redirect("/app/dashboard");
};

export { POST };
