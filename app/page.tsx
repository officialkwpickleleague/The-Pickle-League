import Link from "next/link";
import Footer from "@/components/Footer";
import EventsMap from "@/components/EventsMapLoader";

// Swap these for real R2-hosted photo URLs when the media bucket is set up.
const communityPhotos = Array.from({ length: 6 }, (_, i) => i + 1);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white bg-gray-800">
        {/* Replace this div with a real hero photo later */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">The Pickle League</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Weekly social pickleball nights across the KW Region — no experience needed.
          </p>
          <Link
            href="/events"
            className="inline-block bg-gradient-to-br from-brand to-brand-light text-white font-semibold rounded-full px-10 py-4 shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            Register for a session
          </Link>
        </div>
      </section>

      {/* Intro blurb */}
      <section className="max-w-3xl mx-auto text-center px-6 py-16">
        <p className="text-lg text-gray-600 leading-relaxed">
          The Pickle League runs weekly Social Nights that rotate between venues around
          Kitchener-Waterloo — pickleball, food, and drinks, all in one evening. Every skill
          level is welcome, and we occasionally host special events on top of the regular
          schedule.
        </p>
      </section>

      {/* Events */}
      <section className="bg-brand py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Events
          </h2>
          <EventsMap />
          <div className="text-center mt-10">
            <Link
              href="/events"
              className="inline-block bg-white text-brand font-semibold rounded-full px-10 py-4 hover:-translate-y-0.5 transition-transform"
            >
              See upcoming sessions
            </Link>
          </div>
        </div>
      </section>

      {/* Behind the Pickle */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100 shadow-lg" />
          <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100 shadow-lg" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-brand mb-4">Our inspiration</h3>
          <p className="text-gray-600 leading-loose mb-8">
            For over a decade, we&apos;ve shared a love for tennis and pickleball while
            competing, coaching, and inspiring players of all ages and skill levels. That
            passion led us to create The Pickle League, a welcoming community where everyone
            can grow their game and connect with fellow players.
          </p>
          <h3 className="text-2xl font-bold text-brand mb-4">Our mission</h3>
          <p className="text-gray-600 leading-loose mb-8">
            We strive to create a welcoming community for players of all skill levels.
            Regardless of where you&apos;re starting from, we&apos;re determined to help you
            leave a better player than you came.
          </p>
          <Link
            href="/about"
            className="inline-block bg-gradient-to-br from-brand to-brand-light text-white font-semibold rounded-full px-8 py-3"
          >
            Meet the team
          </Link>
        </div>
      </section>

      {/* Community photo grid */}
      <section className="bg-brand py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Spirit of the pickle
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {communityPhotos.map((n) => (
              <div
                key={n}
                className="aspect-square rounded-xl bg-white/10 flex items-center justify-center text-white/60 text-sm"
              >
                Photo {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}