const GET = async ({ cookies, redirect }) => {
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
  const message = encodeURIComponent("You have been logged out successfully.");
  return redirect(`/app/authentication/sign-in?message=${message}`);
};

export { GET };
