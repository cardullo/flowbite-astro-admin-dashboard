import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();

  if (!email) {
    return redirect(`/app/authentication/forgot-password?error=${encodeURIComponent("Email is required")}`);
  }

  // const { error } = await supabase.auth.resetPasswordForEmail(email, {
	// 	redirectTo: 'http://localhost:4321/authentication/reset-password', // updated URL
	// });

	// This version send an OTP log-in, allowing the user to log-in without password.
	const { error } = await supabase.auth.signInWithOtp({
		email: email
	});

  if (error) {
    const errorMessage = error.message;
    return redirect(`/app/authentication/forgot-password?error=${encodeURIComponent(errorMessage)}`);
  }

  return redirect(`/app/authentication/forgot-password?message=${encodeURIComponent("Check your email, we have sent you a message with the Magic Link.")}`);
}


