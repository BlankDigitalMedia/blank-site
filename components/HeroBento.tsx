"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { NewsletterCard } from "@/components/NewsletterCard";
import {
  EnvelopeIcon,
  PaperClipIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import type { Post } from "@/app/get-posts";
import { NowPlaying, type NowPlayingTrack } from "@/components/NowPlaying";

type HeroBentoProps = {
  latestPost?: Post;
  nowPlaying: NowPlayingTrack | null;
};

export function HeroBento({ latestPost, nowPlaying }: HeroBentoProps) {
  const items = [
    {
      title: "Builder. Technologist. Tinkerer.",
      description: "I break things until they make sense.",
      header: null,
      className: "md:col-span-2 xl:col-span-3",
      icon: <WrenchScrewdriverIcon className="h-5 w-5 text-neutral-500" />,
    },
    {
      title: "Now Listening",
      description: <NowPlaying track={nowPlaying} />,
      header: null,
      className: "md:col-span-1 xl:col-span-1",
      icon: null,
    },
    {
      title: "Latest Post",
      description: latestPost ? (
        <a
          href={`/${new Date(latestPost.date).getFullYear()}/${latestPost.id}`}
          className="underline text-muted-foreground hover:text-foreground"
        >
          {latestPost.title}
        </a>
      ) : (
        "No posts yet"
      ),
      header: null,
      className: "md:col-span-1 xl:col-span-1",
      icon: <PaperClipIcon className="h-5 w-5 text-neutral-500" />,
    },
    {
      title: "About",
      description: (
        <a
          href="/about"
          className="underline text-muted-foreground hover:text-foreground"
        >
          I build things to understand them. Here’s what that means →
        </a>
      ),
      header: null,
      className: "md:col-span-2 xl:col-span-1",
      icon: <UserCircleIcon className="h-5 w-5 text-neutral-500" />,
    },
    {
      title: "Newsletter",
      description: <NewsletterCard />,
      header: null,
      className: "md:col-span-2 xl:col-span-3",
      icon: <EnvelopeIcon className="h-5 w-5 text-neutral-500" />,
    },
  ];

  return (
    <BentoGrid className="w-full md:max-w-[80%] mx-auto px-6 sm:px-9 md:px-14 lg:px-20 xl:px-24 gap-5 sm:gap-6 xl:gap-7 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <BentoGridItem
          key={index}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
