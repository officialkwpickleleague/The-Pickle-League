"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const AdminLocationPicker = dynamic(() => import("@/components/AdminLocationPicker"), {
  ssr: false,
  loading: () => <div className="h-[320px] rounded-xl bg-gray-100 animate-pulse" />,
});

type Status = "idle" | "saving" | "success" | "error";

export default function AddVenueForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!position) {
      setStatus("error");
      return;
    }
    setStatus("saving");

    try {
      const res = await fetch("/admin/api/locations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          address,
          description,
          latitude: position[0],
          longitude: position[1],
        }),
      });
      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setName("");
      setAddress("");
      setDescription("");
      setPosition(null);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-5">
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="name">
          Venue name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          placeholder="Waterloo Rec Complex"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="address">
          Address
        </label>
        <input
          id="address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          placeholder="101 Father David Bauer Dr, Waterloo, ON"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="description">
          Description (optional)
        </label>
        <input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          placeholder="Thursday Social Nights, 7-9pm"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">
          Location — click the map to drop a pin
        </label>
        <AdminLocationPicker position={position} onPick={(lat, lng) => setPosition([lat, lng])} />
        {position && (
          <p className="text-xs text-gray-500 mt-1">
            {position[0].toFixed(5)}, {position[1].toFixed(5)}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "saving"}
        className="bg-brand text-white font-semibold rounded-full px-8 py-3 disabled:opacity-50"
      >
        {status === "saving" ? "Saving…" : "Add venue"}
      </button>

      {status === "success" && (
        <p className="text-green-700 text-sm">Venue added — it&apos;ll appear on the map immediately.</p>
      )}
      {status === "error" && (
        <p className="text-red-700 text-sm">
          Something went wrong — make sure a location is picked on the map, then try again.
        </p>
      )}
    </form>
  );
}
