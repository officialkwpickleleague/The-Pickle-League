import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact Us" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <Link href="/" className="text-2xl font-bold text-brand">
          The Pickle League
        </Link>
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-semibold text-sm text-gray-800 hover:text-brand transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu can be wired up with a client component later */}
      </div>
    </nav>
  );
}
