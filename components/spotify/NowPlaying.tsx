"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import TrackCard from "./TrackCard";
import type { SpotifyResponse } from "@/lib/spotify";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NowPlaying() {
  const { data, error, isLoading } = useSWR<SpotifyResponse>(
    "/api/spotify/now-playing",
    fetcher,
    { refreshInterval: 30000 } // Refresh every 30 seconds
  );

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
          <div className="w-12 h-12 rounded-md bg-white/10" />
          <div className="flex-1">
            <div className="h-4 bg-white/10 rounded w-3/4 mb-2" />
            <div className="h-3 bg-white/10 rounded w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-gray-400 py-4">
        <p>Unable to fetch Spotify data</p>
      </div>
    );
  }

  if (!data?.isPlaying || !data?.track) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
      >
        <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
        <div>
          <p className="text-gray-400">Not playing anything</p>
          <p className="text-gray-500 text-sm">Spotify is paused</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-green-400 text-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        Now Playing
      </div>
      <TrackCard track={data.track} showProgress />
    </div>
  );
}
