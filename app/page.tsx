import { Posts } from "./posts";
import { getPosts } from "./get-posts";
import { HomeHero } from "@/components/HomeHero";
import { getNowPlayingTrack } from "@/lib/spotify";

export const revalidate = 300;

export default async function Home() {
  const posts = await getPosts();
  const latestPost = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  const nowPlaying = await getNowPlayingTrack();
  return (
    <>
      <HomeHero latestPost={latestPost} nowPlaying={nowPlaying} />
      <div className="max-w-2xl mx-auto px-6">
        <Posts posts={posts} />
      </div>
    </>
  );
}
