import { s as supabase } from './callback_iZLZdUtQ.mjs';

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const confirmPassword = formData.get("confirm-password")?.toString();
  if (!email || !password || !confirmPassword) {
    return redirect(`/app/authentication/sign-up?error=${encodeURIComponent("Email, password and confirm password are required")}`);
  }
  if (password !== confirmPassword) {
    return redirect(`/app/authentication/sign-up?error=${encodeURIComponent("Passwords do not match")}`);
  }
  const { error } = await supabase.auth.signUp({
    email,
    password
  });
  if (error) {
    return redirect(`/app/authentication/sign-up?error=${encodeURIComponent(error.message)}`);
  }
  return redirect(`/app/authentication/verify-your-account?email=${encodeURIComponent(email)}`);
};

export { POST };
