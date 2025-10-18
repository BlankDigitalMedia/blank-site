"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export type NowPlayingTrack = {
  name: string;
  artist: string;
  artworkUrl: string | null;
  url: string | null;
  isPlaying: boolean;
};

export function NowPlaying({ track }: { track: NowPlayingTrack | null }) {
  if (!track) {
    return (
      <div className="text-sm text-muted-foreground">
        Song Title by Artist Name
      </div>
    );
  }

  return (
    <a
      href={track.url ?? undefined}
      target={track.url ? "_blank" : undefined}
      rel={track.url ? "noreferrer" : undefined}
      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
    >
      {track.artworkUrl ? (
        <Image
          src={track.artworkUrl}
          alt={track.name}
          width={44}
          height={44}
          className="rounded"
        />
      ) : null}
      <div>
        <div className="font-medium text-foreground">{track.name}</div>
        <div className="text-xs text-muted-foreground">{track.artist}</div>
        <div
          className={cn(
            "mt-1 text-[0.65rem] uppercase tracking-wide",
            track.isPlaying ? "text-green-500" : "text-muted-foreground"
          )}
        >
          {track.isPlaying ? "Now Playing" : "Recently Played"}
        </div>
      </div>
    </a>
  );
}
