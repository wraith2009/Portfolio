"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import TrackCard from "./TrackCard";
import type { SpotifyTrack } from "@/lib/spotify";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function RecentlyPlayed() {
  const { data, error, isLoading } = useSWR<{ tracks: SpotifyTrack[] }>(
    "/api/spotify/recently-played?limit=5",
    fetcher,
    { refreshInterval: 300000 } // Refresh every 5 minutes
  );

  if (isLoading) {
    return (
      <div className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="animate-pulse flex items-center gap-3 p-3 rounded-lg bg-white/5">
            <div className="w-12 h-12 rounded-md bg-white/10" />
            <div className="flex-1">
              <div className="h-4 bg-white/10 rounded w-3/4 mb-2" />
              <div className="h-3 bg-white/10 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-gray-400 py-4">
        <p>Unable to fetch recently played tracks</p>
      </div>
    );
  }

  if (!data?.tracks.length) {
    return (
      <div className="text-center text-gray-400 py-4">
        <p>No recently played tracks</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-2"
    >
      {data.tracks.map((track, index) => (
        <TrackCard key={`${track.songUrl}-${index}`} track={track} index={index} />
      ))}
    </motion.div>
  );
}
