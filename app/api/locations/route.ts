import { getCloudflareContext } from "@opennextjs/cloudflare";

// GET /api/locations — public. Returns all active venues for the Events map.
// Venue creation lives at /admin/api/locations, which sits behind
// Cloudflare Access rather than in this public route.
export async function GET() {
  const { env } = getCloudflareContext();
  const { results } = await env.DB.prepare(
    "SELECT id, name, address, latitude, longitude, description FROM locations WHERE is_active = 1 ORDER BY name"
  ).all();

  return Response.json(results);
}
