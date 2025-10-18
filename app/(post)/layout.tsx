import { Header } from "./header";
import { getPosts } from "../get-posts";

export const revalidate = 300;

export default async function Layout({ children }) {
  const posts = await getPosts();

  return (
    <article className="text-foreground mb-10">
      <div className="mx-auto max-w-[68ch] px-4 sm:px-6">
        <Header posts={posts} />
      </div>

      <div className="post">
        {children}
      </div>
    </article>
  );
}
