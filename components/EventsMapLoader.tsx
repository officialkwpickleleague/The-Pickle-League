"use client";

import dynamic from "next/dynamic";

const EventsMap = dynamic(() => import("@/components/EventsMap"), {
  ssr: false,
  loading: () => <div className="h-[480px] rounded-2xl bg-gray-100 animate-pulse" />,
});

export default EventsMap;