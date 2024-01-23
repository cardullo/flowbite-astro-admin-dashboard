import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dnlavtpjgwmngrpzoqnv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRubGF2dHBqZ3dtbmdycHpvcW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxNDkxMTUsImV4cCI6MjAyMDcyNTExNX0.ZurwrO_0gI1yYRY_f6Z06mutl75QSfseWKlI7T6EjTk";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const newPassword = formData.get("newPassword")?.toString();
  const confirmPassword = formData.get("confirmPassword")?.toString();
  if (!newPassword || !confirmPassword) {
    return redirect(`/app/authentication/reset-password?error=${encodeURIComponent("Missing required parameters")}`);
  }
  if (newPassword !== confirmPassword) {
    return redirect(`/app/authentication/reset-password?error=${encodeURIComponent("Password and confirmation password do not match")}&code=${encodeURIComponent(code)}`);
  }
  const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });
  if (updateError) {
    return redirect(`/app/authentication/reset-password?error=${encodeURIComponent(updateError.message)}`);
  }
  return redirect(`/app/authentication/reset-password?message=${encodeURIComponent("Password updated successfully!")}`);
};

export { POST };
