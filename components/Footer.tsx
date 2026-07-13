import Link from "next/link";

export default function Footer() {
  return (
    <section id="contact-location" className="py-20 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-8">
        <div className="bg-brand rounded-2xl p-10 flex flex-col items-center text-center shadow-lg">
          <h2 className="text-white text-2xl font-bold mb-4">Get in touch</h2>
          <p className="text-white/90 mb-6 max-w-md">
            Have questions about our events or want to get involved? We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="bg-white text-brand font-semibold rounded-full px-8 py-3 hover:-translate-y-0.5 transition-transform"
          >
            Contact us
          </Link>
        </div>

        <div className="bg-brand rounded-2xl p-10 flex flex-col items-center text-center shadow-lg">
          <h2 className="text-white text-2xl font-bold mb-4">Follow our socials</h2>
          <p className="text-white/90 mb-6 max-w-md">
            Stay up to date with event news and highlights.
          </p>
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <a
              href="https://www.instagram.com/officialpickleleague/"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-brand font-semibold rounded-xl px-6 py-3 hover:-translate-y-0.5 transition-transform"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1Bge9bzEtj/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-brand font-semibold rounded-xl px-6 py-3 hover:-translate-y-0.5 transition-transform"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <blockquote className="text-lg text-gray-600 italic max-w-md">
          &quot;In pickleball, as in life, the point is rarely won by force, but by
          patience, placement, and knowing when not to swing.&quot;
        </blockquote>
        <p className="text-lg text-gray-600 italic mt-4">— Matthew Gartner</p>
      </div>
    </section>
  );
}
