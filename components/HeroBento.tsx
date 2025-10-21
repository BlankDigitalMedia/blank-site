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
      title: "Builder. Technologist. Tinkerer.",
      density: "compact" as const,
      align: "between" as const,
      description: (
        <div className="font-mono text-[0.95rem] leading-6 text-muted-foreground space-y-2">
          <div className="uppercase tracking-wide text-xs text-neutral-500">
            $ Currently hacking on:
          </div>
          {status?.projects && status.projects.length > 0 ? (
            <ul className="pl-5 space-y-1.5">
              {status.projects.map((project, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {project.url ? (
                    <Link
                      href={project.url}
                      className="underline decoration-dotted underline-offset-4 hover:text-foreground"
                      target={project.url.startsWith("http") ? "_blank" : undefined}
                      rel={project.url.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {project.name}
                    </Link>
                  ) : (
                    <span className="text-foreground">{project.name}</span>
                  )}
                  <span
                    className={`inline-flex h-1.5 w-1.5 rounded-full ${project.active !== false ? "bg-emerald-500/60" : "bg-muted-foreground/40"} motion-safe:animate-blink motion-reduce:animate-none`}
                    aria-label={project.active ? "live" : "idle"}
                  />
                </li>
              ))}
            </ul>
          ) : (
          <div className="pl-5">
          <span className="text-foreground">something new</span>
          <span className="ml-2 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500/60 motion-safe:animate-blink motion-reduce:animate-none" />
          </div>
          )}
          <div className="mt-3 border-t border-border/50" />

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
      title: "About",
      align: "center" as const,
      description: (
        <div className="text-center">
          <Link
            href="/about"
            className="text-base sm:text-lg text-foreground hover:opacity-90 underline underline-offset-4 decoration-neutral-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md"
          >
            I build things to understand them →
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Blank 2.0 is the next experiment — part OS, part playground.
          </p>
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
