import type { APIRoute } from "astro";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dnlavtpjgwmngrpzoqnv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRubGF2dHBqZ3dtbmdycHpvcW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxNDkxMTUsImV4cCI6MjAyMDcyNTExNX0.ZurwrO_0gI1yYRY_f6Z06mutl75QSfseWKlI7T6EjTk';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  // const code = formData.get("code")?.toString();
  const newPassword = formData.get("newPassword")?.toString();
  const confirmPassword = formData.get("confirmPassword")?.toString();

  // if (!code || !newPassword || !confirmPassword) {
  //   return redirect(`/authentication/reset-password?error=${encodeURIComponent("Missing required parameters")}`);
  // }

	if (!newPassword || !confirmPassword) {
    return redirect(`/app/authentication/reset-password?error=${encodeURIComponent("Missing required parameters")}`);
  }


  if (newPassword !== confirmPassword) {
    return redirect(`/app/authentication/reset-password?error=${encodeURIComponent("Password and confirmation password do not match")}&code=${encodeURIComponent(code)}`);
  }

  // Update the user's password
  const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });

	

	// const { data, error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: 'https://example.com/update-password', })

  if (updateError) {
    return redirect(`/app/authentication/reset-password?error=${encodeURIComponent(updateError.message)}`);
  }

  return redirect(`/app/authentication/reset-password?message=${encodeURIComponent("Password updated successfully!")}`);
}
