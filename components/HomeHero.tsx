"use client";

import { HeroBento } from "@/components/HeroBento";
import { Post } from "@/app/get-posts";
import { type NowPlayingTrack } from "@/components/NowPlaying";

export function HomeHero({
  latestPost,
  nowPlaying,
}: {
  latestPost?: Post;
  nowPlaying: NowPlayingTrack | null;
}) {
  return (
    <div className="mb-16">
      <HeroBento latestPost={latestPost} nowPlaying={nowPlaying} />
    </div>
  );
}
