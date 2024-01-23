import { s as supabase } from './callback_iZLZdUtQ.mjs';

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  if (!email) {
    return redirect(`/app/authentication/forgot-password?error=${encodeURIComponent("Email is required")}`);
  }
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:4321/app/authentication/reset-password"
    // updated URL
  });
  if (error) {
    const errorMessage = error.message;
    return redirect(`/app/authentication/forgot-password?error=${encodeURIComponent(errorMessage)}`);
  }
  return redirect(`/app/authentication/forgot-password?message=${encodeURIComponent("Check your email, we have sent you a message to reset your password.")}`);
};

export { POST };
