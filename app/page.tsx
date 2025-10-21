import { Posts } from "./posts";
import { getPosts } from "./get-posts";
import { HeroBento } from "@/components/HeroBento";
import { getNowPlayingTrack } from "@/lib/spotify";
import { getStatus } from "./get-status";

export const revalidate = 300;

export default async function Home() {
  const posts = await getPosts();
  const sorted = posts.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const latestPosts = sorted.slice(0, 3);
  const nowPlaying = await getNowPlayingTrack();
  const status = await getStatus();
  
  return (
    <>
      <div className="mb-16">
        <HeroBento latestPosts={latestPosts} nowPlaying={nowPlaying} status={status} />
      </div>
      <div className="max-w-2xl mx-auto px-6">
        <Posts posts={posts} />
      </div>
    </>
  );
}
