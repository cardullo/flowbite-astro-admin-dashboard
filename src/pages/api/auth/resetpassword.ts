import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import type { Provider } from "@supabase/supabase-js";


export const POST: APIRoute = async ({ request, redirect }) => {
	const formData = await request.formData();
	const email = formData.get("email")?.toString();

	if (!email) {
		return redirect(`/authentication/reset-password?error=${encodeURIComponent("Email is required")}`);
	}

	const { error } = await supabase.auth.resetPasswordForEmail(email);

	if (error) {
		return redirect(`/authentication/reset-password?error=${encodeURIComponent(error.message)}`);
	}

	return redirect(`/authentication/reset-password?message=${encodeURIComponent("Check your email for a password reset link")}`);
}


