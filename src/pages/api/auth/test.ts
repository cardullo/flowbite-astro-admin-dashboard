import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  return new Response("This is a test page.", { status: 200 });
};
