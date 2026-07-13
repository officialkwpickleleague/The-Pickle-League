import AddVenueForm from "@/components/AddVenueForm";

// No auth check happens here in code — this path is protected entirely by
// Cloudflare Access at the edge (see README / setup steps for configuring
// the /admin/* Access policy). Anyone reaching this page has already
// logged in as an approved organizer.
export default function AdminVenuesPage() {
  return (
    <section className="max-w-xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-brand mb-2 text-center">Add a venue</h1>
      <p className="text-gray-500 text-sm text-center mb-10">
        New venues appear on the public Events map immediately.
      </p>
      <AddVenueForm />
    </section>
  );
}
