import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
	const formData = await request.formData();
	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();
	const confirmPassword = formData.get("confirm-password")?.toString();

	if (!email || !password || !confirmPassword) {
		return redirect(`/authentication/sign-up?error=${encodeURIComponent("Email, password and confirm password are required")}`);
	}

	if (password !== confirmPassword) {
		return redirect(`/authentication/sign-up?error=${encodeURIComponent("Passwords do not match")}`);
	}

	const { error } = await supabase.auth.signUp({
		email,
		password,
	});

	if (error) {
		return redirect(`/authentication/sign-up?error=${encodeURIComponent(error.message)}`);
	}
	return redirect(`/authentication/verify-your-account?email=${encodeURIComponent(email)}`);
}

