import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "The Pickle League",
  description: "Weekly social pickleball nights across the KW Region.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-800 bg-white">
        <Nav />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
