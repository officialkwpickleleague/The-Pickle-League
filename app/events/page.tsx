import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const EventsMap = dynamic(() => import("@/components/EventsMap"), {
  ssr: false,
  loading: () => <div className="h-[480px] rounded-2xl bg-gray-100 animate-pulse" />,
});

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
