"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Default Leaflet marker icons don't load correctly with bundlers unless
// pointed at CDN-hosted images explicitly.
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

type Location = {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  description: string | null;
};

// Centered on Kitchener-Waterloo; adjust if your venues span further.
const DEFAULT_CENTER: [number, number] = [43.45, -80.49];

export default function EventsMap() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/locations")
      .then((res) => res.json())
      .then((data) => setLocations(data as Location[]))
      .catch(() => setLocations([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: "480px" }}>
      {loading ? (
        <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-500">
          Loading venues…
        </div>
      ) : (
        <MapContainer center={DEFAULT_CENTER} zoom={11} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((loc) => (
            <Marker key={loc.id} position={[loc.latitude, loc.longitude]} icon={markerIcon}>
              <Popup>
                <strong>{loc.name}</strong>
                <br />
                {loc.address}
                {loc.description ? (
                  <>
                    <br />
                    {loc.description}
                  </>
                ) : null}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}
