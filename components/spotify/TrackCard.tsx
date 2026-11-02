"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { SpotifyTrack } from "@/lib/spotify";

interface TrackCardProps {
  track: SpotifyTrack;
  index?: number;
  showProgress?: boolean;
}

export default function TrackCard({ track, index, showProgress }: TrackCardProps) {
  const progress = showProgress && track.progress && track.duration
    ? (track.progress / track.duration) * 100
    : 0;

  return (
    <motion.a
      href={track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index ? index * 0.05 : 0 }}
      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
    >
      {/* Album Art */}
      <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
        {track.albumImageUrl ? (
          <Image
            src={track.albumImageUrl}
            alt={track.album}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-white/10 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
        )}
      </div>

      {/* Track Info */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium truncate group-hover:text-green-400 transition-colors">
          {track.name}
        </p>
        <p className="text-gray-400 text-sm truncate">{track.artist}</p>

        {/* Progress Bar */}
        {showProgress && track.isPlaying && (
          <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        )}
      </div>

      {/* Index or Playing Indicator */}
      {index !== undefined && (
        <span className="text-gray-500 text-sm font-mono w-6 text-right">
          {index + 1}
        </span>
      )}

      {track.isPlaying && (
        <div className="flex items-center gap-0.5">
          {[1, 2, 3].map((bar) => (
            <motion.div
              key={bar}
              className="w-1 bg-green-500 rounded-full"
              animate={{
                height: ["8px", "16px", "8px"],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: bar * 0.1,
              }}
            />
          ))}
        </div>
      )}
    </motion.a>
  );
}
