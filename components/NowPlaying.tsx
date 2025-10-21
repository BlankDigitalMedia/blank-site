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
      className="flex flex-col gap-4 text-muted-foreground group"
    >
      {track.artworkUrl ? (
        <div className="w-full">
          <Image
            src={track.artworkUrl}
            alt={track.name}
            width={300}
            height={300}
            className="w-full h-auto rounded-lg object-cover shadow-sm aspect-square max-w-[140px] sm:max-w-[160px]"
            priority={false}
          />
        </div>
      ) : null}
      <div>
        <div className="text-base font-semibold text-foreground line-clamp-1 group-hover:text-foreground/90">
          {track.name}
        </div>
        <div className="text-sm line-clamp-1 mt-1">{track.artist}</div>
        <div className="mt-3 flex items-center gap-1.5">
          {track.isPlaying && (
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          )}
          <span
            className={cn(
              "text-[0.65rem] uppercase tracking-wide",
              track.isPlaying ? "text-emerald-500" : "text-muted-foreground"
            )}
          >
            {track.isPlaying ? "Now Playing" : "Recently Played"}
          </span>
        </div>
      </div>
    </a>
  );
}
