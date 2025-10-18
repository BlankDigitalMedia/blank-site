"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { NewsletterCard } from "@/components/NewsletterCard";
import { IconHome, IconBook, IconUser, IconMail } from "@tabler/icons-react";
import { Post } from "@/app/get-posts";
import { NowPlaying, type NowPlayingTrack } from "@/components/NowPlaying";

export function HomeHero({
  latestPost,
  nowPlaying,
}: {
  latestPost?: Post;
  nowPlaying: NowPlayingTrack | null;
}) {
  const items = [
    {
      title: "Builder. Technologist. Tinkerer.",
      description: "I break things until they make sense.",
      header: null,
      className: "md:col-span-2 lg:col-span-3",
      icon: <IconHome className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Now Listening",
      description: <NowPlaying track={nowPlaying} />,
      header: null,
      className: "md:col-span-1",
      icon: null, // Or add an icon if desired
    },
    {
      title: "Latest Post",
      description: latestPost ? <a href={`/post/${latestPost.id}`} className="underline text-muted-foreground hover:text-foreground">{latestPost.title}</a> : "No posts yet",
      header: null,
      className: "md:col-span-1",
      icon: <IconBook className="h-4 w-4 text-neutral-500" />,
    },
    {
    title: "About",
    description: <a href="/about" className="underline text-muted-foreground hover:text-foreground">I build things to understand them. Here’s what that means →</a>,
    header: null,
    className: "md:col-span-2 lg:col-span-1",
    icon: <IconUser className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Newsletter",
      description: <NewsletterCard />,
      header: null,
      className: "md:col-span-2 lg:col-span-3",
      icon: <IconMail className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="mb-16">
      <BentoGrid className="w-full md:max-w-[80%] mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 gap-4 md:auto-rows-[12rem] lg:grid-cols-3">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
