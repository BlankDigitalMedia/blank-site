import { Header } from "./header";
import { getPosts } from "../get-posts";

export const revalidate = 300;

export default async function Layout({ children }) {
  const posts = await getPosts();

  return (
    <article className="text-foreground mb-10">
      <Header posts={posts} />

      {children}
    </article>
  );
}
