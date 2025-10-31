"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { NewsletterCard } from "@/components/NewsletterCard";
import {
  EnvelopeIcon,
  PaperClipIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import type { Post } from "@/app/get-posts";
import type { Status } from "@/app/get-status";
import { NowPlaying, type NowPlayingTrack } from "@/components/NowPlaying";
import Link from "next/link";

type HeroBentoProps = {
  latestPosts: Post[];
  nowPlaying: NowPlayingTrack | null;
  status: Status | null;
};

export function HeroBento({ latestPosts, nowPlaying, status }: HeroBentoProps) {
  const items = [
    {
      title: "AI & Web Tools for Southwest Michigan Small Businesses",
      density: "compact" as const,
      align: "between" as const,
      description: (
        <div className="space-y-3">
          <p className="text-base leading-relaxed text-foreground">
            I help local businesses in Bangor, South Haven, Kalamazoo, and Grand Rapids save time and grow with simple AI tools, fast websites, and smart automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="https://cal.com/david-blank-umw37b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              Book Free 15-Min Call
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-border rounded-lg font-medium hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              See What I Can Help With
            </Link>
          </div>
          <div className="pt-3 text-sm text-muted-foreground border-t border-border/50">
            <span className="uppercase tracking-wide text-xs">Based in Michigan</span> • Fast, affordable, no agency overhead
          </div>
        </div>
      ),
      header: null,
      className: "md:col-span-2 xl:col-span-3",
      icon: null,
      watermarkIcon: null,
    },
    {
      title: "Latest",
      description: <LatestPostsList posts={latestPosts} />,
      header: null,
      className: "md:col-span-2 xl:col-span-1",
      icon: null,
    },
    {
      title: "Now Listening",
      description: <NowPlaying track={nowPlaying} />,
      header: null,
      className: "md:col-span-1 xl:col-span-1",
      icon: null,
    },
    {
      title: "Why Work With Me",
      align: "center" as const,
      description: (
        <div className="text-center space-y-2">
          <p className="text-sm text-foreground">
            Marine veteran, builder, and lifelong learner based in Michigan. I keep things simple, move fast, and don't waste your time.
          </p>
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-neutral-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md inline-block"
          >
            Learn more about me →
          </Link>
        </div>
      ),
      header: null,
      className: "md:col-span-1 xl:col-span-1",
      icon: null,
      watermarkIcon: null,
    },
    {
      title: "Newsletter",
      align: "between" as const,
      description: <NewsletterCard />,
      header: null,
      className: "md:col-span-2 xl:col-span-3",
      icon: null,
      watermarkIcon: null,
    },
  ];

  return (
    <BentoGrid className="w-full md:max-w-[80%] mx-auto px-6 sm:px-9 md:px-14 lg:px-20 xl:px-24">
      {items.map((item, index) => (
        <BentoGridItem
          key={index}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          density={item.density}
          align={item.align}
          watermarkIcon={item.watermarkIcon}
        />
      ))}
    </BentoGrid>
  );
}

function LatestPostsList({ posts }: { posts: Post[] }) {
  const fmt = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  return (
    <ul className="divide-y divide-border/50">
      {posts.map((post) => {
        const year = new Date(post.date).getFullYear();
        const tag =
          (post as any).tag ||
          ((post as any).tags?.[0] ?? null);
        return (
          <li key={post.id}>
            <Link
              href={`/${year}/${post.id}`}
              className="group flex items-start py-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md"
            >
              <div className="flex-1">
                <span className="inline-flex items-center gap-2">
                  <span className="transition-colors">
                    {post.title}
                  </span>
                  <ArrowRightIcon className="h-3.5 w-3.5 text-muted-foreground" />
                </span>
                <div className="mt-1 text-[11px] leading-4 text-muted-foreground">
                  {fmt(post.date)}
                  {tag ? <span> • {tag}</span> : null}
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
