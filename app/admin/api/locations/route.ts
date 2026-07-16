import { getCloudflareContext } from "@opennextjs/cloudflare";

// POST /admin/api/locations — adds a new venue.
//
// This route is not protected by anything in code. It relies entirely on
// Cloudflare Access being configured (in the dashboard) to require login
// for every path under /admin/*, which includes this API route. Requests
// that reach this function have already been authenticated by Cloudflare
// at the edge, before your Worker code ever runs.
//
// Cloudflare Access forwards the logged-in user's email in the
// Cf-Access-Authenticated-User-Email header, which we use purely for an
// audit trail (who added which venue) — not for authorization.
export async function POST(request: Request) {
  const { env } = getCloudflareContext();

  const addedBy = request.headers.get("Cf-Access-Authenticated-User-Email") ?? "unknown";

  type LocationInput = {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    description?: string;
  };

  const body = (await request.json()) as LocationInput;

  if (!body.name || !body.address || !body.latitude || !body.longitude) {
    return new Response("Missing required fields", { status: 400 });
  }

  await env.DB.prepare(
    "INSERT INTO locations (name, address, latitude, longitude, description, added_by) VALUES (?, ?, ?, ?, ?, ?)"
  )
    .bind(body.name, body.address, body.latitude, body.longitude, body.description ?? null, addedBy)
    .run();

  return Response.json({ success: true });
}