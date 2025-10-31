import { Posts } from "./posts";
import { getPosts } from "./get-posts";
import { Hero } from "@/components/Hero";
import { ServicesHighlight } from "@/components/ServicesHighlight";
import { TrustSignals } from "@/components/TrustSignals";
import { NewsletterSection } from "@/components/NewsletterSection";

export const revalidate = 300;

export default async function Home() {
  const posts = await getPosts();
  const sorted = posts.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const topPosts = sorted.slice(0, 6);
  
  return (
    <>
      <Hero />
      
      <div className="my-16">
        <TrustSignals />
      </div>
      
      <div className="my-16">
        <ServicesHighlight />
      </div>
      
      <div className="my-16">
        <NewsletterSection />
      </div>
      
      <div className="max-w-2xl mx-auto px-6 mt-16 mb-20">
        <h2 className="text-2xl font-semibold mb-6">Builder Notes</h2>
        <p className="text-muted-foreground mb-8">
          Technical explorations, experiments, and lessons learned.
        </p>
        <Posts posts={topPosts} />
      </div>
    </>
  );
}
