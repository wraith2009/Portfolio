"use client";

import { useState } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import TrackCard from "./TrackCard";
import type { SpotifyTrack } from "@/lib/spotify";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const timeRanges = [
  { value: "short_term", label: "4 Weeks" },
  { value: "medium_term", label: "6 Months" },
  { value: "long_term", label: "All Time" },
] as const;

export default function TopTracks() {
  const [timeRange, setTimeRange] = useState<"short_term" | "medium_term" | "long_term">("short_term");

  const { data, error, isLoading } = useSWR<{ tracks: SpotifyTrack[] }>(
    `/api/spotify/top-tracks?time_range=${timeRange}&limit=5`,
    fetcher
  );

  return (
    <div className="space-y-4">
      {/* Time Range Selector */}
      <div className="flex gap-2">
        {timeRanges.map((range) => (
          <button
            key={range.value}
            onClick={() => setTimeRange(range.value)}
            className={`px-3 py-1.5 text-sm rounded-full transition-all ${
              timeRange === range.value
                ? "bg-green-500 text-black font-medium"
                : "bg-white/10 text-gray-400 hover:bg-white/20"
            }`}
          >
            {range.label}
          </button>
        ))}
      </div>

      {/* Tracks List */}
      {isLoading ? (
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
      ) : error ? (
        <div className="text-center text-gray-400 py-4">
          <p>Unable to fetch top tracks</p>
        </div>
      ) : (
        <motion.div
          key={timeRange}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-2"
        >
          {data?.tracks.map((track, index) => (
            <TrackCard key={`${track.songUrl}-${index}`} track={track} index={index} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
