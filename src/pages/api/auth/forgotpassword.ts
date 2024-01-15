import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
	const formData = await request.formData();
	const email = formData.get("email")?.toString();

	if (!email) {
		return redirect(`/authentication/forgot-password?error=${encodeURIComponent("Email is required")}`);
	}

	const supabaseClient = supabase as SupabaseClient
	const { error } = await supabaseClient.auth.api.resetPasswordForEmail(email);

	if (error) {
		return redirect(`/authentication/forgot-password?error=${encodeURIComponent(error.message)}`);
	} else {
		return redirect(`/authentication/forgot-password?message=${encodeURIComponent("Check your email for a password reset link")}`);
	}
}

