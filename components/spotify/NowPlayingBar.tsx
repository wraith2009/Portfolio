"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import type { SpotifyResponse } from "@/lib/spotify";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NowPlayingBar() {
  const { data } = useSWR<SpotifyResponse>(
    "/api/spotify/now-playing",
    fetcher,
    { refreshInterval: 30000 }
  );

  if (!data?.isPlaying || !data?.track) {
    return (
      <div className="flex items-center gap-3 text-[var(--text-muted)] mono text-sm">
        <div className="w-2 h-2 rounded-full bg-[var(--text-muted)]" />
        <span>Spotify — Not playing</span>
      </div>
    );
  }

  return (
    <motion.a
      href={data.track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Animated bars */}
      <div className="flex items-end gap-[2px] h-3">
        {[1, 2, 3].map((bar) => (
          <motion.div
            key={bar}
            className="w-[3px] bg-[var(--accent)] rounded-sm"
            animate={{
              height: ["4px", "12px", "6px", "10px", "4px"],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: bar * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <span className="mono text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors">
        {data.track.name}
      </span>
      <span className="text-[var(--text-subtle)]">—</span>
      <span className="text-[var(--text-subtle)] group-hover:text-[var(--text-muted)] transition-colors">
        {data.track.artist}
      </span>
    </motion.a>
  );
}
