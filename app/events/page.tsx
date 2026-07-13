import Footer from "@/components/Footer";
import EventsMap from "@/components/EventsMapLoader";

export default function EventsPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-brand mb-6 text-center">Events</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Social Nights rotate between venues around the KW Region. Find an upcoming session
          on the map below, then register for your spot.
        </p>
        <EventsMap />
        {/* Registration form (Google Form embed or D1-backed form) goes here */}
      </section>
      <Footer />
    </>
  );
}