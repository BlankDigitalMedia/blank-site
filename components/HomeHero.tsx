"use client";

import { HeroBento } from "@/components/HeroBento";
import { Post } from "@/app/get-posts";
import { type NowPlayingTrack } from "@/components/NowPlaying";
import { type Status } from "@/app/get-status";

export function HomeHero({
  latestPosts,
  nowPlaying,
  status,
}: {
  latestPosts: Post[];
  nowPlaying: NowPlayingTrack | null;
  status: Status | null;
}) {
  return (
    <div className="mb-16">
      <HeroBento latestPosts={latestPosts} nowPlaying={nowPlaying} status={status} />
    </div>
  );
}
